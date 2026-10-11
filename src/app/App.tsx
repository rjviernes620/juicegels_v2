import { useEffect, useMemo, useState, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Check, Trash2, Plus, Minus, Menu, X, Instagram } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { MaintenancePage } from "./components/MaintenancePage";
import { loadProducts, loadTrendingProductIds, type Product } from "./utils/parseProducts";
import { CheckoutProgressBar } from "./components/CheckoutProgressBar";
import { CookieNotice } from "./components/CookieNotice";
import { COUNTRIES } from "./utils/countries";
import { useSEO } from "./utils/useSEO";
import { AmbientGradient } from "./components/ui/AmbientGradient";
import { TiktokIcon } from "./components/ui/TiktokIcon";
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
  parseMetaBasketProductsParam,
  parseTokenBasketParam,
  isLocalDev,
  getStripeShippingRateIds,
  getStripeFreeShippingPromoId,
  STRIPE_HALLOWEEN_COUPON_ID,
  STRIPE_HALLOWEEN_COUPON_TITLE,
  isHalloweenCoupon,
  isHalloweenProduct,
  getHalloweenSalePrice,
  getCouponDisplayName
} from "./utils/shopHelpers";

const About = lazy(() => import("./components/About").then((m) => ({ default: m.About })));
const Videos = lazy(() => import("./components/Videos").then((m) => ({ default: m.Videos })));
const Search = lazy(() => import("./components/Search").then((m) => ({ default: m.Search })));
const Contact = lazy(() => import("./components/Contact").then((m) => ({ default: m.Contact })));
const CustomOrders = lazy(() => import("./components/CustomOrders").then((m) => ({ default: m.CustomOrders })));
const FAQ = lazy(() => import("./components/FAQ").then((m) => ({ default: m.FAQ })));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./components/TermsOfService").then((m) => ({ default: m.TermsOfService })));
const ShopPage = lazy(() => import("./components/Shop").then((m) => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() => import("./components/Shop").then((m) => ({ default: m.ProductDetailPage })));
const BasketPage = lazy(() => import("./components/Shop").then((m) => ({ default: m.BasketPage })));
const PreorderPage = lazy(() => import("./components/Shop").then((m) => ({ default: m.PreorderPage })));
const ConfirmationPage = lazy(() => import("./components/Shop").then((m) => ({ default: m.ConfirmationPage })));
const HalloweenPage = lazy(() => import("./components/HalloweenPage").then((m) => ({ default: m.HalloweenPage })));
const HomePage = lazy(() => import("./components/HomePage").then((m) => ({ default: m.HomePage })));

function PageLoadingFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0c0314",
        color: "#ff70a6",
        fontFamily: "'DM Sans', sans-serif"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            border: "3px solid rgba(255, 112, 166, 0.2)",
            borderTopColor: "#ff70a6",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite"
          }}
        />
        <span style={{ fontSize: 13, letterSpacing: "0.05em" }}>Loading...</span>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}


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
  const [isMaintenanceMode, setIsMaintenanceMode] = useState<boolean>(false);
  const [isMaintenanceActive, setIsMaintenanceActive] = useState<boolean>(false);
  const [stripePublishableKey, setStripePublishableKey] = useState<string>("");

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
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [couponInput, setCouponInput] = useState("");
  const [couponSummary, setCouponSummary] = useState<CouponSummary | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isCouponLoading, setIsCouponLoading] = useState(false);
  const [isCouponDismissed, setIsCouponDismissed] = useState(false);
  const [shippingOptionId, setShippingOptionId] = useState<ShippingOptionId>("tracked48");
  const [isSizeGuideDiscountApplied, setIsSizeGuideDiscountApplied] = useState(false);
  const [isSizeGuideLoading, setIsSizeGuideLoading] = useState(false);
  const [trendingProductIds, setTrendingProductIds] = useState<number[]>([]);


  const uniqueProducts = useMemo(() => {
    const seen = new Map<string, Product>();
    for (const product of products) {
      const key = normalizeGroupKey(product.groupId);
      if (!seen.has(key)) {
        seen.set(key, product);
      }
    }
    return Array.from(seen.values()).sort((a, b) => {
      const numA = parseInt(a.id.replace(/\D/g, ""), 10) || 0;
      const numB = parseInt(b.id.replace(/\D/g, ""), 10) || 0;
      if (numA !== numB) {
        return numB - numA;
      }
      return b.id.localeCompare(a.id, undefined, { numeric: true });
    });
  }, [products]);

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

    if (homeSortBy === "id-desc") {
      list.sort((a, b) => {
        const numA = parseInt(a.id.replace(/\D/g, ""), 10) || 0;
        const numB = parseInt(b.id.replace(/\D/g, ""), 10) || 0;
        return numB !== numA ? numB - numA : b.id.localeCompare(a.id, undefined, { numeric: true });
      });
    } else if (homeSortBy === "id-asc") {
      list.sort((a, b) => {
        const numA = parseInt(a.id.replace(/\D/g, ""), 10) || 0;
        const numB = parseInt(b.id.replace(/\D/g, ""), 10) || 0;
        return numA !== numB ? numA - numB : a.id.localeCompare(b.id, undefined, { numeric: true });
      });
    } else if (homeSortBy === "price-asc") {
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

  const currentBasketUrl = (items: CartItem[]) => {
    const hasHalloween = items.some(
      (item) =>
        item.product.tags?.includes("Halloween") ||
        item.product.collection === "Halloween Collection"
    );
    const existingCoupon = searchParams.get("coupon");
    const couponToUse =
      (isHalloweenCoupon(existingCoupon) ? "halloween" : existingCoupon) ||
      (!isCouponDismissed && hasHalloween ? "halloween" : null);

    return buildBasketUrl(items, {
      coupon: couponToUse,
      includeCoupon: Boolean(couponToUse) || items.length > 0,
      cartOrigin: searchParams.get("cart_origin") ?? META_CART_ORIGIN,
    });
  };


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
    // Clear any persistent local token on startup to force re-authentication
    try {
      localStorage.removeItem("maintenance_bypass_token");
    } catch (e) {
      console.error(e);
    }

    let isMounted = true;
    const checkStatus = async () => {
      try {
        const bypassToken = (window as any).maintenance_bypass_token || localStorage.getItem("maintenance_bypass_token") || "";
        const headers: Record<string, string> = {};
        if (bypassToken) {
          headers["X-Maintenance-Bypass"] = bypassToken;
        }
        const response = await fetch(`${CHECKOUT_API_BASE}/api/status`, { headers });
        if (response.ok) {
          const data = await response.json();
          if (isMounted) {
            if (data.maintenance) {
              setIsMaintenanceMode(true);
            }
            if (data.maintenance_mode_active) {
              setIsMaintenanceActive(true);
            }
            if (data.stripe_publishable_key) {
              setStripePublishableKey(data.stripe_publishable_key);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch server status:", error);
      }
    };
    checkStatus();
    return () => {
      isMounted = false;
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
        if (typeof window !== "undefined" && window.sessionStorage) {
          window.sessionStorage.setItem("juicegels_confirmation_items", JSON.stringify(purchasedItems));
        }
      } else if (productsParam) {
        purchasedItems = parseMetaBasketProductsParam(productsParam, products);
        if (typeof window !== "undefined" && window.sessionStorage) {
          window.sessionStorage.setItem("juicegels_confirmation_items", JSON.stringify(purchasedItems));
        }
      } else if (typeof window !== "undefined" && window.sessionStorage) {
        try {
          const cached = window.sessionStorage.getItem("juicegels_confirmation_items");
          if (cached) purchasedItems = JSON.parse(cached) as CartItem[];
        } catch { }
      }

      if (purchasedItems.length === 0 && typeof window !== "undefined") {
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
      const paymentIntentId = searchParams.get("payment_intent");

      // Clean up sensitive Stripe details from browser URL instantly
      if (typeof window !== "undefined" && window.history && window.history.replaceState) {
        const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?checkout=success";
        window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
      }

      if (sessionId) {
        fetch(`${CHECKOUT_API_BASE}/api/checkout-session/${sessionId}`)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch session details");
            return res.json();
          })
          .then((data) => {
            const updatedForm = {
              firstName: data.firstName || "",
              lastName: data.lastName || "",
              email: data.email || "",
              phone: data.phone || "",
              address: data.address || "",
              instagram: data.instagram || "",
              city: data.city || "",
              postcode: data.postcode || "",
              notes: data.notes || "",
              contactMethod: data.contactMethod || "instagram",
              country: data.country || "GB",
            };
            if (typeof window !== "undefined" && window.sessionStorage) {
              window.sessionStorage.setItem("juicegels_confirmation_form", JSON.stringify(updatedForm));
            }
            setForm((prev) => ({ ...prev, ...updatedForm }));
          })
          .catch((err) => {
            console.error("Error fetching checkout session:", err);
          });
      } else if (paymentIntentId) {
        fetch(`${CHECKOUT_API_BASE}/api/payment-intent/${paymentIntentId}`)
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch payment intent details");
            return res.json();
          })
          .then((data) => {
            const updatedForm = {
              firstName: data.firstName || "",
              lastName: data.lastName || "",
              email: data.email || "",
              phone: data.phone || "",
              address: data.address || "",
              instagram: data.instagram || "",
              city: data.city || "",
              postcode: data.postcode || "",
              notes: data.notes || "",
              contactMethod: data.contactMethod || "instagram",
              country: data.country || "GB",
            };
            if (typeof window !== "undefined" && window.sessionStorage) {
              window.sessionStorage.setItem("juicegels_confirmation_form", JSON.stringify(updatedForm));
            }
            setForm((prev) => ({ ...prev, ...updatedForm }));
          })
          .catch((err) => {
            console.error("Error fetching payment intent:", err);
          });
      } else if (typeof window !== "undefined" && window.sessionStorage) {
        try {
          const cachedForm = window.sessionStorage.getItem("juicegels_confirmation_form");
          if (cachedForm) {
            const data = JSON.parse(cachedForm);
            setForm((prev) => ({ ...prev, ...data }));
          }
        } catch { }
      }

      return;
    }

    if (effectivePath === "/basket") {
      const searchParams = new URLSearchParams(location.search);
      const tokenParam = searchParams.get("b");
      const productsParam = searchParams.get("products");
      const itemsParam = searchParams.get("items");

      let hasQueryParams = false;

      if (tokenParam) {
        hasQueryParams = true;
        const { cartItems } = parseTokenBasketParam(tokenParam, products);
        if (cartItems.length > 0) setCart(cartItems);
      } else if (productsParam !== null) {
        hasQueryParams = true;
        setCart(parseMetaBasketProductsParam(productsParam, products));
      } else if (itemsParam) {
        hasQueryParams = true;
        const parsedItems = parseBasketItemsParam(itemsParam, products);
        if (parsedItems.length > 0) setCart(parsedItems);
      }

      // Clean up sensitive / exposed URL query details from browser address bar instantly
      if (hasQueryParams || location.search) {
        if (typeof window !== "undefined" && window.history && window.history.replaceState) {
          const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
          window.history.replaceState({ path: cleanUrl }, "", cleanUrl);
        }
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

    if (effectivePath === "/privacy-policy") {
      setPage("privacy-policy");
      return;
    }

    if (effectivePath === "/terms-of-service") {
      setPage("terms-of-service");
      return;
    }

    if (effectivePath === "/shop") {
      setPage("shop");
      return;
    }

    if (effectivePath === "/halloween") {
      setPage("halloween");
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

  const couponDiscount = couponSummary?.discountAmount ?? 0;
  const discountTotal = couponDiscount;
  const orderTotal = Math.max(0, cartTotal - discountTotal);
  const hasCouponFeedback = isCouponLoading || !!couponError || !!couponSummary;
  const activePromoId = getStripeFreeShippingPromoId(stripePublishableKey);
  const isFreeShippingPromoApplied = !!(
    couponSummary &&
    (couponSummary.code.toUpperCase() === "DEV_JUNJUN" ||
      couponSummary.promotionCodeId === activePromoId)
  );

  const shippingOptions = useMemo(
    () => buildShippingOptions(orderTotal, form.country, isFreeShippingPromoApplied, stripePublishableKey),
    [orderTotal, form.country, isFreeShippingPromoApplied, stripePublishableKey]
  );

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
    let currentCoupon = searchParams.get("coupon")?.trim() ?? "";

    const hasHalloween = cart.some(
      (item) =>
        item.product.tags?.includes("Halloween") ||
        item.product.collection === "Halloween Collection"
    );

    if (!currentCoupon && hasHalloween && !isCouponDismissed) {
      currentCoupon = STRIPE_HALLOWEEN_COUPON_ID;
    }

    setCouponInput(isHalloweenCoupon(currentCoupon) ? "" : currentCoupon);

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
        const couponToSend = isHalloweenCoupon(currentCoupon)
          ? STRIPE_HALLOWEEN_COUPON_ID
          : currentCoupon;

        const response = await fetch(`${CHECKOUT_API_BASE}/validate-coupon`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            coupon: couponToSend,
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

        // Fallback for Halloween coupon if remote endpoint hasn't redeployed yet or on network error
        if (isHalloweenCoupon(currentCoupon)) {
          const discountAmount = Math.round(cartTotal * 0.2 * 100) / 100;
          setCouponSummary({
            code: STRIPE_HALLOWEEN_COUPON_ID,
            promotionCodeId: "",
            description: STRIPE_HALLOWEEN_COUPON_TITLE,
            discountAmount,
          });
          setCouponError(null);
          return;
        }

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
  }, [cart, cartTotal, searchParams, isCouponDismissed]);

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
    let trimmedCode = couponInput.trim();
    if (isHalloweenCoupon(trimmedCode)) {
      trimmedCode = STRIPE_HALLOWEEN_COUPON_ID;
    }

    setIsCouponDismissed(false);
    setCouponError(null);

    navigate(
      buildBasketUrl(cart, {
        coupon: isHalloweenCoupon(trimmedCode) ? "halloween" : (trimmedCode || null),
        includeCoupon: Boolean(trimmedCode),
        cartOrigin: searchParams.get("cart_origin") ?? META_CART_ORIGIN,
      })
    );
  };

  const removeCoupon = () => {
    setIsCouponDismissed(true);
    setCouponInput("");
    setCouponSummary(null);
    setCouponError(null);

    navigate(
      buildBasketUrl(cart, {
        coupon: null,
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
    if (form.contactMethod === "instagram") {
      const handle = form.instagram.trim();
      const cleanHandle = handle.replace(/^@/, "");
      if (!cleanHandle) {
        e.instagram = "Required";
      } else if (!/^[a-zA-Z0-9._]+$/.test(cleanHandle)) {
        e.instagram = "Valid username required (letters, numbers, periods, underscores)";
      }
    }
    if (!form.postcode.trim()) e.postcode = "Required";
    if (!form.country.trim()) e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!turnstileToken) {
      setCheckoutError("Please complete the security check.");
      return;
    }

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
          shippingRateId: selectedShippingOption?.stripeRateId ?? getStripeShippingRateIds(stripePublishableKey).tracked48,
          shippingOptionId: selectedShippingOption?.id ?? "tracked48",
          checkoutPath: "/confirmation",
          turnstileToken,
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

  if (isMaintenanceMode && page !== "confirmation") {
    return (
      <MaintenancePage
        onBypassSuccess={(token) => {
          (window as any).maintenance_bypass_token = token;
          setIsMaintenanceMode(false);
          setIsMaintenanceActive(true);
        }}
      />
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: isMobile ? 430 : "100%", margin: "0 auto", minHeight: "100vh", background: "#0c0314", display: "flex", flexDirection: "column" }}>
      {isMaintenanceActive && (
        <div style={{
          background: "linear-gradient(90deg, #e53e3e 0%, #dd6b20 100%)",
          color: "#ffffff",
          textAlign: "center",
          padding: "8px 16px",
          fontSize: "13px",
          fontWeight: 700,
          position: "sticky",
          top: 0,
          zIndex: 9999,
          boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          letterSpacing: "0.5px",
          textTransform: "uppercase"
        }}>
          <span>⚠️ Maintenance Mode Active (Test environment bypass active)</span>
        </div>
      )}
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
            background: "rgba(12, 3, 20, 0.75)",
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
              background: "#1c0c2c",
              borderRadius: 18,
              padding: "22px 20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
              border: "1px solid rgba(255, 112, 166, 0.3)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "3px solid rgba(255, 112, 166, 0.2)",
                borderTopColor: "#ff7828",
                margin: "0 auto 14px",
                animation: "juicegels-spin 1s linear infinite",
              }}
            />
            <h3 style={{ margin: "0 0 8px", fontFamily: "'Lobster', serif", fontSize: 22, color: "#ffffff" }}>
              Redirecting to Stripe
            </h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "#d8c8df" }}>
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
          background: "linear-gradient(180deg, #180928 0%, #0c0314 100%)",
          borderRight: "1px solid rgba(255, 112, 166, 0.2)",
          boxShadow: "10px 0 30px rgba(0, 0, 0, 0.5)",
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
              color: "#ff70a6"
            }}
          >
            Juice Gels
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", color: "#ffd3ea", cursor: "pointer", padding: 4 }}
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
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 112, 166, 0.2)",
                borderRadius: 12,
                padding: "12px 14px",
                textAlign: "left",
                color: "#ffd3ea",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease",
                overflow: "hidden",
                width: "100%",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 120, 40, 0.2)"; e.currentTarget.style.borderColor = "#ff7828"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"; e.currentTarget.style.borderColor = "rgba(255, 112, 166, 0.2)"; }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div style={{ marginTop: "auto", textAlign: "center", paddingTop: 20, borderTop: "1px solid rgba(255, 112, 166, 0.2)" }}>

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
                background: "linear-gradient(135deg, #180928 0%, #3b104f 45%, #ff7828 100%)",
                border: "1px solid rgba(255, 112, 166, 0.35)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(255, 120, 40, 0.2)",
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
                background: "linear-gradient(135deg, #180928 0%, #3b104f 45%, #ff7828 100%)",
                border: "1px solid rgba(255, 112, 166, 0.35)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 24,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(255, 120, 40, 0.2)",
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
      <header style={{ background: "linear-gradient(135deg, #180928 0%, #3b104f 45%, #ff7828 100%)", borderBottom: "1px solid rgba(255, 112, 166, 0.25)", position: "sticky", top: 0, zIndex: 50 }}>
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
                  <span style={{ position: "absolute", top: -4, right: -4, background: "#ff7828", color: "#fff", borderRadius: "50%", width: 17, height: 17, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
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
                            background: "#ff7828",
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
                    <span style={{ position: "absolute", top: -4, right: -4, background: "#ff7828", color: "#fff", borderRadius: "50%", width: 17, height: 17, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
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
        <CheckoutProgressBar page={page} setPage={setPage} />
      )}

      {/* ── Home ── */}
      {isProductsLoading && (
        <main style={{ padding: "48px 20px", textAlign: "center" }}>
          <p style={{ color: "#fff5f7", fontSize: 14 }}>Loading products...</p>
        </main>
      )}

      <Suspense fallback={<PageLoadingFallback />}>
        {!isProductsLoading && page === "home" && (
          <HomePage
            isMobile={isMobile}
            isTablet={isTablet}
            navigate={navigate}
            trendingProducts={trendingProducts}
            openProduct={openProduct}
          />
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

        {!isProductsLoading && page === "halloween" && (
          <HalloweenPage
            navigate={navigate}
            isMobile={isMobile}
            isTablet={isTablet}
            cart={cart}
            setCart={setCart}
            currentBasketUrl={currentBasketUrl}
          />
        )}

        {/* ── About ── */}
        {page === "about" && (
          <About isMobile={isMobile} isTablet={isTablet} />
        )}

        {/* ── Videos ── */}
        {page === "videos" && (
          <Videos
            products={products}
            onShopProduct={handleShopProduct}
            isMobile={isMobile}
            isTablet={isTablet}
            isPageActive={page === "videos"}
          />
        )}

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

        {/* ── Privacy Policy ── */}
        {page === "privacy-policy" && (
          <PrivacyPolicy isMobile={isMobile} isTablet={isTablet} navigate={navigate} />
        )}

        {/* ── Terms of Service ── */}
        {page === "terms-of-service" && (
          <TermsOfService isMobile={isMobile} isTablet={isTablet} navigate={navigate} />
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
            form={form}
            errors={errors}
            stripePublishableKey={stripePublishableKey}
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
            hasSizeGuide={hasSizeGuide}
            hasNailSet={hasNailSet}
            isSizeGuideDiscountApplied={isSizeGuideDiscountApplied}
            isSubmitting={isSubmitting}
            checkoutError={checkoutError}
            isMobile={isMobile}
            showStripeRedirectModal={showStripeRedirectModal}
            setTurnstileToken={setTurnstileToken}
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
            isMobile={isMobile}
          />
        )}
      </Suspense>

      {page !== "basket" && (
        <footer style={{ borderTop: "1px solid rgba(255, 112, 166, 0.2)", marginTop: 28, background: "#08020d" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 16px 40px", textAlign: "center", width: "100%", boxSizing: "border-box" }}>
            <p style={{ fontFamily: "'Lobster', serif", fontSize: 32, color: "#ff70a6", margin: "0 0 8px" }}>Juice Gels</p>
            <p style={{ fontSize: 12, color: "#d8c8df", margin: "0 0 16px" }}>Handmade with love🌸</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, rowGap: 8, fontSize: 13, alignItems: "center", flexWrap: "wrap", maxWidth: 600, margin: "0 auto" }}>
              <button onClick={() => navigate("/about")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                About Her
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/faq")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                FAQ
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/custom-orders")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Custom Orders
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/contact")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Contact Us
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/videos")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Videos
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/privacy-policy")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Privacy Policy
              </button>
              <span style={{ color: "rgba(255, 112, 166, 0.3)", lineHeight: 1 }}>|</span>
              <button onClick={() => navigate("/terms-of-service")} style={{ background: "none", border: "none", color: "#ff9f43", cursor: "pointer", fontWeight: 500, fontSize: 13, textDecoration: "underline", padding: 0, whiteSpace: "nowrap" }}>
                Terms of Service
              </button>

            </div>
            <p style={{ fontSize: 11, color: "rgba(216, 200, 223, 0.6)", marginTop: 24 }}>
              &copy; {new Date().getFullYear()} Juice Gels. All rights reserved. Website by <a href="https://rjviernes.tech" target="_blank" rel="noopener noreferrer" style={{ color: "#ff70a6", textDecoration: "underline" }}>Roel</a>
            </p>
          </div>
        </footer>
      )}
      {isLocalDev() && (
        <div style={{
          position: "fixed",
          bottom: 16,
          left: 16,
          background: "#e11d48", // Rose-600
          color: "#ffffff",
          padding: "6px 12px",
          borderRadius: 10,
          fontSize: 11,
          fontWeight: "bold",
          zIndex: 99999,
          pointerEvents: "none",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          gap: 6
        }}>
          <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }}></span>
          Stripe Test Mode
        </div>
      )}
    </div>
  );
}
