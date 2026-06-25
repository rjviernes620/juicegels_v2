import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Check, Trash2, Plus, Minus, Menu, X, Instagram } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { loadProducts, loadTrendingProductIds, type Product } from "./utils/parseProducts";
import { About, TiktokIcon } from "./components/About";
import { Videos } from "./components/Videos";
import { Search } from "./components/Search";
import { Contact } from "./components/Contact";
import { CustomOrders } from "./components/CustomOrders";
import { CookieNotice } from "./components/CookieNotice";
import { PortableText } from "./components/PortableText";
import { FAQ } from "./components/FAQ";
import { COUNTRIES } from "./utils/countries";
import { useSEO } from "./utils/useSEO";
import {
  type NailLength,
  type CartItem,
  type Page,
  type FormData,
  type ShippingOptionId,
  type CouponSummary,
  type ShippingOption,
  type CollectionDetails
} from "./types";
import {
  META_CART_ORIGIN,
  CHECKOUT_API_BASE,
  SHIPPING_FREE_THRESHOLD,
  SHIPPING_RATE_IDS,
  isVariationLocked,
  getProductRouteId,
  getProductShapes,
  getProductLengths,
  formatMoney,
  buildShippingOptions,
  isNailSizeGuideItem,
  getCartItemDetailText,
  getOrderSummaryLabel,
  normalizeGroupKey,
  getCollectionDetails,
  getCollectionStyle,
  buildBasketUrl,
  parseBasketItemsParam,
  parseMetaBasketProductsParam
} from "./utils/shopHelpers";
import {
  ShopPage,
  ProductDetailPage,
  BasketPage,
  PreorderPage,
  ConfirmationPage
} from "./components/Shop";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  instagram: "",
  city: "",
  postcode: "",
  notes: "",
  contactMethod: "instagram",
  country: "GB",
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function App() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

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
  const [homeSelectedCollection, setHomeSelectedCollection] = useState("All");
  const [homeSortBy, setHomeSortBy] = useState("featured");
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "declined" | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("juicegels_cookie_consent") as "accepted" | "declined" | null;
  });
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const consent = localStorage.getItem("juicegels_cookie_consent");
      if (consent === "declined") return [];
      return JSON.parse(localStorage.getItem("juicegels_cart") ?? "[]") as CartItem[];
    } catch {
      return [];
    }
  });
  const [form, setForm] = useState<FormData>(() => {
    if (typeof window === "undefined") return initialForm;
    try {
      const consent = localStorage.getItem("juicegels_cookie_consent");
      if (consent === "declined") return initialForm;
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
  const [trendingProductIds, setTrendingProductIds] = useState<number[]>([]);


  const uniqueProducts = useMemo(
    () =>
      products
        .filter((product, index, self) => index === self.findIndex((p) => normalizeGroupKey(p.groupId) === normalizeGroupKey(product.groupId)))
        .sort((a, b) => {
          if (a.orderRank && b.orderRank) {
            return b.orderRank.localeCompare(a.orderRank);
          }
          if (a.orderRank) return -1;
          if (b.orderRank) return 1;
          return b.id.localeCompare(a.id);
        }),
    [products]
  );

  const uniqueCollections = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.collection) {
        set.add(p.collection);
      }
    });
    return Array.from(set);
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...uniqueProducts];

    if (homeSelectedCollection !== "All") {
      list = list.filter((p) => p.collection === homeSelectedCollection);
    }

    if (homeSortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (homeSortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (homeSortBy === "alpha-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (homeSortBy === "alpha-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [uniqueProducts, homeSelectedCollection, homeSortBy]);

  const trendingProducts = useMemo(() => {
    const eligible = uniqueProducts.filter((p) => p.id !== "JUICEGELS-0286");
    if (trendingProductIds.length === 0) {
      return eligible.slice(0, 5);
    }
    return trendingProductIds
      .map((pid) => eligible.find((p) => {
        const idNum = parseInt(p.id.replace("JUICEGELS-", ""), 10);
        return idNum === pid;
      }))
      .filter((p): p is Product => p != null);
  }, [uniqueProducts, trendingProductIds]);

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
        const [loadedProducts, loadedTrendingIds] = await Promise.all([
          loadProducts(),
          loadTrendingProductIds()
        ]);
        if (!isCancelled) {
          setProducts(loadedProducts);
          setTrendingProductIds(loadedTrendingIds);
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

      const sessionId = searchParams.get("session_id");
      if (sessionId) {
        fetch(`${CHECKOUT_API_BASE}/api/checkout-session/${sessionId}`)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch session details");
            return res.json();
          })
          .then((data) => {
            setForm((prev) => ({
              ...prev,
              firstName: data.firstName || prev.firstName,
              lastName: data.lastName || prev.lastName,
              email: data.email || prev.email,
              phone: data.phone || prev.phone,
              address: data.address || prev.address,
              instagram: data.instagram || prev.instagram,
              city: data.city || prev.city,
              postcode: data.postcode || prev.postcode,
              notes: data.notes || prev.notes,
              contactMethod: data.contactMethod || prev.contactMethod,
              country: data.country || prev.country,
            }));
          })
          .catch((err) => {
            console.error("Error fetching checkout session:", err);
          });
      }

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

    if (effectivePath === "/contact") {
      setPage("contact");
      return;
    }

    if (effectivePath === "/custom-orders") {
      setPage("custom-orders");
      return;
    }

    if (effectivePath === "/faq") {
      setPage("faq");
      return;
    }

    if (effectivePath === "/shop") {
      setPage("shop");
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
        products.find((p) => normalizeGroupKey(p.groupId) === normalizedRouteProductId) ??
        products.find((p) => {
          if (!/^\d+$/.test(normalizedRouteProductId)) return false;
          const paddedId = `juicegels-${normalizedRouteProductId.padStart(4, '0')}`;
          return normalizeGroupKey(p.id) === paddedId;
        });

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
        const nextShape = shapes.includes(requestedShape) ? requestedShape : product.shape;
        const nextLength = lengths.includes(requestedLength) ? requestedLength : product.length;
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


  // Dynamic SEO: update title, meta tags, OG, canonical, and structured data per page
  useSEO({
    page,
    productName: page === "product" && selected ? selected.name : undefined,
    productDescription:
      page === "product" && selected
        ? `Shop ${selected.name} handmade press-on gel nails from JuiceGels. Available in ${selected.shape} shape, ${selected.length} length.`
        : undefined,
    productImage:
      page === "product" && selected ? selected.image : undefined,
    productPrice:
      page === "product" && selected ? selected.price : undefined,
    productPath:
      page === "product" && selected
        ? `/product/${getProductRouteId(selected)}`
        : undefined,
  });


  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const confirmationCount = confirmationItems.reduce((s, i) => s + i.quantity, 0);

  const hasSizeGuide = cart.some(item => item.product.id === "JUICEGELS-0286");
  const hasNailSet = cart.some(item => item.product.id !== "JUICEGELS-0286");
  const sizeGuideItem = cart.find(item => item.product.id === "JUICEGELS-0286");

  const isJuly2026SaleActive = () => {
    const now = new Date();
    const saleEnd = new Date("2026-08-01T00:00:00");
    return now < saleEnd;
  };
  const isNailSetSaleApplied = !hasSizeGuide && hasNailSet && isJuly2026SaleActive();
  const nailSetSaleDiscountAmount = isNailSetSaleApplied ? cartTotal * 0.20 : 0;

  const couponDiscount = couponSummary?.discountAmount ?? 0;
  const discountTotal = couponDiscount + nailSetSaleDiscountAmount;
  const orderTotal = Math.max(0, cartTotal - discountTotal);
  const hasCouponFeedback = isCouponLoading || !!couponError || !!couponSummary;
  const shippingOptions = useMemo(() => buildShippingOptions(orderTotal, form.country), [orderTotal, form.country]);

  useEffect(() => {
    if (shippingOptions.length > 0 && !shippingOptions.some((o) => o.id === shippingOptionId)) {
      setShippingOptionId(shippingOptions[0].id);
    }
  }, [shippingOptions, shippingOptionId]);

  const selectedShippingOption = shippingOptions.find((option) => option.id === shippingOptionId) ?? shippingOptions[0];
  const shippingTotal = selectedShippingOption?.amount ?? 0;
  const checkoutTotal = orderTotal + shippingTotal;



  const handleConsentChange = (choice: "accepted" | "declined") => {
    localStorage.setItem("juicegels_cookie_consent", choice);
    setCookieConsent(choice);
    if (choice === "declined") {
      localStorage.removeItem("juicegels_cart");
      localStorage.removeItem("juicegels_form");
    } else {
      localStorage.setItem("juicegels_cart", JSON.stringify(cart));
      localStorage.setItem("juicegels_form", JSON.stringify(form));
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (cookieConsent === "declined") {
      localStorage.removeItem("juicegels_cart");
      return;
    }
    localStorage.setItem("juicegels_cart", JSON.stringify(cart));
  }, [cart, cookieConsent]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (cookieConsent === "declined") {
      localStorage.removeItem("juicegels_form");
      return;
    }
    localStorage.setItem("juicegels_form", JSON.stringify(form));
  }, [form, cookieConsent]);

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
    if (form.contactMethod === "instagram" && !form.instagram.trim()) e.instagram = "Required";
    if (!form.postcode.trim()) e.postcode = "Required";
    if (!form.country.trim()) e.country = "Required";
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

  const collectionDetails = useMemo(() => {
    if (!selected) return null;
    return getCollectionDetails(selected, products);
  }, [selected, products]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: isMobile ? 430 : "100%", margin: "0 auto", minHeight: "100vh", background: "#ffd2e6", display: "flex", flexDirection: "column" }}>
      <CookieNotice
        consent={cookieConsent}
        onAccept={() => handleConsentChange("accepted")}
        onDecline={() => handleConsentChange("declined")}
      />
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
              background: "#fc6587",
              borderRadius: 18,
              padding: "22px 20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
              border: "1px solid rgba(212, 84, 122, 0.18)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "3px solid rgba(212, 84, 122, 0.18)",
                borderTopColor: "#ffd6e9",
                margin: "0 auto 14px",
                animation: "juicegels-spin 1s linear infinite",
              }}
            />
            <h3 style={{ margin: "0 0 8px", fontFamily: "'Lobster', serif", fontSize: 22, color: "#fff9fb" }}>
              Redirecting to Stripe
            </h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "#4f444a" }}>
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
          background: "#ffd2e6",
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
              color: "#fc6587"
            }}
          >
            Juice Gels
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", color: "#4f444a", cursor: "pointer", padding: 4 }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Home", icon: "🌸", onClick: () => { navigate("/"); setMenuOpen(false); } },
            { label: "Shop Sets", icon: "✨", onClick: () => { navigate("/shop"); setMenuOpen(false); } },
            { label: "Search Sets", icon: "🔍", onClick: () => { navigate("/search"); setMenuOpen(false); } },
            { label: "Custom Orders", icon: "💅", onClick: () => { navigate("/custom-orders"); setMenuOpen(false); } },
            { label: "Nail Videos", icon: "🎬", onClick: () => { navigate("/videos"); setMenuOpen(false); } },
            { label: "About JuiceGels", icon: "📖", onClick: () => { navigate("/about"); setMenuOpen(false); } },
            { label: "FAQ", icon: "❓", onClick: () => { navigate("/faq"); setMenuOpen(false); } },
            { label: "Contact Us", icon: "✉️", onClick: () => { navigate("/contact"); setMenuOpen(false); } },
            { label: "Nail Sizing Guide", icon: "📏", onClick: () => { navigate("/product/JUICEGELS-0286"); setMenuOpen(false); } },
            { label: "Shopping Basket", icon: "🛒", onClick: () => { if (page === "preorder") { setPage("basket"); } else { navigate(currentBasketUrl(cart)); } setMenuOpen(false); } },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#e0a2b4",
                border: "1px solid rgba(212, 84, 122, 0.18)",
                borderRadius: 12,
                padding: "12px 14px",
                textAlign: "left",
                color: "#fff9fb",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.2s ease",
                overflow: "hidden",
                width: "100%",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#ffd6e9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#e0a2b4"; }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div style={{ marginTop: "auto", textAlign: "center", paddingTop: 20, borderTop: "1px solid rgba(212, 84, 122, 0.18)" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <a
              href="https://instagram.com/juicegels"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#f24e77",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <Instagram size={16} />
              Follow @juicegels
            </a>
            <a
              href="https://tiktok.com/@juice.gels"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#f24e77",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <TiktokIcon size={16} />
              Follow @juice.gels
            </a>
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header style={{ background: "#fc6587", borderBottom: "1px solid rgba(212, 84, 122, 0.18)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", maxWidth: 1200, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          {isMobile ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button onClick={() => setMenuOpen(true)} style={{ color: "#ffd6e9", background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Menu">
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

              <button
                onClick={() => {
                  if (page === "preorder") {
                    setPage("basket");
                  } else {
                    navigate(currentBasketUrl(cart));
                  }
                }}
                style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 4 }}
                aria-label="Basket"
              >
                <ShoppingBag size={22} style={{ color: "#ffd6e9" }} />
                {cartCount > 0 && (
                  <span style={{ position: "absolute", top: -4, right: -4, background: "#ffd6e9", color: "#fff", borderRadius: "50%", width: 17, height: 17, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </>
          ) : (
            <>
              {/* Left: Logo */}
              <div style={{ flex: "1 1 0%", display: "flex", justifyContent: "flex-start" }}>
                <h1
                  onClick={() => navigate("/")}
                  style={{
                    fontFamily: "'Lobster', serif",
                    color: "#ffffff",
                    margin: 0,
                    letterSpacing: "0.04em",
                    fontSize: 26,
                    marginLeft: 24,
                    cursor: "pointer"
                  }}
                >
                  Juice Gels
                </h1>
              </div>

              {/* Center: Navigation Menu */}
              <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
                <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
                  {[
                    { label: "Home", pageKey: "home", onClick: () => navigate("/") },
                    { label: "Shop", pageKey: "shop", onClick: () => navigate("/shop") },
                    { label: "Search Sets", pageKey: "search", onClick: () => navigate("/search") },
                    { label: "Custom Orders", pageKey: "custom-orders", onClick: () => navigate("/custom-orders") },
                    { label: "Nail Videos", pageKey: "videos", onClick: () => navigate("/videos") },
                    { label: "About", pageKey: "about", onClick: () => navigate("/about") },
                    { label: "FAQ", pageKey: "faq", onClick: () => navigate("/faq") },
                    { label: "Contact", pageKey: "contact", onClick: () => navigate("/contact") },
                  ].map((link) => {
                    const isActive = page === link.pageKey || (link.pageKey === "shop" && page === "product");
                    return (
                      <button
                        key={link.label}
                        onClick={link.onClick}
                        style={{
                          background: "none",
                          border: "none",
                          color: isActive ? "#ffffff" : "#ffd6e9",
                          fontWeight: 600,
                          fontSize: 13,
                          cursor: "pointer",
                          padding: "4px 6px",
                          transition: "all 0.2s ease",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#ffd6e9"; }}
                      >
                        {link.label}
                        {isActive && (
                          <span style={{
                            position: "absolute",
                            bottom: -4,
                            left: 6,
                            right: 6,
                            height: 2,
                            background: "#ffffff",
                            borderRadius: 1
                          }} />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Right: Cart Icon */}
              <div style={{ flex: "1 1 0%", display: "flex", justifyContent: "flex-end", paddingRight: isTablet ? 16 : 0 }}>
                <button
                  onClick={() => {
                    if (page === "preorder") {
                      setPage("basket");
                    } else {
                      navigate(currentBasketUrl(cart));
                    }
                  }}
                  style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 4 }}
                  aria-label="Basket"
                >
                  <ShoppingBag size={22} style={{ color: "#ffd6e9" }} />
                  {cartCount > 0 && (
                    <span style={{ position: "absolute", top: -4, right: -4, background: "#ffd6e9", color: "#fff", borderRadius: "50%", width: 17, height: 17, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* ── Progress bar (basket / preorder / confirmation) ── */}
      {(page === "basket" || page === "preorder" || page === "confirmation") && (
        <div style={{ display: "flex", padding: "10px 20px", gap: 6, alignItems: "center", background: "#fc6587", borderBottom: "1px solid rgba(212, 84, 122, 0.18)" }}>
          {(["Basket", "Details", "Done"] as const).map((label, i) => {
            const active = (page === "basket" && i === 0) || (page === "preorder" && i === 1) || (page === "confirmation" && i === 2);
            const done = (page === "preorder" && i === 0) || (page === "confirmation" && i <= 1);
            const isClickable = page === "preorder" && i === 0;
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, flex: i < 2 ? 1 : undefined }}>
                <div
                  onClick={() => {
                    if (isClickable) {
                      setPage("basket");
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    cursor: isClickable ? "pointer" : "default"
                  }}
                  title={isClickable ? "Go back to Basket" : undefined}
                >
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: done ? "#ffd6e9" : active ? "#f7b8ca" : "#fce4ea", border: `2px solid ${active || done ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {done ? <Check size={11} color="#fff" /> : <span style={{ fontSize: 10, color: active ? "#fff9fb" : "#4f444a", fontWeight: 600 }}>{i + 1}</span>}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: active ? "#fff9fb" : "#4f444a",
                      fontWeight: active ? 600 : 400,
                      textDecoration: isClickable ? "underline" : "none"
                    }}
                  >
                    {label}
                  </span>
                </div>
                {i < 2 && <div style={{ flex: 1, height: 1.5, background: done ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)", borderRadius: 2 }} />}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Home ── */}
      {isProductsLoading && (
        <main style={{ padding: "48px 20px", textAlign: "center" }}>
          <p style={{ color: "#4f444a", fontSize: 14 }}>Loading products...</p>
        </main>
      )}

      {!isProductsLoading && page === "home" && (
        <main>
          {/* Hero Section */}
          <div style={{
            background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 50%, #fdf2f4 100%)",
            padding: isMobile ? "40px 10px 48px" : "60px 20px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* ShaderGradient Background */}
            <ShaderGradientCanvas
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none"
              }}
              pixelDensity={0.5}
              fov={45}
            >
              <ShaderGradient
                animate="on"
                axesHelper="off"
                brightness={1}
                cAzimuthAngle={180}
                cDistance={2.9}
                cPolarAngle={120}
                cameraZoom={1}
                color1="#ff8fc7"
                color2="#ffd1e8"
                color3="#c9b0ff"
                destination="onCanvas"
                embedMode="off"
                envPreset="city"
                format="gif"
                fov={45}
                frameRate={10}
                gizmoHelper="hide"
                grain="off"
                lightType="3d"
                pixelDensity={0.5}
                positionX={0}
                positionY={1.8}
                positionZ={0}
                range="disabled"
                rangeEnd={40}
                rangeStart={0}
                reflection={0.1}
                rotationX={0}
                rotationY={0}
                rotationZ={-90}
                shader="defaults"
                type="plane"
                uAmplitude={0}
                uDensity={0.7}
                uFrequency={5.5}
                uSpeed={0.3}
                uStrength={4.2}
                uTime={0.2}
                wireframe={false}
              />
            </ShaderGradientCanvas>

            {/* Hero Content Wrapper */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Subtle background bubble accents */}
              <div style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(252,101,135,0.06) 0%, rgba(252,101,135,0) 70%)",
                top: "-50px",
                right: "-100px",
                pointerEvents: "none"
              }} />
              <div style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,84,122,0.05) 0%, rgba(212,84,122,0) 70%)",
                bottom: "-150px",
                left: "-150px",
                pointerEvents: "none"
              }} />

              {/* Logo Area */}
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                height: isMobile ? "240px" : "320px",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* Logo - Full size in the center */}
                <motion.div
                  initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 1.4, type: "spring", stiffness: 55, damping: 12 }}
                  whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.3 } }}
                  onClick={() => navigate("/shop")}
                  style={{
                    width: isMobile ? 220 : 300,
                    height: isMobile ? 220 : 300,
                    zIndex: 10,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src="images/jg circle 2.png"
                    alt="Juice Gels Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      filter: "drop-shadow(0 15px 35px rgba(252, 101, 135, 0.3))"
                    }}
                  />
                </motion.div>
              </div>

              {/* Brand Introduction Text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p style={{ color: "#fc6587", margin: "0 0 8px", letterSpacing: "0.15em", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>🌟 Handcrafted Press-on Nail Studio 🌟</p>
                <h2 style={{ fontFamily: "'Lobster', serif", fontSize: isMobile ? 40 : 56, color: "#fc6587", margin: "0 0 16px", lineHeight: 1.15 }}>Juice Gels</h2>
                <p style={{
                  maxWidth: "600px",
                  margin: "0 auto 24px",
                  fontSize: isMobile ? 15 : 18,
                  color: "#4f444a",
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  Salon-quality, reusable manicures in minutes. 
                  Every set is lovingly handcrafted with professional-grade gel polish, 
                  specifically designed to fit your unique style.
                </p>

                {/* Call to Actions */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 28 }}>
                  <button
                    onClick={() => navigate("/shop")}
                    style={{
                      background: "linear-gradient(135deg, #fc6587 0%, #db2777 100%)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "30px",
                      padding: "14px 32px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      boxShadow: "0 6px 20px rgba(219, 39, 119, 0.3)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 8
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(219, 39, 119, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(219, 39, 119, 0.3)";
                    }}
                  >
                    Shop Nail Sets 💅
                  </button>
                  <button
                    onClick={() => navigate("/custom-orders")}
                    style={{
                      background: "#fff9fb",
                      color: "#fc6587",
                      border: "2px solid #fc6587",
                      borderRadius: "30px",
                      padding: "12px 30px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fff0f4";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff9fb";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Custom Request ✨
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Promotional Split Banner ── */}
          <div style={{
            background: "#fff0f4",
            padding: isMobile ? "28px 16px 20px" : "36px 28px 24px",
            borderTop: "1px solid rgba(212,84,122,0.08)",
            borderBottom: "1px solid rgba(212,84,122,0.08)",
          }}>
            <div style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 14 : 18,
            }}>
              {/* Juicy July Sale Card */}
              <button
                type="button"
                onClick={() => navigate("/shop")}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
                  border: "none",
                  borderRadius: 16,
                  padding: isMobile ? "22px 20px" : "28px 26px",
                  cursor: "pointer",
                  color: "#1e1b4b",
                  fontFamily: "inherit",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(167, 139, 250, 0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  minHeight: isMobile ? 130 : 150,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(167, 139, 250, 0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(167, 139, 250, 0.18)";
                }}
              >
                {/* Decorative circle */}
                <div style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: -20,
                  left: -20,
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.10)",
                  pointerEvents: "none",
                }} />
                <p style={{
                  fontFamily: "'Lobster', serif",
                  fontSize: isMobile ? 28 : 33,
                  color: "#fff9bd",
                  margin: "0 0 6px",
                  lineHeight: 1.15,
                  textShadow: "0 1px 6px rgba(0,0,0,0.08)",
                  position: "relative",
                  zIndex: 1,
                }}>Its Juicy July! ☀️</p>
                <p style={{
                  color: "#312e81",
                  margin: "0 0 10px",
                  fontSize: isMobile ? 12 : 13,
                  lineHeight: 1.5,
                  position: "relative",
                  zIndex: 1,
                }}>
                  Get <strong>20% off</strong> your basket when you buy ONLY nail sets! Ends July 31.
                </p>
                <span style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 20,
                  padding: "5px 14px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#4338ca",
                  position: "relative",
                  zIndex: 1,
                }}>
                  Discount Applied Automatically 🌸
                </span>
              </button>

              {/* Size Guide Discount Card */}
              <button
                type="button"
                onClick={() => navigate("/product/JUICEGELS-0286")}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "#ff8fc7",
                  border: "none",
                  borderRadius: 16,
                  padding: isMobile ? "22px 20px" : "28px 26px",
                  cursor: "pointer",
                  color: "inherit",
                  fontFamily: "inherit",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(252, 101, 135, 0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  minHeight: isMobile ? 130 : 150,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(252, 101, 135, 0.28)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(252, 101, 135, 0.18)";
                }}
              >
                {/* Decorative circle */}
                <div style={{
                  position: "absolute",
                  top: -25,
                  right: -25,
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: -15,
                  left: -15,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  pointerEvents: "none",
                }} />
                <p style={{
                  fontFamily: "'Lobster', serif",
                  fontSize: isMobile ? 26 : 30,
                  color: "#fddaf6",
                  margin: "0 0 6px",
                  lineHeight: 1.15,
                  textShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  position: "relative",
                  zIndex: 1,
                }}>Need your nail sizes? 📏</p>
                <p style={{
                  color: "rgb(181, 88, 140)",
                  margin: "0 0 10px",
                  fontSize: isMobile ? 12 : 13,
                  lineHeight: 1.5,
                  position: "relative",
                  zIndex: 1,
                }}>
                  Get our Nail Sizing Guide — <strong>£4.00 off</strong> when ordered with any nail set!
                </p>
                <span style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.30)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 20,
                  padding: "5px 14px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#c4597d",
                  position: "relative",
                  zIndex: 1,
                }}>
                  Applied at Checkout 🌸
                </span>
              </button>
            </div>

            {/* Disclaimer: Only one discount can be applied */}
            <div style={{
              maxWidth: 900,
              margin: "14px auto 0",
              background: "linear-gradient(135deg, rgba(252,101,135,0.08) 0%, rgba(167,139,250,0.08) 100%)",
              border: "1px solid rgba(212,84,122,0.12)",
              borderRadius: 10,
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <span style={{ fontSize: 16 }}>⚠️</span>
              <p style={{
                margin: 0,
                fontSize: 11,
                fontWeight: 600,
                color: "#ae3c6f",
                textAlign: "center",
                lineHeight: 1.45,
              }}>
                Please note: Only one discount can be applied per order.
              </p>
            </div>
          </div>

          {/* How It Works Guide Section */}
          <div style={{ background: "#fff0f4", padding: "54px 20px 48px", borderTop: "1px solid rgba(212,84,122,0.08)", borderBottom: "1px solid rgba(212,84,122,0.08)" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#fc6587", marginBottom: 28 }}>How It Works</h3>
              
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 28,
                justifyContent: "space-between"
              }}>
                {[
                  {
                    step: "1",
                    title: "Choose your Gels",
                    desc: "Select from our wide variety of nail designs. Choose your Shape and length and place your order."
                  },
                  {
                    step: "2",
                    title: "Size your Gels",
                    desc: "We will reach out to you via your chosen contact method to clarify your nail sizes before your nails get produced."
                  },
                  {
                    step: "3",
                    title: "Wear your Gels",
                    desc: "Once your nails are made and you're happy with them. We ship out your nails via Royal Mail so you can wear your gels in no time!"
                  }
                ].map((item, i) => (
                  <div key={i} style={{ flex: 1, position: "relative" }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #fc6587 0%, #db2777 100%)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 700,
                      margin: "0 auto 14px",
                      boxShadow: "0 4px 10px rgba(252, 101, 135, 0.25)"
                    }}>
                      {item.step}
                    </div>
                    <h4 style={{ color: "#ae3c6f", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{item.title}</h4>
                    <p style={{ color: "#4f444a", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Value Propositions / Why Juice Gels */}
          <div style={{ background: "#fff5f8", padding: "54px 20px 48px", borderBottom: "1px solid rgba(212,84,122,0.08)" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#fc6587", marginBottom: 12 }}>Why Press-Ons?</h3>
              <p style={{ color: "#4f444a", fontSize: 13, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.5 }}>
                The luxury of salon manicures without the time, expense, or damage.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 1fr",
                gap: 20
              }}>
                {[
                  {
                    title: "Reusable",
                    desc: "Handcrafted using strong builder gel. Apply with nail tabs or glue to wear them again and again.",
                    icon: "♻️"
                  },
                  {
                    title: "Perfect Fit",
                    desc: "Available in standard sizes or custom measurements. Check our sizing guide to find your perfect fit.",
                    icon: "📏"
                  },
                  {
                    title: "Salon Grade",
                    desc: "We use only premium, professional gel polish products. No cheap plastic or machine printing.",
                    icon: "💅"
                  },
                  {
                    title: "Damage Free",
                    desc: "Quick and easy application and removal processes that keep your natural nails healthy.",
                    icon: "⏱️"
                  }
                ].map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      borderRadius: 16,
                      padding: 24,
                      border: "1px solid rgba(212, 84, 122, 0.1)",
                      boxShadow: "0 4px 12px rgba(212, 16, 71, 0.02)",
                      transition: "transform 0.3s ease",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{feat.icon}</div>
                    <h4 style={{ color: "#ae3c6f", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{feat.title}</h4>
                    <p style={{ color: "#4f444a", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curated Products Showcase Section */}
          <div style={{ padding: "54px 20px 48px", background: "#fff9fb", borderTop: "1px solid rgba(212,84,122,0.08)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 30, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 30, color: "#fc6587", margin: 0 }}>Trending Designs</h3>
                  <p style={{ color: "#4f444a", fontSize: 13, margin: "4px 0 0" }}>Check out some of our most popular handmade sets.</p>
                </div>
                <button
                  onClick={() => navigate("/shop")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fc6587",
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 8px",
                    borderRadius: 8,
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#fff0f4"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "none"}
                >
                  View All Sets 💅
                </button>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : `repeat(${Math.min(trendingProducts.length || 1, 5)}, 1fr)`,
                gap: isMobile ? 12 : 16
              }}>
                {trendingProducts.map((p) => {
                    const style = p.collection ? getCollectionStyle(p.collection) : null;
                    return (
                      <button
                        key={p.id}
                        onClick={() => openProduct(p)}
                        style={{
                          background: style ? style.cardGradient : "#fc6587",
                          border: "1px solid rgba(212, 84, 122, 0.18)",
                          borderRadius: 14,
                          overflow: "hidden",
                          textAlign: "left",
                          cursor: "pointer",
                          padding: 0,
                          position: "relative",
                          display: "block",
                          width: "100%",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 8px 20px rgba(252, 101, 135, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <ImageWithFallback
                          src={p.image}
                          alt={p.name}
                          style={{ width: "100%", height: 180, objectFit: "cover", display: "block", background: "#b8395d" }}
                        />
                        <div style={{
                          padding: "8px 10px 10px",
                          background: style ? style.cardGradient : "linear-gradient(to bottom, rgba(252, 101, 135, 0.95), rgba(219, 39, 119, 1))"
                        }}>
                          {p.collection && style && (
                            <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 4 }}>
                              <span style={{
                                fontSize: 9,
                                background: style.badgeBg,
                                color: "#ffffff",
                                padding: "1.5px 5px",
                                borderRadius: 4,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.03em"
                              }}>
                                {style.emoji} {p.collection.replace(" Collection", "")}
                              </span>
                            </div>
                          )}
                          <p style={{ margin: "0 0 4px", fontSize: 13, color: "#fff9fb", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</p>
                          <span style={{ color: p.collection ? "#ffffff" : "#ffd6e9", fontWeight: 700, fontSize: 14 }}>£{p.price.toFixed(2)}</span>
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Custom Orders Banner */}
          <div style={{
            background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
            padding: "48px 20px",
            textAlign: "center",
            color: "#1e1b4b"
          }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 32, color: "#ffffff", margin: "0 0 10px", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>Dreaming of a Unique Design? 💭</h3>
              <p style={{ color: "#312e81", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
                Let's bring your nail art dreams to life! Request a completely custom set. Send us your inspo pics and details, and we'll quote and craft it for you.
              </p>
              <button
                onClick={() => navigate("/custom-orders")}
                style={{
                  background: "#ffffff",
                  color: "#4338ca",
                  border: "none",
                  borderRadius: "30px",
                  padding: "12px 28px",
                  fontSize: "13px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                Start Custom Order 💅
              </button>
            </div>
          </div>
        </main>
      )}


      {!isProductsLoading && page === "shop" && (
        <ShopPage
          products={products}
          filteredAndSortedProducts={filteredAndSortedProducts}
          uniqueCollections={uniqueCollections}
          homeSelectedCollection={homeSelectedCollection}
          setHomeSelectedCollection={setHomeSelectedCollection}
          homeSortBy={homeSortBy}
          setHomeSortBy={setHomeSortBy}
          openProduct={openProduct}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          productsLoadError={productsLoadError}
          navigate={navigate}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}

      {/* ── About ── */}
      {page === "about" && (
        <About isMobile={isMobile} isTablet={isTablet} />
      )}

      {/* ── Videos (persistently mounted for pre-caching/instant load) ── */}
      <div style={{ display: page === "videos" ? "block" : "none" }}>
        <Videos
          products={products}
          onShopProduct={handleShopProduct}
          isMobile={isMobile}
          isTablet={isTablet}
          isPageActive={page === "videos"}
        />
      </div>

      {/* ── Search ── */}
      {page === "search" && (
        <Search products={products} onShopProduct={handleShopProduct} isMobile={isMobile} isTablet={isTablet} />
      )}

      {/* ── Contact ── */}
      {page === "contact" && (
        <Contact isMobile={isMobile} isTablet={isTablet} />
      )}

      {/* ── Custom Orders ── */}
      {page === "custom-orders" && (
        <CustomOrders isMobile={isMobile} isTablet={isTablet} />
      )}

      {/* ── FAQ ── */}
      {page === "faq" && (
        <FAQ isMobile={isMobile} isTablet={isTablet} />
      )}

      {/* ── Product Detail ── */}
      {page === "product" && selected && (
        <ProductDetailPage
          selected={selected}
          setSelected={setSelected}
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          selectedLength={selectedLength}
          setSelectedLength={setSelectedLength}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          collectionDetails={collectionDetails}
          openProduct={openProduct}
          findVariant={findVariant}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          addToBasket={addToBasket}
          isMobile={isMobile}
        />
      )}

      {/* ── Basket ── */}
      {page === "basket" && (
        <BasketPage
          cart={cart}
          cartCount={cartCount}
          cartTotal={cartTotal}
          orderTotal={orderTotal}
          hasSizeGuide={hasSizeGuide}
          hasNailSet={hasNailSet}
          isNailSetSaleApplied={isNailSetSaleApplied}
          nailSetSaleDiscountAmount={nailSetSaleDiscountAmount}
          couponInput={couponInput}
          setCouponInput={setCouponInput}
          couponError={couponError}
          setCouponError={setCouponError}
          applyCoupon={applyCoupon}
          removeCoupon={removeCoupon}
          isCouponLoading={isCouponLoading}
          hasCouponFeedback={hasCouponFeedback}
          couponSummary={couponSummary}
          couponDiscount={couponDiscount}
          openBasketItemProduct={openBasketItemProduct}
          updateQty={updateQty}
          removeItem={removeItem}
          navigate={navigate}
          setPage={setPage}
          isMobile={isMobile}
          setForm={setForm}
          setErrors={setErrors}
          initialForm={initialForm}
        />
      )}

      {/* ── Pre-order Form ── */}
      {page === "preorder" && (
        <PreorderPage
          cartCount={cartCount}
          checkoutTotal={checkoutTotal}
          handleSubmit={handleSubmit}
          form={form}
          handleFormChange={handleFormChange}
          errors={errors}
          shippingOptions={shippingOptions}
          shippingOptionId={shippingOptionId}
          setShippingOptionId={setShippingOptionId}
          selectedShippingOption={selectedShippingOption}
          cart={cart}
          couponSummary={couponSummary}
          couponDiscount={couponDiscount}
          isNailSetSaleApplied={isNailSetSaleApplied}
          nailSetSaleDiscountAmount={nailSetSaleDiscountAmount}
          hasSizeGuide={hasSizeGuide}
          hasNailSet={hasNailSet}
          isSizeGuideDiscountApplied={isSizeGuideDiscountApplied}
          isSubmitting={isSubmitting}
          checkoutError={checkoutError}
          isMobile={isMobile}
          showStripeRedirectModal={showStripeRedirectModal}
        />
      )}

      {/* ── Confirmation ── */}
      {page === "confirmation" && (
        <ConfirmationPage
          form={form}
          confirmationCount={confirmationCount}
          confirmationItems={confirmationItems}
          navigate={navigate}
          setCart={setCart}
          setForm={setForm}
          initialForm={initialForm}
        />
      )}

      {page !== "product" && page !== "basket" && (
        <footer style={{ borderTop: "1px solid rgba(212, 84, 122, 0.18)", marginTop: 28, background: "rgba(255, 255, 255, 0.2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 16px 40px", textAlign: "center", width: "100%", boxSizing: "border-box" }}>
            <p style={{ fontFamily: "'Lobster', serif", fontSize: 32, color: "#f86ca5", margin: "0 0 8px" }}>Juice Gels</p>
            <p style={{ fontSize: 12, color: "#4f444a", margin: "0 0 16px" }}>Handmade with love🌸</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, rowGap: 8, fontSize: 13, alignItems: "center", flexWrap: "wrap", maxWidth: 320, margin: "0 auto" }}>
              <button onClick={() => navigate("/about")} style={{ background: "none", border: "none", color: "#c4597d", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                About Her
              </button>
              <span style={{ color: "rgba(212, 84, 122, 0.18)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/faq")} style={{ background: "none", border: "none", color: "#c4597d", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                FAQ
              </button>
              <span style={{ color: "rgba(212, 84, 122, 0.18)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/custom-orders")} style={{ background: "none", border: "none", color: "#c4597d", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Custom Orders
              </button>
              <span style={{ color: "rgba(212, 84, 122, 0.18)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/contact")} style={{ background: "none", border: "none", color: "#c4597d", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Contact Us
              </button>
              <span style={{ color: "rgba(212, 84, 122, 0.18)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/videos")} style={{ background: "none", border: "none", color: "#c4597d", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Videos
              </button>
              <span style={{ color: "rgba(212, 84, 122, 0.18)", lineHeight: 1 }}>|</span>
              <a href="https://instagram.com/juicegels" target="_blank" rel="noopener noreferrer" style={{ color: "#c4597d", textDecoration: "underline", fontWeight: 500, whiteSpace: "nowrap" }}>
                Instagram
              </a>
            </div>
            <p style={{ fontSize: 11, color: "#4f444a", marginTop: 24, opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Juice Gels. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
