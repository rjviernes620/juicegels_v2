import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShoppingBag, Heart, Star, ChevronLeft, Check, Trash2, Plus, Minus } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { loadProducts, type Product } from "./utils/parseProducts";


type NailLength = "Short" | "Medium" | "Long";
type CartItem = { product: Product; shape: string; quantity: number ; length: NailLength};
type Page = "home" | "product" | "basket" | "preorder" | "confirmation";
type FormData = { firstName: string; lastName: string; email: string; phone: string; address: string; instagram: string;city: string; postcode: string; nailSizes: string; notes: string; };

const initialForm: FormData = { firstName: "", lastName: "", email: "", phone: "", address: "", instagram: "", city: "",  postcode: "", nailSizes: "", notes: "" };

const products = loadProducts();
const uniqueProducts = products.filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.groupId === product.groupId)
);

function buildBasketItemsParam(items: CartItem[]) {
  return items
    .map((item) =>
      [
        encodeURIComponent(item.product.id),
        encodeURIComponent(item.shape),
        encodeURIComponent(item.length),
        encodeURIComponent(String(item.quantity)),
      ].join("|")
    )
    .join(",");
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

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [page, setPage] = useState<Page>("home");
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedLength, setSelectedLength] = useState<NailLength>("Medium");
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
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [activeImg, setActiveImg] = useState(0);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


useEffect(() => {
  if (
    location.pathname === "/confirmation" ||
    location.pathname === "/checkout-success"
  ) {
    setPage("confirmation");
    return;
  }

  if (location.pathname === "/basket") {
    const searchParams = new URLSearchParams(location.search);
    const itemsParam = searchParams.get("items");
    if (itemsParam) {
      const parsedItems = parseBasketItemsParam(itemsParam, products);
      if (parsedItems.length > 0) setCart(parsedItems);
    }
    setPage("basket");
    return;
  }

  if (location.pathname === "/") {
    setPage("home");
    return;
  }

  if (location.pathname.startsWith("/product/") && params.id) {
    const product = products.find((p) => p.id === params.id);
    if (product) {
      const searchParams = new URLSearchParams(location.search);
      const requestedShape = searchParams.get("shape") ?? "";
      const requestedLength = (searchParams.get("length") ?? "") as NailLength;
      const shapes = getProductShapes(product);
      const lengths = getProductLengths(product);
      const nextShape = shapes.includes(requestedShape) ? requestedShape : shapes[0] ?? "";
      const nextLength = lengths.includes(requestedLength) ? requestedLength : lengths[0] ?? "Medium";

      setSelected(product);
      setSelectedShape(nextShape);
      setSelectedLength(nextLength);
      setActiveImg(0);
      setPage("product");
      return;
    }
  }

  setPage("home");
}, [location.pathname, location.search, params.id, products]);

    useEffect(() => {
    if (page !== "product" || !selected || !selectedShape || !selectedLength) return;

    const search = new URLSearchParams(location.search);
    const currentShape = search.get("shape") ?? "";
    const currentLength = search.get("length") ?? "";

    if (currentShape === selectedShape && currentLength === selectedLength) return;

    syncProductUrl(selected.id, selectedShape, selectedLength);
  }, [page, selected, selectedShape, selectedLength]);


  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("juicegels_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("juicegels_form", JSON.stringify(form));
  }, [form]);

  const toggleWishlist = (id: string) =>
    setWishlist((p) => (p.includes(id) ? p.filter((w) => w !== id) : [...p, id]));

  const validLengths: NailLength[] = ["Short", "Medium", "Long"];

  const getProductShapes = (product: Product): string[] => {
    const raw = (product as Product & { shapes?: string[] }).shapes;
    return Array.isArray(raw) && raw.length > 0 ? raw : ["Short Almond", "Medium Almond", "Long Almond"];
  };

  const getProductLengths = (product: Product): NailLength[] => {
    const raw = (product as Product & { lengths?: NailLength[] }).lengths;
    return Array.isArray(raw) && raw.length > 0 ? raw : validLengths;
  };

  const syncProductUrl = (productId: string, shape: string, length: NailLength) => {
    const search = new URLSearchParams();
    if (shape) search.set("shape", shape);
    if (length) search.set("length", length);
    navigate(`/product/${productId}?${search.toString()}`, { replace: true });
  };

  const openProduct = (p: Product) => {
  const shapes = getProductShapes(p);
  const lengths = getProductLengths(p);

  const defaultShape = shapes[0] ?? "";
  const defaultLength = lengths[0] ?? "Medium";

  setSelected(p);
  setSelectedShape(defaultShape);
  setSelectedLength(defaultLength);
  setActiveImg(0);
  setPage("product");
  navigate(`/product/${p.id}?shape=${encodeURIComponent(defaultShape)}&length=${encodeURIComponent(defaultLength)}`);
};

  const openBasketItemProduct = (item: CartItem) => {
    setSelected(item.product);
    setSelectedShape(item.shape);
    setSelectedLength(item.length);
    setActiveImg(0);
    setPage("product");

    const search = new URLSearchParams();
    search.set("shape", item.shape);
    search.set("length", item.length);

    navigate(`/product/${item.product.id}?${search.toString()}`);
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

      const itemsParam = buildBasketItemsParam(next);
      navigate(`/basket?items=${itemsParam}`);

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

    navigate(
      updated.length
        ? `/basket?items=${buildBasketItemsParam(updated)}`
        : "/basket"
    );

    return updated;
  });
};

  const removeItem = (idx: number) => {
    setCart((prev) => {
      const updated = prev.filter((_, i) => i !== idx);

      navigate(
        updated.length
          ? `/basket?items=${buildBasketItemsParam(updated)}`
          : "/basket"
      );

      return updated;
    });
  };
  const handleFormChange = (field: keyof FormData, value: string) => {
  setForm((p) => ({ ...p, [field]: value }));
  if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
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
    setIsSubmitting(true);

    const endpoint = import.meta.env.DEV
      ? "https://juicegels-backend.onrender.com/create-checkout-session"
      : "/create-checkout-session";

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
      {/* ── Header ── */}
      <header style={{ background: "var(--card)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {page !== "home" ? (
          <button onClick={goBack} style={{ color: "var(--primary)", background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Back">
            <ChevronLeft size={22} />
          </button>
        ) : <div style={{ width: 30 }} />}

        <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--primary)", margin: 0, letterSpacing: "0.04em", fontSize: 22 }}>
          Juice Gels
        </h1>

        <button onClick={() => navigate("/basket")} style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: 4 }} aria-label="Basket">
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
      {page === "home" && (
        <main>
          <div style={{ background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", padding: "28px 20px 22px", textAlign: "center" }}>
            <p style={{ color: "var(--muted-foreground)", margin: "0 0 5px", letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase" }}>Handmade Press-On Nails</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "var(--foreground)", margin: "0 0 8px", lineHeight: 1.2 }}>Nail the Look ✨</h2>
            <p style={{ color: "var(--muted-foreground)", margin: "0 0 4px", fontSize: 13, lineHeight: 1.6 }}>Custom-fit gel press-ons · Send your nail sizes for a perfect fit</p>
          </div>

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

          <div style={{ margin: "4px 14px 32px", background: "var(--secondary)", borderRadius: 14, padding: "16px 18px", textAlign: "center" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", color: "var(--foreground)", margin: "0 0 3px", fontSize: 16 }}>Need your nail sizes?</p>
            <p style={{ color: "var(--muted-foreground)", margin: 0, fontSize: 12 }}>Pick up the Nail Sizing Guide — £4 deducted from your first set 🌸</p>
          </div>
        </main>
      )}

    {/* ── Product Detail ── */}
    {page === "product" && selected && (
      <main>
        <ImageWithFallback
          src={[selected.image, ...selected.extraImages][activeImg]}
          alt={selected.name}
          style={{ width: "100%", height: 320, objectFit: "cover", display: "block", background: "var(--secondary)" }}
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
                <ImageWithFallback src={img} alt="" style={{ width: 52, height: 52, objectFit: "cover", display: "block" }} />
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: "16px 20px 130px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", margin: "0 0 4px", fontSize: 22, color: "var(--foreground)" }}>
            {selected.name}
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={12} fill="var(--primary)" stroke="none" />
            ))}
            <span style={{ fontSize: 12, color: "var(--muted-foreground)", marginLeft: 3 }}>
              Handmade · In stock
            </span>
          </div>

          <span style={{ fontSize: 24, fontWeight: 700, color: "var(--primary)" }}>
            £{selected.price.toFixed(2)}
          </span>

          <p style={{ color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.7, margin: "12px 0 18px" }}>
            {selected.description}
          </p>

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
                  color: selectedShape === s ? "#fff" : "var(--foreground)",
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
                  color: selectedLength === length ? "#fff" : "var(--foreground)",
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
            🌸 Send your nail sizes after ordering via <strong>@juicegels</strong> on Instagram or through your order notes.
          </div>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "var(--foreground)", margin: "0 0 14px" }}>Your Basket</h2>

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
                    <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flexShrink: 0, background: "var(--secondary)" }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 500, color: "var(--foreground)", lineHeight: 1.3 }}>{item.product.name}</p>
                      <p style={{ margin: "0 0 6px", fontSize: 11, color: "var(--muted-foreground)" }}>Shape: {item.shape}</p>
                      <p style={{ margin: "0 0 6px", fontSize: 11, color: "var(--muted-foreground)" }}>Length: {item.length}</p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <button onClick={() => updateQty(idx, -1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid var(--border)", background: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                          <span style={{ minWidth: 28, textAlign: "center", fontSize: 13, fontWeight: 600 }}>{item.quantity}</span>
                          <button onClick={() => updateQty(idx, 1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid var(--border)", background: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
                        </div>
                        <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: 14 }}>£{(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeItem(idx)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}><Trash2 size={15} style={{ color: "var(--muted-foreground)" }} /></button>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--secondary)", borderRadius: 14, padding: "14px 16px", marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>Delivery</span>
                  <span style={{ color: "var(--primary)" }}>Free</span>
                </div>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15 }}>
                  <span>Total</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <div style={{ background: "var(--muted)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5, marginBottom: 4 }}>
                💅 Remember to send your nail sizes after ordering via <strong>@juicegels</strong> on Instagram or in your order notes.
              </div>
            </>
          )}
        </main>
      )}

      {cart.length > 0 && page === "basket" && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, padding: "14px 18px", background: "var(--card)", borderTop: "1px solid var(--border)", display: "flex", gap: 10, boxSizing: "border-box" }}>
          <button onClick={() => navigate("/")} style={{ border: "1.5px solid var(--border)", background: "var(--card)", borderRadius: 12, height: 46, padding: "0 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", flexShrink: 0 }}>+ Add more</button>
          <button onClick={() => { setForm(initialForm); setErrors({}); setPage("preorder"); }} style={{ flex: 1, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 12, height: 46, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Pre-order · £{cartTotal.toFixed(2)}
          </button>
        </div>
      )}

      {/* ── Pre-order Form ── */}
      {page === "preorder" && (
        <main style={{ padding: "18px 18px 48px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "var(--foreground)", margin: "0 0 4px" }}>Your Details</h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: 12, margin: "0 0 18px" }}>{cartCount} item{cartCount !== 1 ? "s" : ""} · £{cartTotal.toFixed(2)} total</p>

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

            <Field label="Your nail sizes (e.g. R: 3,5,4,6,4 · L: 3,5,4,6,4)">
              <input type="text" placeholder="Right: 3,5,4,6,4  Left: 3,5,4,6,4" value={form.nailSizes} onChange={(e) => handleFormChange("nailSizes", e.target.value)} style={mkInput(false)} />
              <span style={{ fontSize: 11, color: "var(--muted-foreground)", lineHeight: 1.4 }}>Not sure? Order the Nail Sizing Guide first — or send your sizes via @juicegels on Instagram after ordering.</span>
            </Field>

            <Field label="Additional notes (optional)">
              <textarea placeholder="Any special requests, colour preferences, or custom details..." value={form.notes} onChange={(e) => handleFormChange("notes", e.target.value)} rows={3} style={{ ...mkInput(false), resize: "none" }} />
            </Field>

            <div style={{ background: "var(--secondary)", borderRadius: 13, padding: "13px 15px", fontSize: 13, lineHeight: 1.7, color: "var(--foreground)" }}>
              <strong style={{ display: "block", marginBottom: 6 }}>Order Summary</strong>
              {cart.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--muted-foreground)" }}>
                  <span>{item.product.name} ({item.shape}) ×{item.quantity}</span>
                  <span>£{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                <span>Total</span><span>£{cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} style={{ background: isSubmitting ? "var(--border)" : "var(--primary)", color: "#fff", border: "none", borderRadius: 12, height: 48, fontWeight: 600, fontSize: 14, cursor: isSubmitting ? "not-allowed" : "pointer", letterSpacing: "0.02em" }}>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--foreground)", margin: "0 0 8px" }}>Order Placed!</h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>
            Thank you, <strong>{form.firstName}</strong>! Your pre-order of {cartCount} item{cartCount !== 1 ? "s" : ""} is confirmed.
          </p>
          <p style={{ color: "var(--muted-foreground)", fontSize: 12, margin: "0 0 24px", lineHeight: 1.5 }}>
            A confirmation will be sent to <strong>{form.email}</strong>.<br />
            {!form.nailSizes && <span style={{ color: "var(--primary)" }}>📏 Don't forget to DM your nail sizes to <strong>@juicegels</strong> on Instagram!</span>}
          </p>

          <div style={{ background: "var(--secondary)", borderRadius: 13, padding: "14px", textAlign: "left", marginBottom: 14 }}>
            <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 13 }}>Items ordered</p>
            {cart.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 40, height: 40, borderRadius: 7, objectFit: "cover", background: "var(--muted)" }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "var(--foreground)" }}>{item.product.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "var(--muted-foreground)" }}>{item.shape} · ×{item.quantity} · £{(item.product.price * item.quantity).toFixed(2)}</p>
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
  return { background: "var(--input-background)", border: `1.5px solid ${hasError ? "var(--destructive)" : "var(--border)"}`, borderRadius: 9, padding: "10px 13px", fontSize: 14, color: "var(--foreground)", outline: "none", width: "100%", boxSizing: "border-box" };
}
