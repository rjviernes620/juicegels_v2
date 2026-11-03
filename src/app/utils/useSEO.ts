import { useEffect } from "react";

/**
 * SEO configuration per page.
 * Updates document title, meta description, canonical URL,
 * and Open Graph tags dynamically based on the current route.
 */

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  ogType?: string;
}

const BASE_URL = "https://juicegels.com";
const SITE_NAME = "JuiceGels";
const OG_IMAGE = `${BASE_URL}/images/juicegels%20circle.png`;

const PAGE_SEO: Record<string, SEOConfig> = {
  home: {
    title: "JuiceGels | Handmade Press-On Gel Nails – Shop Online",
    description:
      "Shop handmade press-on gel nails at JuiceGels. Premium quality, unique designs, easy application. Browse our collections and order your custom nails today!",
    path: "/",
  },
  shop: {
    title: "Shop All Nails | JuiceGels – Press-On Gel Nail Sets",
    description:
      "Browse our full collection of handmade press-on gel nails. Choose from a variety of styles, shapes, and lengths. Free UK shipping available.",
    path: "/shop",
  },
  about: {
    title: "About Us | JuiceGels – Our Story",
    description:
      "Learn about JuiceGels, the story behind our handmade press-on gel nails, and what makes our nail art unique. Crafted with love and premium materials.",
    path: "/about",
  },
  videos: {
    title: "Videos | JuiceGels – Nail Art Tutorials & Reviews",
    description:
      "Watch JuiceGels nail art videos, tutorials, and customer reviews. See our press-on gel nails in action and get inspired for your next set.",
    path: "/videos",
  },
  search: {
    title: "Search | JuiceGels – Find Your Perfect Nails",
    description:
      "Search our collection of handmade press-on gel nails. Find the perfect style, shape, and design for any occasion.",
    path: "/search",
  },
  faq: {
    title: "FAQ | JuiceGels – Frequently Asked Questions",
    description:
      "Find answers to common questions about JuiceGels press-on gel nails, including application, sizing, shipping, and care instructions.",
    path: "/faq",
  },
  contact: {
    title: "Contact Us | JuiceGels – Get In Touch",
    description:
      "Have questions about our press-on gel nails? Contact JuiceGels via Instagram or email. We'd love to hear from you!",
    path: "/contact",
  },
  "custom-orders": {
    title: "Custom Orders | JuiceGels – Design Your Own Nails",
    description:
      "Create your dream nail set with JuiceGels custom orders. Choose your shape, length, and design for a one-of-a-kind handmade press-on gel nail set.",
    path: "/custom-orders",
  },
  basket: {
    title: "Shopping Basket | JuiceGels",
    description:
      "Review your JuiceGels shopping basket and proceed to checkout. Handmade press-on gel nails delivered to your door.",
    path: "/basket",
  },
  preorder: {
    title: "Checkout | JuiceGels",
    description:
      "Complete your JuiceGels order. Secure checkout for handmade press-on gel nails.",
    path: "/basket",
  },
  product: {
    title: "Product | JuiceGels – Press-On Gel Nails",
    description:
      "View this handmade press-on gel nail set from JuiceGels. Available in multiple shapes and lengths.",
    path: "/product",
    ogType: "product",
  },
  confirmation: {
    title: "Order Confirmed | JuiceGels",
    description:
      "Thank you for your JuiceGels order! Your handmade press-on gel nails are on their way.",
    path: "/confirmation",
  },
};

function setMetaTag(
  attr: "name" | "property",
  key: string,
  content: string
): void {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function setCanonical(href: string): void {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (el) {
    el.href = href;
  } else {
    el = document.createElement("link");
    el.rel = "canonical";
    el.href = href;
    document.head.appendChild(el);
  }
}

interface UseSEOProps {
  page: string;
  productName?: string;
  productDescription?: string;
  productImage?: string;
  productPrice?: number;
  productPath?: string;
}

export function useSEO({
  page,
  productName,
  productDescription,
  productImage,
  productPrice,
  productPath,
}: UseSEOProps): void {
  useEffect(() => {
    const config = PAGE_SEO[page] ?? PAGE_SEO.home;

    // Dynamic product page overrides
    const title =
      page === "product" && productName
        ? `${productName} | ${SITE_NAME} – Press-On Gel Nails`
        : config.title;

    const description =
      page === "product" && productDescription
        ? productDescription
        : config.description;

    const canonicalPath =
      page === "product" && productPath
        ? productPath
        : config.path;

    const ogImage =
      page === "product" && productImage
        ? productImage
        : OG_IMAGE;

    const ogType = config.ogType ?? "website";
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // Update document title
    document.title = title;

    // Update meta tags
    setMetaTag("name", "description", description);

    // Update canonical
    setCanonical(canonicalUrl);

    // Update Open Graph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);

    // Update Twitter Card
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // Product-specific structured data
    if (page === "product" && productName && productPrice !== undefined) {
      let scriptEl = document.querySelector(
        'script[data-seo="product"]'
      ) as HTMLScriptElement | null;
      const productData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productName,
        description: description,
        image: ogImage,
        url: canonicalUrl,
        brand: {
          "@type": "Brand",
          name: "JuiceGels",
        },
        offers: {
          "@type": "Offer",
          price: (productPrice / 100).toFixed(2),
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        },
      };
      if (scriptEl) {
        scriptEl.textContent = JSON.stringify(productData);
      } else {
        scriptEl = document.createElement("script");
        scriptEl.type = "application/ld+json";
        scriptEl.setAttribute("data-seo", "product");
        scriptEl.textContent = JSON.stringify(productData);
        document.head.appendChild(scriptEl);
      }
    } else {
      // Remove product structured data when not on product page
      const existing = document.querySelector('script[data-seo="product"]');
      if (existing) existing.remove();
    }
  }, [page, productName, productDescription, productImage, productPrice, productPath]);
}
