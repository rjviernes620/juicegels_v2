import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Check, Trash2, Plus, Minus, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { loadProducts, type Product } from "./utils/parseProducts";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { Search } from "./components/Search";


type NailLength = "Short" | "Medium" | "Long";
type CartItem = { product: Product; shape: string; quantity: number ; length: NailLength};
type Page = "home" | "product" | "basket" | "preorder" | "confirmation" | "about" | "videos" | "search";
type FormData = { firstName: string; lastName: string; email: string; phone: string; address: string; instagram: string;city: string; postcode: string; notes: string; };
type ShippingOptionId = "tracked24" | "tracked48";

type CouponSummary = {
  code: string;
  promotionCodeId: string;
  description: string;
  discountAmount: number;
};

type ShippingOption = {
  id: ShippingOptionId;
  stripeRateId: string;
  label: string;
  description: string;
  estimate: string;
  amount: number;
  isFree: boolean;
};

const initialForm: FormData = { firstName: "", lastName: "", email: "", phone: "", address: "", instagram: "", city: "",  postcode: "", notes: "" };

const LOCKED_VARIATION_PRODUCT_IDS = new Set(["JUICEGELS-0286"]);
const META_CART_ORIGIN = "meta_shops";
const CHECKOUT_API_BASE = "https://juicegels-v2.onrender.com";
const SHIPPING_FREE_THRESHOLD = 30;
const SHIPPING_RATE_IDS: Record<ShippingOptionId, string> = {
  tracked24: "shr_1Ti0hyK4CROOpWXUhiIhLqWy",
  tracked48: "shr_1Ti0ieK4CROOpWXU5Cbop3Ii",
};

function formatMoney(amount: number) {
  return `£${amount.toFixed(2)}`;
}

function buildShippingOptions(itemsTotal: number): ShippingOption[] {
  const tracked48IsFree = itemsTotal >= SHIPPING_FREE_THRESHOLD;

  return [
    {
      id: "tracked48",
      stripeRateId: SHIPPING_RATE_IDS.tracked48,
      label: "Royal Mail Tracked 48",
      description: tracked48IsFree
        ? `Free on orders of ${formatMoney(SHIPPING_FREE_THRESHOLD)} or more.`
        : "Standard tracked delivery. (Free on Orders over £30)",
      estimate: "Estimated delivery within 2 days after your order is finished.",
      amount: tracked48IsFree ? 0 : 1.99,
      isFree: tracked48IsFree,
    },
    {
      id: "tracked24",
      stripeRateId: SHIPPING_RATE_IDS.tracked24,
      label: "Royal Mail Tracked 24",
      description: "Priority tracked delivery.",
      estimate: "Estimated delivery within 1 business day after your order is finished.",
      amount: 4,
      isFree: false,
    },
  ];
}

function buildMetaBasketProductsParam(items: CartItem[]) {
  return items
    .map((item) => `${encodeURIComponent(item.product.id)}:${encodeURIComponent(String(item.quantity))}`)
    .join(",");
}

function buildBasketUrl(
  items: CartItem[],
  options?: { coupon?: string | null; includeCoupon?: boolean; cartOrigin?: string | null }
) {
  if (items.length === 0) return "/basket";

  const params = [
    `products=${buildMetaBasketProductsParam(items)}`,
  ];

  if (options?.includeCoupon) {
    params.push(options.coupon ? `coupon=${encodeURIComponent(options.coupon)}` : "coupon");
  }

  if (options?.cartOrigin) {
    params.push(`cart_origin=${encodeURIComponent(options.cartOrigin)}`);
  }

  return `/basket?${params.join("&")}`;
}

function parseMetaBasketProductsParam(productsParam: string, products: Product[]): CartItem[] {
  return productsParam
    .split(",")
    .map((entry) => {
      const [rawId, rawQty] = entry.split(":");
      const id = decodeURIComponent(rawId ?? "").trim();
      const quantity = Math.max(1, Number(decodeURIComponent(rawQty ?? "1")));

      const product = products.find((p) => p.id === id);
      if (!product || Number.isNaN(quantity)) return null;

      return {
        product,
        shape: product.shape,
        length: product.length,
        quantity,
      };
    })
    .filter(Boolean) as CartItem[];
}

function parseBasketItemsParam(itemsParam: string, products: Product[]): CartItem[] {
  return itemsParam
    .split(",")
    .map((entry) => {
      const [rawId, rawShape, rawLength, rawQty] = entry.split("|");

      const id = decodeURIComponent(rawId ?? "").trim();
      const shape = decodeURIComponent(rawShape ?? "").trim();
      const length = decodeURIComponent(rawLength ?? "Medium") as NailLength;
      const quantity = Math.max(1, Number(decodeURIComponent(rawQty ?? "1")));

      const product = products.find((p) => p.id === id);
      if (!product || !shape || Number.isNaN(quantity)) return null;

      return {
        product,
        shape,
        length,
        quantity,
      };
    })
    .filter(Boolean) as CartItem[];
}

function isNailSizeGuideItem(item: CartItem) {
  return item.product.id === "JUICEGELS-0286";
}

function getCartItemDetailText(item: CartItem) {
  if (isNailSizeGuideItem(item)) {
    return `×${item.quantity} · £${(item.product.price * item.quantity).toFixed(2)}`;
  }

  return `${item.shape} · ${item.length} · ×${item.quantity} · £${(item.product.price * item.quantity).toFixed(2)}`;
}

function getOrderSummaryLabel(item: CartItem) {
  if (isNailSizeGuideItem(item)) {
    return `${item.product.name} ×${item.quantity}`;
  }

  return `${item.product.name} (${item.shape} · ${item.length}) ×${item.quantity}`;
}

function normalizeGroupKey(value: string) {
  return value.trim().toLowerCase();
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const normalizedPath = useMemo(() => {
    const path = location.pathname.replace(/\/+$/, "");
    return path || "/";
  }, [location.pathname]);
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedLength, setSelectedLength] = useState<NailLength>("Medium");
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [productsLoadError, setProductsLoadError] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("juicegels_cart") ?? "[]") as CartItem[];
    } catch {
      return [];
    }
  });
  const [form, setForm] = useState<FormData>(() => {
    if (typeof window === "undefined") return initialForm;
    try {
      return JSON.parse(localStorage.getItem("juicegels_form") ?? "null") ?? initialForm;
    } catch {
      return initialForm;
    }
  });
  const [confirmationItems, setConfirmationItems] = useState<CartItem[]>([]);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [activeImg, setActiveImg] = useState(0);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStripeRedirectModal, setShowStripeRedirectModal] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponSummary, setCouponSummary] = useState<CouponSummary | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isCouponLoading, setIsCouponLoading] = useState(false);
  const [shippingOptionId, setShippingOptionId] = useState<ShippingOptionId>("tracked48");
  const [isSizeGuideDiscountApplied, setIsSizeGuideDiscountApplied] = useState(false);
  const [isSizeGuideLoading, setIsSizeGuideLoading] = useState(false);


  const uniqueProducts = useMemo(
    () => products.filter((product, index, self) => index === self.findIndex((p) => normalizeGroupKey(p.groupId) === normalizeGroupKey(product.groupId))),
    [products]
  );

  const currentBasketUrl = (items: CartItem[]) =>
    buildBasketUrl(items, {
      coupon: searchParams.get("coupon"),
      includeCoupon: searchParams.has("coupon") || items.length > 0,
      cartOrigin: searchParams.get("cart_origin") ?? META_CART_ORIGIN,
    });


useEffect(() => {
  let isCancelled = false;

  const fetchProducts = async () => {
    setIsProductsLoading(true);
    setProductsLoadError(null);

    try {
      const loadedProducts = await loadProducts();
      if (!isCancelled) {
        setProducts(loadedProducts);
      }
    } catch (error) {
      if (!isCancelled) {
        setProducts([]);
        setProductsLoadError(error instanceof Error ? error.message : "Failed to load products.");
      }
    } finally {
      if (!isCancelled) {
        setIsProductsLoading(false);
      }
    }
  };

  fetchProducts();

  return () => {
    isCancelled = true;
  };
}, []);


useEffect(() => {
  if (isProductsLoading) return;

  const redirectedPathFromSearch = (() => {
    if (!location.search.startsWith("?/")) return "";

    const [pathPart] = location.search.slice(1).split("&");
    return pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  })();
  const effectivePath = redirectedPathFromSearch || normalizedPath;
  const routeProductId = (() => {
    if (params.id) return params.id;

    const productMatch = effectivePath.match(/^\/product\/([^/?#]+)/);
    return productMatch?.[1] ? decodeURIComponent(productMatch[1]) : "";
  })();

  const hasCheckoutSuccessFlag =
    searchParams.get("checkout") === "success" ||
    searchParams.has("session_id");

  const itemsParam = searchParams.get("items");
  const productsParam = searchParams.get("products");

  if (
    effectivePath === "/confirmation" ||
    effectivePath === "/checkout-success" ||
    (effectivePath === "/" && hasCheckoutSuccessFlag)
  ) {
    let purchasedItems: CartItem[] = [];

    if (itemsParam) {
      purchasedItems = parseBasketItemsParam(itemsParam, products);
    } else if (productsParam) {
      purchasedItems = parseMetaBasketProductsParam(productsParam, products);
    } else if (typeof window !== "undefined") {
      try {
        purchasedItems = JSON.parse(localStorage.getItem("juicegels_cart") ?? "[]") as CartItem[];
      } catch {
        purchasedItems = [];
      }
    }

    setConfirmationItems(purchasedItems);
    setCart([]);
    setPage("confirmation");
    return;
  }

  if (effectivePath === "/basket") {
    const searchParams = new URLSearchParams(location.search);
    const productsParam = searchParams.get("products");
    const itemsParam = searchParams.get("items");

    if (productsParam !== null) {
      setCart(parseMetaBasketProductsParam(productsParam, products));
    } else if (itemsParam) {
      const parsedItems = parseBasketItemsParam(itemsParam, products);
      if (parsedItems.length > 0) setCart(parsedItems);
    }

    setPage("basket");
    return;
  }

  if (effectivePath === "/about") {
    setPage("about");
    return;
  }

  if (effectivePath === "/videos") {
    setPage("videos");
    return;
  }

  if (effectivePath === "/search") {
    setPage("search");
    return;
  }

  if (effectivePath === "/") {
    setPage("home");
    return;
  }

  if (effectivePath.startsWith("/product/") && routeProductId) {
    const normalizedRouteProductId = normalizeGroupKey(routeProductId);
    const product =
      products.find((p) => normalizeGroupKey(p.id) === normalizedRouteProductId) ??
      products.find((p) => normalizeGroupKey(p.groupId) === normalizedRouteProductId);

    if (product) {
      if (isVariationLocked(product)) {
        setSelected(product);
        setSelectedShape(product.shape);
        setSelectedLength(product.length);
        setActiveImg(0);
        setPage("product");
        return;
      }

      const searchParams = new URLSearchParams(location.search);
      const requestedShape = searchParams.get("shape") ?? "";
      const requestedLength = (searchParams.get("length") ?? "") as NailLength;
      const shapes = getProductShapes(product);
      const lengths = getProductLengths(product);
      const nextShape = shapes.includes(requestedShape) ? requestedShape : shapes[0] ?? "";
      const nextLength = lengths.includes(requestedLength) ? requestedLength : lengths[0] ?? "Medium";
      const nextVariant =
        products.find(
          (p) =>
            normalizeGroupKey(p.groupId) === normalizeGroupKey(product.groupId) &&
            p.shape === nextShape &&
            p.length === nextLength
        ) ?? product;

      setSelected(nextVariant);
      setSelectedShape(nextShape);
      setSelectedLength(nextLength);
      setActiveImg(0);
      setPage("product");
      return;
    }
  }

  setPage("home");
}, [isProductsLoading, location.search, normalizedPath, params.id, products, searchParams]);

    useEffect(() => {
    if (page !== "product" || !selected || !selectedShape || !selectedLength) return;

    const search = new URLSearchParams(location.search);
    const currentShape = search.get("shape") ?? "";
    const currentLength = search.get("length") ?? "";

    if (currentShape === selectedShape && currentLength === selectedLength) return;

    syncProductUrl(selected, selectedShape, selectedLength);
  }, [page, selected, selectedShape, selectedLength]);


  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const confirmationCount = confirmationItems.reduce((s, i) => s + i.quantity, 0);

  const hasSizeGuide = cart.some(item => item.product.id === "JUICEGELS-0286");
  const hasNailSet = cart.some(item => item.product.id !== "JUICEGELS-0286");
  const sizeGuideItem = cart.find(item => item.product.id === "JUICEGELS-0286");
  const sizeGuideDiscountAmount = isSizeGuideDiscountApplied && sizeGuideItem ? sizeGuideItem.product.price * sizeGuideItem.quantity : 0;

  const couponDiscount = couponSummary?.discountAmount ?? 0;
  const discountTotal = couponDiscount + sizeGuideDiscountAmount;
  const orderTotal = Math.max(0, cartTotal - discountTotal);
  const hasCouponFeedback = isCouponLoading || !!couponError || !!couponSummary;
  const shippingOptions = useMemo(() => buildShippingOptions(orderTotal), [orderTotal]);
  const selectedShippingOption = shippingOptions.find((option) => option.id === shippingOptionId) ?? shippingOptions[0];
  const shippingTotal = selectedShippingOption?.amount ?? 0;
  const checkoutTotal = orderTotal + shippingTotal;

  

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("juicegels_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("juicegels_form", JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    const email = form.email.trim();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!hasSizeGuide || !hasNailSet || !email || !emailRegex.test(email)) {
      setIsSizeGuideDiscountApplied(false);
      return;
    }

    let active = true;
    const checkEligibility = async () => {
      setIsSizeGuideLoading(true);
      try {
        const response = await fetch(`${CHECKOUT_API_BASE}/check-eligibility`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        if (!response.ok) throw new Error("Failed to check eligibility");
        const data = await response.json();
        if (active) {
          setIsSizeGuideDiscountApplied(data.eligible);
        }
      } catch (err) {
        console.error("Error checking size guide discount eligibility:", err);
      } finally {
        if (active) {
          setIsSizeGuideLoading(false);
        }
      }
    };

    checkEligibility();
    return () => {
      active = false;
    };
  }, [form.email, hasSizeGuide, hasNailSet]);

  useEffect(() => {
    if (!isSubmitting) {
      setShowStripeRedirectModal(false);
      return;
    }

    const timerId = window.setTimeout(() => {
      setShowStripeRedirectModal(true);
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, [isSubmitting]);

  useEffect(() => {
    if (!isSubmitting) return;

    const resetCheckoutUi = () => {
      setShowStripeRedirectModal(false);
      setIsSubmitting(false);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        resetCheckoutUi();
      }
    };

    const handlePageHide = () => {
      resetCheckoutUi();
    };

    if (page !== "preorder") {
      resetCheckoutUi();
      return;
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [isSubmitting, page]);

  useEffect(() => {
    const currentCoupon = searchParams.get("coupon")?.trim() ?? "";
    setCouponInput(currentCoupon);

    if (!currentCoupon) {
      setCouponSummary(null);
      setCouponError(null);
      setIsCouponLoading(false);
      return;
    }

    if (cart.length === 0) {
      setCouponSummary(null);
      setCouponError(null);
      setIsCouponLoading(false);
      return;
    }

    const controller = new AbortController();
    const validateCoupon = async () => {
      setIsCouponLoading(true);
      setCouponError(null);

      try {
        const response = await fetch(`${CHECKOUT_API_BASE}/validate-coupon`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coupon: currentCoupon,
            subtotal: cartTotal,
          }),
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Coupon code could not be applied.");
        }

        setCouponSummary({
          code: data.code,
          promotionCodeId: data.promotionCodeId,
          description: data.description,
          discountAmount: data.discountAmount,
        });
      } catch (error) {
        if (controller.signal.aborted) return;

        setCouponSummary(null);
        setCouponError(error instanceof Error ? error.message : "Coupon code could not be applied.");
      } finally {
        if (!controller.signal.aborted) {
          setIsCouponLoading(false);
        }
      }
    };

    validateCoupon();

    return () => controller.abort();
  }, [cart.length, cartTotal, searchParams]);

  const toggleWishlist = (id: string) =>
    setWishlist((p) => (p.includes(id) ? p.filter((w) => w !== id) : [...p, id]));

  const validLengths: NailLength[] = ["Short", "Medium", "Long"];

  const isVariationLocked = (product: Product) =>
    LOCKED_VARIATION_PRODUCT_IDS.has(product.id);

  const getProductRouteId = (product: Product) =>
    product.id;

  const getProductShapes = (product: Product): string[] => {
    const raw = (product as Product & { shapes?: string[] }).shapes;
    return Array.isArray(raw) && raw.length > 0 ? raw : ["Short Almond", "Medium Almond", "Long Almond"];
  };

  const getProductLengths = (product: Product): NailLength[] => {
    const raw = (product as Product & { lengths?: NailLength[] }).lengths;
    return Array.isArray(raw) && raw.length > 0 ? raw : validLengths;
  };

  const syncProductUrl = (product: Product, shape: string, length: NailLength) => {
    const productRouteId = getProductRouteId(product);

    if (isVariationLocked(product)) {
      navigate(`/product/${productRouteId}`, { replace: true });
      return;
    }

    const search = new URLSearchParams();
    if (shape) search.set("shape", shape);
    if (length) search.set("length", length);
    navigate(`/product/${productRouteId}?${search.toString()}`, { replace: true });
  };

  const navigateToProduct = (product: Product, shape: string, length: NailLength) => {
    const productRouteId = getProductRouteId(product);

    if (isVariationLocked(product)) {
      navigate(`/product/${productRouteId}`);
      return;
    }

    const search = new URLSearchParams();
    if (shape) search.set("shape", shape);
    if (length) search.set("length", length);
    navigate(`/product/${productRouteId}?${search.toString()}`);
  };

  const openProduct = (p: Product) => {
    const shapes = getProductShapes(p);
    const lengths = getProductLengths(p);

    const defaultShape = isVariationLocked(p) ? p.shape : shapes[0] ?? "";
    const defaultLength = isVariationLocked(p) ? p.length : lengths[0] ?? "Medium";

    setSelected(p);
    setSelectedShape(defaultShape);
    setSelectedLength(defaultLength);
    setActiveImg(0);
    setPage("product");

    navigateToProduct(p, defaultShape, defaultLength);
  };

  const handleShopProduct = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) openProduct(product);
  };

  const openBasketItemProduct = (item: CartItem) => {
    const variant = isVariationLocked(item.product)
      ? item.product
      : findVariant(item.product.groupId, item.shape, item.length) ?? item.product;

    setSelected(variant);
    setSelectedShape(item.shape);
    setSelectedLength(item.length);
    setActiveImg(0);
    setPage("product");

    navigateToProduct(variant, item.shape, item.length);
  };
  
  const addToBasket = () => {
    if (!selected || !selectedShape || !selectedLength) return;

    setCart((prev) => {
      const idx = prev.findIndex(
        (i) =>
          i.product.id === selected.id &&
          i.shape === selectedShape &&
          i.length === selectedLength
      );

      let next: CartItem[];

      if (idx >= 0) {
        next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + 1,
        };
      } else {
        next = [
          ...prev,
          {
            product: selected,
            shape: selectedShape,
            length: selectedLength,
            quantity: 1,
          },
        ];
      }

      navigate(currentBasketUrl(next));

      return next;
    });
  };

  const findVariant = (groupId: string, shape: string, length: NailLength) => {
  return products.find(
    (p) =>
      p.groupId === groupId &&
      p.shape === shape &&
      p.length === length
  );
};
const updateQty = (idx: number, delta: number) => {
  setCart((prev) => {
    const next = [...prev];
    const newQty = next[idx].quantity + delta;

    let updated: CartItem[];

    if (newQty <= 0) {
      updated = next.filter((_, i) => i !== idx);
    } else {
      next[idx] = {
        ...next[idx],
        quantity: newQty,
      };
      updated = next;
    }

    navigate(currentBasketUrl(updated));

    return updated;
  });
};

  const removeItem = (idx: number) => {
    setCart((prev) => {
      const updated = prev.filter((_, i) => i !== idx);

      navigate(currentBasketUrl(updated));

      return updated;
    });
  };
  const handleFormChange = (field: keyof FormData, value: string) => {
  setForm((p) => ({ ...p, [field]: value }));
  if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const applyCoupon = () => {
    const trimmedCode = couponInput.trim();

    setCouponError(null);

    navigate(
      buildBasketUrl(cart, {
        coupon: trimmedCode || null,
        includeCoupon: Boolean(trimmedCode),
        cartOrigin: searchParams.get("cart_origin") ?? META_CART_ORIGIN,
      })
    );
  };

  const removeCoupon = () => {
    setCouponInput("");
    setCouponSummary(null);
    setCouponError(null);

    navigate(
      buildBasketUrl(cart, {
        includeCoupon: false,
        cartOrigin: searchParams.get("cart_origin") ?? META_CART_ORIGIN,
      })
    );
  };

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.instagram.trim()) e.instagram = "Required";
    if (!form.postcode.trim()) e.postcode = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (cart.length === 0) {
      setCheckoutError("Your basket is empty.");
      return;
    }

    setCheckoutError(null);
    setShowStripeRedirectModal(false);
    setIsSubmitting(true);

    const endpoint = `${CHECKOUT_API_BASE}/create-checkout-session`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            product: {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
              description: item.product.description,
              image: item.product.image,
            },
            shape: item.shape,
            length: item.length,
            quantity: item.quantity,
          })),
          form,
          coupon: couponSummary?.code ?? null,
          promotionCodeId: couponSummary?.promotionCodeId ?? null,
          shippingRateId: selectedShippingOption?.stripeRateId ?? SHIPPING_RATE_IDS.tracked48,
          shippingOptionId: selectedShippingOption?.id ?? "tracked48",
          checkoutPath: "/confirmation",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Failed to create checkout session.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Checkout failed."
      );
      setShowStripeRedirectModal(false);
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (page === "preorder") setPage("basket");
    else if (page === "basket") setPage(selected ? "product" : "home");
    else if (page === "product") navigate("/home");
    else navigate("/home");
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "var(--background)" }}>
      {showStripeRedirectModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(34, 18, 25, 0.42)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 340,
              background: "var(--card)",
              borderRadius: 18,
              padding: "22px 20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "3px solid var(--border)",
                borderTopColor: "var(--primary)",
                margin: "0 auto 14px",
                animation: "juicegels-spin 1s linear infinite",
              }}
            />
            <h3 style={{ margin: "0 0 8px", fontFamily: "'Lobster', serif", fontSize: 22, color: "var(--foreground)" }}>
              Redirecting to Stripe
            </h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "var(--muted-foreground)" }}>
              You&apos;ll be redirected to Stripe to complete your order. Please wait a moment while we prepare your secure checkout.
            </p>
          </div>
        </div>
      )}

      <style>{`@keyframes juicegels-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      {/* ── Hamburger Menu Drawer ── */}
      {/* Background Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
          zIndex: 99,
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 280,
          maxWidth: "80%",
          height: "100vh",
          background: "var(--background)",
          boxShadow: "10px 0 30px rgba(212, 16, 71, 0.1)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          padding: "20px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <span 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 24, 
              color: "#ffffff"
            }}
          >
            Juice Gels
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", color: "var(--muted-foreground)", cursor: "pointer", padding: 4 }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Home", icon: "🌸", onClick: () => { navigate("/"); setMenuOpen(false); } },
            { label: "Search Sets", icon: "🔍", onClick: () => { navigate("/search"); setMenuOpen(false); } },
            { label: "Nail Videos", icon: "🎬", onClick: () => { navigate("/videos"); setMenuOpen(false); } },
            { label: "Our Story", icon: "📖", onClick: () => { navigate("/about"); setMenuOpen(false); } },
            { label: "Nail Sizing Guide", icon: "📏", onClick: () => { navigate("/product/JUICEGELS-0286"); setMenuOpen(false); } },
            { label: "Shopping Basket", icon: "🛒", onClick: () => { navigate(currentBasketUrl(cart)); setMenuOpen(false); } },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "var(--secondary)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "12px 14px",
                textAlign: "left",
                color: "var(--foreground)",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--secondary)"; }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div style={{ marginTop: "auto", textAlign: "center", paddingTop: 20, borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: 11, color: "var(--muted-foreground)", margin: "0 0 10px" }}>
            Follow Alyssa&apos;s nail updates 🌸
          </p>
          <a
            href="https://instagram.com/juicegels"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--foreground)",
              fontWeight: 600,
              fontSize: 12,
              textDecoration: "underline",
            }}
          >
            Instagram @juicegels
          </a>
        </div>
      </div>

      {/* ── Header ── */}
      <header style={{ background: "var(--card)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setMenuOpen(true)} style={{ color: "var(--primary)", background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>

        <h1 
          onClick={() => navigate("/")}
          style={{ 
            fontFamily: "'Lobster', serif", 
            color: "#ffffff", 
            margin: 0, 
            letterSpacing: "0.04em", 
            fontSize: 26, 
            cursor: "pointer"
          }}
        >
          Juice Gels
        </h1>

        <button onClick={() => navigate(currentBasketUrl(cart))} style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Basket">
          <ShoppingBag size={22} style={{ color: "var(--primary)" }} />
          {cartCount > 0 && (
            <span style={{ position: "absolute", top: -4, right: -4, background: "var(--primary)", color: "#fff", borderRadius: "50%", width: 17, height: 17, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* ── Progress bar (basket / preorder / confirmation) ── */}
      {(page === "basket" || page === "preorder" || page === "confirmation") && (
        <div style={{ display: "flex", padding: "10px 20px", gap: 6, alignItems: "center", background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
          {(["Basket", "Details", "Done"] as const).map((label, i) => {
            const active = (page === "basket" && i === 0) || (page === "preorder" && i === 1) || (page === "confirmation" && i === 2);
            const done = (page === "preorder" && i === 0) || (page === "confirmation" && i <= 1);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, flex: i < 2 ? 1 : undefined }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: done ? "var(--primary)" : active ? "var(--accent)" : "var(--muted)", border: `2px solid ${active || done ? "var(--primary)" : "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {done ? <Check size={11} color="#fff" /> : <span style={{ fontSize: 10, color: active ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: 600 }}>{i + 1}</span>}
                  </div>
                  <span style={{ fontSize: 11, color: active ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: active ? 600 : 400 }}>{label}</span>
                </div>
                {i < 2 && <div style={{ flex: 1, height: 1.5, background: done ? "var(--primary)" : "var(--border)", borderRadius: 2 }} />}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Home ── */}
      {isProductsLoading && (
        <main style={{ padding: "48px 20px", textAlign: "center" }}>
          <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>Loading products...</p>
        </main>
      )}

      {!isProductsLoading && page === "home" && (
        <main>
          <div style={{ background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", padding: "28px 20px 22px", textAlign: "center" }}>
            <p style={{ color: "var(--muted-foreground)", margin: "0 0 5px", letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase" }}>Handmade Press-On Nails</p>
            <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 30, color: "var(--nail-the-look-color)", margin: "0 0 8px", lineHeight: 1.2 }}>Nail the Look ✨</h2>
            <p style={{ color: "var(--muted-foreground)", margin: "0 0 4px", fontSize: 13, lineHeight: 1.6 }}>Custom-fit gel press-ons <br /> We will confirm your sizing after checkout</p>
          </div>

          {productsLoadError && (
            <div style={{ margin: "12px 14px 0", background: "#fff1f2", border: "1px solid #f4c2cb", borderRadius: 14, padding: "14px 16px", color: "var(--destructive)", fontSize: 12 }}>
              {productsLoadError}
            </div>
          )}

          <button 
            onClick={() => navigate("/product/JUICEGELS-0286")}
            style={{ 
              display: "flex",
              width: "calc(100% - 28px)",
              margin: "12px 14px 4px", 
              background: "var(--secondary)", 
              border: "1px solid var(--border)",
              borderRadius: 14, 
              padding: "12px 14px", 
              alignItems: "center",
              gap: 14,
              textAlign: "left",
              cursor: "pointer"
            }}
          >
            <ImageWithFallback 
              src="images/JUICEGELS-0286.jpg" 
              alt="Nail Sizing Guide" 
              style={{ 
                width: 72, 
                height: 72, 
                objectFit: "cover", 
                borderRadius: 10, 
                flexShrink: 0,
                background: "var(--muted)" 
              }} 
            />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'Lobster', serif", color: "var(--foreground)", margin: "0 0 2px", fontSize: 16 }}>Need your nail sizes?</p>
              <p style={{ color: "var(--muted-foreground)", margin: 0, fontSize: 12, lineHeight: 1.4 }}>Click here and pick up the Nail Sizing Guide — £4 deducted from your first set <br /> Discount Applied at Checkout 🌸</p>
            </div>
          </button>

            <div style={{ padding: "16px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {uniqueProducts.map((p) => (
              <button key={p.id} onClick={() => openProduct(p)} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", textAlign: "left", cursor: "pointer", padding: 0, position: "relative", display: "block", width: "100%" }}>
                <button onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }} style={{ position: "absolute", top: 7, right: 7, background: "rgba(255,255,255,0.88)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 2 }} aria-label="Wishlist">
                  <Heart size={13} fill={wishlist.includes(p.id) ? "var(--primary)" : "none"} stroke={wishlist.includes(p.id) ? "var(--primary)" : "var(--muted-foreground)"} />
                </button>
                <ImageWithFallback src={p.image} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", display: "block", background: "var(--secondary)" }} />
                <div style={{ padding: "8px 10px 10px" }}>
                  <p style={{ margin: "0 0 5px", fontSize: 12, color: "var(--foreground)", lineHeight: 1.3 }}>{p.name}</p>
                  <span style={{ color: "var(--primary)", fontWeight: 600, fontSize: 14 }}>£{p.price.toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>

          <footer style={{ padding: "28px 16px 40px", textAlign: "center", borderTop: "1px solid var(--border)", marginTop: 28, background: "rgba(255, 255, 255, 0.2)" }}>
            <p style={{ fontFamily: "'Lobster', serif", fontSize: 20, color: "var(--foreground)", margin: "0 0 8px" }}>Juice Gels</p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", margin: "0 0 16px" }}>Handmade with love by Alyssa 🌸</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, fontSize: 13, alignItems: "center" }}>
              <button onClick={() => navigate("/about")} style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0 }}>
                Our Story
              </button>
              <span style={{ color: "var(--border)" }}>|</span>
              <button onClick={() => navigate("/videos")} style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0 }}>
                Videos
              </button>
              <span style={{ color: "var(--border)" }}>|</span>
              <a href="https://instagram.com/juicegels" target="_blank" rel="noopener noreferrer" style={{ color: "var(--foreground)", textDecoration: "underline", fontWeight: 500 }}>
                Instagram
              </a>
            </div>
            <p style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 24, opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Juice Gels. All rights reserved.
            </p>
          </footer>
        </main>
      )}

      {/* ── About ── */}
      {page === "about" && (
        <About />
      )}

      {/* ── Videos (persistently mounted for pre-caching/instant load) ── */}
      <div style={{ display: page === "videos" ? "block" : "none" }}>
        <Videos products={products} onShopProduct={handleShopProduct} />
      </div>

      {/* ── Search ── */}
      {page === "search" && (
        <Search products={products} onShopProduct={handleShopProduct} />
      )}

    {/* ── Product Detail ── */}
    {page === "product" && selected && (
      <main>
        <ImageWithFallback
          src={[selected.image, ...selected.extraImages][activeImg]}
          alt={selected.name}
          style={{ width: "100%", height: 320, objectFit: "contain", display: "block", background: "var(--secondary)" }}
        />

        {selected.extraImages.length > 0 && (
          <div style={{ display: "flex", gap: 8, padding: "10px 16px 0", overflowX: "auto" }}>
            {[selected.image, ...selected.extraImages].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flexShrink: 0,
                  border: `2px solid ${activeImg === i ? "var(--primary)" : "var(--border)"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  padding: 0,
                  cursor: "pointer",
                  background: "none"
                }}
              >
                <ImageWithFallback src={img} alt="" style={{ width: 52, height: 52, objectFit: "contain", display: "block", background: "var(--secondary)" }} />
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: "16px 20px 130px" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", margin: "0 0 4px", fontSize: 22, color: "var(--product-title)" }}>
            {selected.name}
          </h2>

          <p style={{ fontSize: 12, color: "var(--muted-foreground)", margin: "0 0 10px" }}>
            Handmade · In stock
          </p>

          <span style={{ fontSize: 24, fontWeight: 700, color: "var(--primary)" }}>
            £{selected.price.toFixed(2)}
          </span>

          <p style={{ color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.7, margin: "12px 0 18px" }}>
            {selected.description}
          </p>

          {!isVariationLocked(selected) ? (
            <>
              <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                Nail Shape
              </p>

              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
                {selected.shapes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      if (!selected) return;

                      const next = findVariant(selected.groupId, s, selectedLength);
                      if (next) {
                        setSelected(next);
                        setSelectedShape(s);
                        setSelectedLength(next.length);
                      }
                    }}
                    style={{
                      border: `1.5px solid ${selectedShape === s ? "var(--primary)" : "var(--border)"}`,
                      background: selectedShape === s ? "var(--primary)" : "var(--card)",
                      color: selectedShape === s ? "var(--variation-button-text-selected)" : "var(--variation-button-text-unselected)",
                      borderRadius: 8,
                      padding: "6px 14px",
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                Nail Length
              </p>

              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
                {(["Short", "Medium", "Long"] as NailLength[]).map((length) => (
                  <button
                    key={length}
                    onClick={() => {
                      if (!selected) return;

                      const next = findVariant(selected.groupId, selectedShape, length);
                      if (next) {
                        setSelected(next);
                        setSelectedLength(length);
                        setSelectedShape(next.shape);
                      }
                    }}
                    style={{
                      border: `1.5px solid ${selectedLength === length ? "var(--primary)" : "var(--border)"}`,
                      background: selectedLength === length ? "var(--primary)" : "var(--card)",
                      color: selectedLength === length ? "var(--variation-button-text-selected)" : "var(--variation-button-text-unselected)",
                      borderRadius: 8,
                      padding: "6px 14px",
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textTransform: "capitalize"
                    }}
                  >
                    {length}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {!isVariationLocked(selected) ? (
            <div
              style={{
                background: "var(--muted)",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                color: "var(--muted-foreground)",
                lineHeight: 1.5
              }}
            >
              You will be contacted via Instagram from <strong>@juicegels</strong> up to 24 hours after payment to confirm your nail sizes.
            </div>
          ) : null}
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            padding: "14px 18px",
            background: "var(--card)",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 10,
            boxSizing: "border-box"
          }}
        >
          <button
            onClick={() => toggleWishlist(selected.id)}
            style={{
              border: "1.5px solid var(--border)",
              background: "var(--card)",
              borderRadius: 12,
              width: 46,
              height: 46,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            }}
          >
            <Heart
              size={17}
              fill={wishlist.includes(selected.id) ? "var(--primary)" : "none"}
              stroke={wishlist.includes(selected.id) ? "var(--primary)" : "var(--muted-foreground)"}
            />
          </button>

          <button
            onClick={addToBasket}
            disabled={!selectedShape || !selectedLength}
            style={{
              flex: 1,
              background: selectedShape && selectedLength ? "var(--primary)" : "var(--muted)",
              color: selectedShape && selectedLength ? "#fff" : "var(--muted-foreground)",
              border: "none",
              borderRadius: 12,
              height: 46,
              fontWeight: 600,
              fontSize: 14,
              cursor: selectedShape && selectedLength ? "pointer" : "not-allowed",
              transition: "all 0.15s"
            }}
          >
            {selectedShape && selectedLength ? "Add to Basket" : "Select shape and length"}
          </button>
        </div>
      </main>
    )}

      {/* ── Basket ── */}
      {page === "basket" && (
        <main style={{ padding: "16px 16px 100px" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 20, color: "var(--basket-title-color)", margin: "0 0 14px" }}>Your Basket</h2>

          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px" }}>
              <ShoppingBag size={40} style={{ color: "var(--muted-foreground)", marginBottom: 12 }} />
              <p style={{ color: "var(--muted-foreground)", fontSize: 14 }}>Your basket is empty</p>
              <button onClick={() => navigate("/")} style={{ marginTop: 16, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Browse Sets</button>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.shape}`} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "12px", display: "flex", gap: 12, alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() => openBasketItemProduct(item)}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flexShrink: 0, background: "var(--secondary)" }} />
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.3 }}>{item.product.name}</p>
                        {!isNailSizeGuideItem(item) && (
                          <>
                            <p style={{ margin: "0 0 6px", fontSize: 11, color: "var(--muted-foreground)" }}>Shape: {item.shape}</p>
                            <p style={{ margin: 0, fontSize: 11, color: "var(--muted-foreground)" }}>Length: {item.length}</p>
                          </>
                        )}
                      </div>
                    </button>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                      <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: 14 }}>£{(item.product.price * item.quantity).toFixed(2)}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <button type="button" onClick={() => updateQty(idx, -1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid var(--border)", background: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                        <span style={{ minWidth: 28, textAlign: "center", fontSize: 13, fontWeight: 600 }}>{item.quantity}</span>
                        <button type="button" onClick={() => updateQty(idx, 1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid var(--border)", background: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
                      </div>
                      <button type="button" onClick={() => removeItem(idx)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}><Trash2 size={15} style={{ color: "var(--muted-foreground)" }} /></button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--secondary)", borderRadius: 14, padding: "14px 16px", marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 12 }}>
                  <div style={{ flex: 1 }}>
                    <Field label="Coupon code" error={couponError ?? undefined}>
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase());
                          if (couponError) setCouponError(null);
                        }}
                        style={mkInput(!!couponError)}
                      />
                    </Field>
                  </div>
                  <button
                    type="button"
                    onClick={applyCoupon}
                    disabled={isCouponLoading || !couponInput.trim()}
                    style={{
                      height: 42,
                      borderRadius: 10,
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      padding: "0 14px",
                      cursor: isCouponLoading || !couponInput.trim() ? "not-allowed" : "pointer",
                      color: "var(--foreground)",
                      fontWeight: 600,
                      opacity: isCouponLoading || !couponInput.trim() ? 0.6 : 1,
                    }}
                  >
                    {isCouponLoading ? "Checking..." : "Apply"}
                  </button>
                </div>

                {hasCouponFeedback && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 12,
                      background: couponError ? "#fff1f2" : couponSummary ? "#f3fbf6" : "var(--card)",
                      border: `1px solid ${couponError ? "#f4c2cb" : couponSummary ? "#b9e3c6" : "var(--border)"}`,
                      borderRadius: 10,
                      padding: "11px 12px",
                      marginBottom: 10,
                    }}
                  >
                    <div>
                      {isCouponLoading && (
                        <>
                          <strong style={{ display: "block", color: "var(--foreground)", marginBottom: 2 }}>Checking coupon...</strong>
                          <span style={{ color: "var(--muted-foreground)" }}>Validating your discount before checkout.</span>
                        </>
                      )}

                      {!isCouponLoading && couponError && (
                        <>
                          <strong style={{ display: "block", color: "var(--destructive)", marginBottom: 2 }}>Coupon not applied</strong>
                          <span style={{ color: "var(--destructive)" }}>{couponError}</span>
                        </>
                      )}

                      {!isCouponLoading && couponSummary && !couponError && (
                        <>
                          <strong style={{ display: "block", color: "#1f6f43", marginBottom: 2 }}>{couponSummary.code} applied</strong>
                          <span style={{ color: "#2f5d46" }}>
                            {couponSummary.description} saved you £{couponDiscount.toFixed(2)} on this order.
                          </span>
                        </>
                      )}
                    </div>

                    {couponSummary && !couponError && !isCouponLoading && (
                      <button type="button" onClick={removeCoupon} style={{ background: "none", border: "none", color: "var(--primary)", cursor: "pointer", fontWeight: 600, padding: 0, flexShrink: 0 }}>Remove</button>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                {couponSummary && couponDiscount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: "var(--muted-foreground)" }}>Discount ({couponSummary.code})</span>
                    <span style={{ color: "var(--primary)" }}>-£{couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                {isSizeGuideDiscountApplied && sizeGuideDiscountAmount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: "#1f6f43", fontWeight: 500 }}>First-time Size Guide Discount</span>
                    <span style={{ color: "#1f6f43", fontWeight: 700 }}>-£{sizeGuideDiscountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>Delivery</span>
                  <span style={{ color: "var(--muted-foreground)" }}>Choose on next step</span>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15 }}>
                  <span>Items total</span>
                  <span>£{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div style={{ background: "var(--muted)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5, marginBottom: 4 }}>
                You will be contacted via Instagram from <strong>@juicegels</strong> up to 24 hours after payment to confirm your nail sizes.
              </div>
            </>
          )}
        </main>
      )}

      {cart.length > 0 && page === "basket" && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, padding: "14px 18px", background: "var(--card)", borderTop: "1px solid var(--border)", display: "flex", gap: 10, boxSizing: "border-box" }}>
          <button onClick={() => navigate("/")} style={{ border: "1.5px solid var(--border)", background: "var(--card)", borderRadius: 12, height: 46, padding: "0 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", flexShrink: 0 }}>+ Add more</button>
          <button onClick={() => { setForm(initialForm); setErrors({}); setPage("preorder"); }} style={{ flex: 1, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 12, height: 46, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Pre-order · £{orderTotal.toFixed(2)}
          </button>
        </div>
      )}

      {/* ── Pre-order Form ── */}
      {page === "preorder" && (
        <main style={{ padding: "18px 18px 48px" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 20, color: "#000000", margin: "0 0 4px" }}>Your Details</h2>
          <p style={{ color: "#000000", fontSize: 12, margin: "0 0 18px" }}>{cartCount} item{cartCount !== 1 ? "s" : ""} · {formatMoney(checkoutTotal)} total including shipping</p>

          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Field label="First name" error={errors.firstName}>
                <input type="text" placeholder="Sophie" value={form.firstName} onChange={(e) => handleFormChange("firstName", e.target.value)} style={mkInput(!!errors.firstName)} />
              </Field>
              <Field label="Last name" error={errors.lastName}>
                <input type="text" placeholder="Wright" value={form.lastName} onChange={(e) => handleFormChange("lastName", e.target.value)} style={mkInput(!!errors.lastName)} />
              </Field>
            </div>

            <Field label="Email address" error={errors.email}>
              <input type="email" placeholder="sophie@example.com" value={form.email} onChange={(e) => handleFormChange("email", e.target.value)} style={mkInput(!!errors.email)} />
            </Field>

            <Field label="Phone number" error={errors.phone}>
              <input type="tel" placeholder="+44 7700 900000" value={form.phone} onChange={(e) => handleFormChange("phone", e.target.value)} style={mkInput(!!errors.phone)} />
            </Field>

            <Field label="Delivery address" error={errors.address}>
              <input type="text" placeholder="12 Petal Lane" value={form.address} onChange={(e) => handleFormChange("address", e.target.value)} style={mkInput(!!errors.address)} />
            </Field>

            <Field label="Instagram username" error={errors.instagram}>
              <input type="text" placeholder="@juicegels" value={form.instagram} onChange={(e) => handleFormChange("instagram", e.target.value)} style={mkInput(!!errors.instagram)} />
            </Field>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Field label="City" error={errors.city}>
                <input type="text" placeholder="London" value={form.city} onChange={(e) => handleFormChange("city", e.target.value)} style={mkInput(!!errors.city)} />
              </Field>
              <Field label="Postcode" error={errors.postcode}>
                <input type="text" placeholder="SW1A 1AA" value={form.postcode} onChange={(e) => handleFormChange("postcode", e.target.value)} style={mkInput(!!errors.postcode)} />
              </Field>
            </div>

            <Field label="Additional notes (optional)">
              <textarea placeholder="Any special requests, colour preferences, or custom details..." value={form.notes} onChange={(e) => handleFormChange("notes", e.target.value)} rows={3} style={{ ...mkInput(false), resize: "none" }} />
            </Field>

            <Field label="Shipping method">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {shippingOptions.map((option) => {
                  const isSelected = option.id === shippingOptionId;

                  return (
                    <label
                      key={option.id}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        padding: "12px 13px",
                        borderRadius: 12,
                        border: `1.5px solid ${isSelected ? "var(--primary)" : "var(--border)"}`,
                        background: isSelected ? "rgba(208, 111, 144, 0.08)" : "var(--card)",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        name="shipping-method"
                        value={option.id}
                        checked={isSelected}
                        onChange={() => setShippingOptionId(option.id)}
                        style={{ marginTop: 3 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
                          <strong style={{ color: "var(--foreground)", fontSize: 13 }}>{option.label}</strong>
                          <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: 13 }}>
                            {option.isFree ? "Free" : formatMoney(option.amount)}
                          </span>
                        </div>
                        <p style={{ margin: "0 0 3px", fontSize: 12, lineHeight: 1.5, color: "var(--muted-foreground)" }}>{option.description}</p>
                        <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5, color: "var(--muted-foreground)" }}>{option.estimate}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </Field>

            <div style={{ background: "var(--muted)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5 }}>
              You will be contacted via Instagram from <strong>@juicegels</strong> up to 24 hours after payment to confirm your nail sizes.
            </div>

            <div style={{ background: "var(--secondary)", borderRadius: 13, padding: "13px 15px", fontSize: 13, lineHeight: 1.7, color: "var(--foreground)" }}>
              <strong style={{ display: "block", marginBottom: 6 }}>Order Summary</strong>
              {cart.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)" }}>
                  <span>{getOrderSummaryLabel(item)}</span>
                  <span>£{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              {couponSummary && couponDiscount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)" }}>
                  <span>Discount ({couponSummary.code})</span>
                  <span>-{formatMoney(couponDiscount)}</span>
                </div>
              )}
              {isSizeGuideDiscountApplied && sizeGuideDiscountAmount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#1f6f43", fontWeight: 500 }}>
                  <span>First-time Size Guide Discount</span>
                  <span>-{formatMoney(sizeGuideDiscountAmount)}</span>
                </div>
              )}
              {selectedShippingOption && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)" }}>
                  <span>{selectedShippingOption.label}</span>
                  <span>{selectedShippingOption.isFree ? "Free" : formatMoney(selectedShippingOption.amount)}</span>
                </div>
              )}
              <div style={{ borderTop: "1px solid var(--border)", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Total</span><span>{formatMoney(checkoutTotal)}</span>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} style={{ background: isSubmitting ? "var(--border)" : "#c281a9", color: "#ffffff", border: "none", borderRadius: 12, height: 48, fontWeight: 600, fontSize: 14, cursor: isSubmitting ? "not-allowed" : "pointer", letterSpacing: "0.02em" }}>
              {isSubmitting ? "Redirecting to Stripe..." : "Confirm Pre-order 🌸"}
            </button>
            {checkoutError && <p style={{ color: "var(--destructive)", fontSize: 12, marginTop: 10 }}>{checkoutError}</p>}
          </form>
        </main>
      )}

      {/* ── Confirmation ── */}
      {page === "confirmation" && (
        <main style={{ padding: "44px 22px", textAlign: "center" }}>
          <div style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
            <Check size={30} style={{ color: "var(--primary)" }} />
          </div>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 24, color: "var(--foreground)", margin: "0 0 8px" }}>Order Placed!</h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>
            Thank you, <strong>{form.firstName}</strong>! Your pre-order of {confirmationCount} item{confirmationCount !== 1 ? "s" : ""} is confirmed.
          </p>
          <p style={{ color: "var(--muted-foreground)", fontSize: 12, margin: "0 0 24px", lineHeight: 1.5 }}>
            A confirmation will be sent to <strong>{form.email}</strong>.<br />
            <span style={{ color: "var(--primary)" }}>You will be contacted via Instagram from <strong>@juicegels</strong> within 24 hours to confirm your nail sizes.</span>
          </p>

          <div style={{ background: "var(--secondary)", borderRadius: 13, padding: "14px", textAlign: "left", marginBottom: 14 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 13 }}>Items ordered</p>
            {confirmationItems.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 40, height: 40, borderRadius: 7, objectFit: "cover", background: "var(--muted)" }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "var(--foreground)" }}>{item.product.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--muted-foreground)" }}>{getCartItemDetailText(item)}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 13, padding: "14px", textAlign: "left", marginBottom: 24 }}>
            <p style={{ margin: "0 0 5px", fontWeight: 600, fontSize: 13 }}>Delivering to</p>
            <p style={{ margin: 0, fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.6 }}>{form.firstName} {form.lastName}<br />{form.address}<br />{form.city}, {form.postcode}</p>
          </div>

          <button onClick={() => { navigate("/"); setCart([]); setForm(initialForm); }} style={{ background: "var(--primary)", color: "#fff", border: "none", borderRadius: 12, height: 46, width: "100%", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Continue Shopping
          </button>
        </main>
      )}
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: "var(--foreground)", letterSpacing: "0.03em", textTransform: "uppercase" }}>{label}</label>
      {children}
      {error && <span style={{ fontSize: 11, color: "var(--destructive)" }}>{error}</span>}
    </div>
  );
}

function mkInput(hasError: boolean): React.CSSProperties {
  return { background: "var(--input-background)", border: `1.5px solid ${hasError ? "var(--destructive)" : "var(--border)"}`, borderRadius: 9, padding: "10px 13px", fontSize: 14, color: "#000000", outline: "none", width: "100%", boxSizing: "border-box" };
}
