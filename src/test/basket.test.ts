import { describe, it, expect } from 'vitest';
import {
  encodeBasketToken,
  decodeBasketToken,
  buildBasketUrl,
  parseTokenBasketParam,
  parseMetaBasketProductsParam,
  parseBasketItemsParam,
  STRIPE_HALLOWEEN_COUPON_ID,
  STRIPE_HALLOWEEN_COUPON_TITLE,
  isHalloweenCoupon,
  getCouponDisplayName,
  isHalloweenProduct,
  calculateHalloweenDiscount,
  type BasketTokenData,
} from '../app/utils/shopHelpers';
import { type Product } from '../app/utils/parseProducts';
import { type CartItem } from '../app/types';
import { resolveHalloweenSetsWithSanity, HALLOWEEN_SETS } from '../app/components/HalloweenPage';

const mockProductA: Product = {
  id: 'JUICEGELS-0001',
  groupId: 'juicegels_classicset',
  name: 'Classic Pink',
  price: 24.99,
  description: 'Handmade press-on nails',
  image: 'https://cdn.sanity.io/example1.jpg',
  extraImages: [],
  shapes: ['Square', 'Almond'],
  tags: ['bestseller'],
  shape: 'Square',
  length: 'Medium',
};

const mockProductB: Product = {
  id: 'JUICEGELS-0002',
  groupId: 'juicegels_classicset',
  name: 'Classic Pink',
  price: 24.99,
  description: 'Handmade press-on nails',
  image: 'https://cdn.sanity.io/example1.jpg',
  extraImages: [],
  shapes: ['Square', 'Almond'],
  tags: ['bestseller'],
  shape: 'Almond',
  length: 'Long',
};

const mockCatalog: Product[] = [mockProductA, mockProductB];

describe('Basket & Token Serialization', () => {
  describe('encodeBasketToken & decodeBasketToken', () => {
    it('correctly serializes and deserializes token payload', () => {
      const payload: BasketTokenData = {
        products: 'JUICEGELS-0001:2,JUICEGELS-0002:1',
        coupon: 'DISCOUNT10',
        cartOrigin: 'instagram',
      };

      const encoded = encodeBasketToken(payload);
      expect(typeof encoded).toBe('string');
      expect(encoded.length).toBeGreaterThan(0);
      // Verify URL safety (no +, /, or = characters)
      expect(encoded).not.toMatch(/[+/=]/);

      const decoded = decodeBasketToken(encoded);
      expect(decoded).toEqual(payload);
    });

    it('returns null gracefully when decoding malformed strings', () => {
      expect(decodeBasketToken('invalid-base64-string!@#$')).toBeNull();
      expect(decodeBasketToken('')).toBeNull();
    });

    it('handles unicode strings without breaking', () => {
      const payload: BasketTokenData = {
        products: 'JUICEGELS-0001:1',
        coupon: 'SPRING_🌸',
      };
      const encoded = encodeBasketToken(payload);
      const decoded = decodeBasketToken(encoded);
      expect(decoded).toEqual(payload);
    });
  });

  describe('buildBasketUrl', () => {
    it('returns simple "/basket" route if cart is empty', () => {
      expect(buildBasketUrl([])).toBe('/basket');
    });

    it('encodes cart items into a query token', () => {
      const cartItems: CartItem[] = [
        { product: mockProductA, shape: 'Square', length: 'Medium', quantity: 2 },
      ];

      const url = buildBasketUrl(cartItems);
      expect(url.startsWith('/basket?b=')).toBe(true);
    });

    it('includes coupon and cart origin in the token payload when provided', () => {
      const cartItems: CartItem[] = [
        { product: mockProductA, shape: 'Square', length: 'Medium', quantity: 1 },
      ];

      const url = buildBasketUrl(cartItems, {
        coupon: 'WELCOME10',
        includeCoupon: true,
        cartOrigin: 'meta_shops',
      });

      const token = url.replace('/basket?b=', '');
      const decoded = decodeBasketToken(token);

      expect(decoded?.coupon).toBe('WELCOME10');
      expect(decoded?.cartOrigin).toBe('meta_shops');
      expect(decoded?.products).toBe('JUICEGELS-0001:1');
    });
  });

  describe('parseMetaBasketProductsParam', () => {
    it('parses valid ID and quantity pairs against catalog', () => {
      const raw = 'JUICEGELS-0001:2,JUICEGELS-0002:3';
      const items = parseMetaBasketProductsParam(raw, mockCatalog);

      expect(items).toHaveLength(2);
      expect(items[0].product.id).toBe('JUICEGELS-0001');
      expect(items[0].quantity).toBe(2);
      expect(items[1].product.id).toBe('JUICEGELS-0002');
      expect(items[1].quantity).toBe(3);
    });

    it('discards unknown product IDs from the catalog', () => {
      const raw = 'JUICEGELS-9999:1,JUICEGELS-0001:1';
      const items = parseMetaBasketProductsParam(raw, mockCatalog);

      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe('JUICEGELS-0001');
    });

    it('enforces a minimum quantity of 1 for negative or 0 values', () => {
      const raw = 'JUICEGELS-0001:0';
      const items = parseMetaBasketProductsParam(raw, mockCatalog);

      expect(items[0].quantity).toBe(1);
    });
  });

  describe('parseBasketItemsParam (legacy pipe format)', () => {
    it('correctly parses pipe-separated parameters', () => {
      const raw = 'JUICEGELS-0001|Square|Short|2';
      const items = parseBasketItemsParam(raw, mockCatalog);

      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe('JUICEGELS-0001');
      expect(items[0].shape).toBe('Square');
      expect(items[0].length).toBe('Short');
      expect(items[0].quantity).toBe(2);
    });
  });

  describe('parseTokenBasketParam', () => {
    it('extracts cart items, coupon, and cartOrigin from token', () => {
      const token = encodeBasketToken({
        products: 'JUICEGELS-0001:2',
        coupon: 'VIPGELS',
        cartOrigin: 'tiktok',
      });

      const parsed = parseTokenBasketParam(token, mockCatalog);

      expect(parsed.cartItems).toHaveLength(1);
      expect(parsed.cartItems[0].product.id).toBe('JUICEGELS-0001');
      expect(parsed.cartItems[0].quantity).toBe(2);
      expect(parsed.coupon).toBe('VIPGELS');
      expect(parsed.cartOrigin).toBe('tiktok');
    });

    it('returns empty cart when token is invalid', () => {
      const parsed = parseTokenBasketParam('invalid-token', mockCatalog);
      expect(parsed.cartItems).toEqual([]);
    });
  });

  describe('Halloween / Juice Ghouls Coupon & Drop', () => {
    it('recognizes Halloween & Juice Ghouls coupon IDs and codes via isHalloweenCoupon', () => {
      expect(STRIPE_HALLOWEEN_COUPON_ID).toBe('eU3xxIba');
      expect(STRIPE_HALLOWEEN_COUPON_TITLE).toBe('Halloween Sale 20% off');
      expect(isHalloweenCoupon('eU3xxIba')).toBe(true);
      expect(isHalloweenCoupon('EU3XXIBA')).toBe(true);
      expect(isHalloweenCoupon('halloween')).toBe(true);
      expect(isHalloweenCoupon('HALLOWEEN')).toBe(true);
      expect(isHalloweenCoupon('halloween20')).toBe(true);
      expect(isHalloweenCoupon('HALLOWEENSALE')).toBe(true);
      expect(isHalloweenCoupon('spooky')).toBe(true);
      expect(isHalloweenCoupon('juiceghouls')).toBe(true);
      expect(isHalloweenCoupon('JUICE GHOULS')).toBe(true);
      expect(isHalloweenCoupon('OTHER_COUPON')).toBe(false);
      expect(isHalloweenCoupon(null)).toBe(false);
      expect(isHalloweenCoupon(undefined)).toBe(false);

      expect(getCouponDisplayName('eU3xxIba')).toBe('Juice Ghouls (20% OFF)');
      expect(getCouponDisplayName('EU3XXIBA')).toBe('Juice Ghouls (20% OFF)');
      expect(getCouponDisplayName('halloween')).toBe('Juice Ghouls (20% OFF)');
      expect(getCouponDisplayName('juiceghouls')).toBe('Juice Ghouls (20% OFF)');
      expect(getCouponDisplayName('DEV_JUNJUN')).toBe('DEV_JUNJUN');
    });

    it('builds basket URL with Stripe Halloween coupon token', () => {
      const cartItem: CartItem = {
        product: mockProductA,
        shape: 'Square',
        length: 'Medium',
        quantity: 1,
      };

      const url = buildBasketUrl([cartItem], {
        coupon: STRIPE_HALLOWEEN_COUPON_ID,
        includeCoupon: true,
      });

      expect(url).toContain('/basket?b=');
      const token = url.replace('/basket?b=', '');
      const decoded = decodeBasketToken(token);
      expect(decoded?.coupon).toBe('eU3xxIba');
    });

    it('calculates 20% off accurately for Halloween sets', () => {
      const sets = [
        { name: 'Booquette', original: 15.0, expectedSale: 12.0 },
        { name: 'Scream Queen', original: 15.0, expectedSale: 12.0 },
        { name: 'Hello Horror', original: 15.5, expectedSale: 12.4 },
        { name: 'Boo Belle', original: 15.0, expectedSale: 12.0 },
        { name: 'Pink-o-ween', original: 15.0, expectedSale: 12.0 },
        { name: 'Sparkle Scream', original: 15.0, expectedSale: 12.0 },
        { name: 'Pearl Noir', original: 15.0, expectedSale: 12.0 },
        { name: 'Midnight Muse', original: 15.0, expectedSale: 12.0 },
      ];

      for (const set of sets) {
        const discountAmount = Math.round(set.original * 0.2 * 100) / 100;
        const discountedPrice = Math.round((set.original - discountAmount) * 100) / 100;
        expect(discountedPrice).toBeCloseTo(set.expectedSale, 2);
      }
    });

    it('dynamically pulls prices from Sanity and calculates proper sale prices for all sets', () => {
      // Mock Sanity products where Pearl Noir is £15 and Booquette is £16.50
      const mockSanityProducts: Product[] = [
        {
          id: 'JUICEGELS-0196',
          groupId: 'juicegels_pearlnoirset',
          name: 'Pearl Noir',
          price: 15.0,
          description: 'High-luxe obsidian black gel',
          image: 'https://cdn.sanity.io/pearl.jpg',
          extraImages: [],
          shapes: ['Almond'],
          tags: ['Halloween'],
          shape: 'Almond',
          length: 'Medium',
          collection: 'Juice Ghouls Collection'
        },
        {
          id: 'JUICEGELS-2447',
          groupId: 'juicegels_booquetteset',
          name: 'Booquette',
          price: 16.50,
          description: 'Cute ghost floral bouquet art',
          image: 'https://cdn.sanity.io/booquette.jpg',
          extraImages: [],
          shapes: ['Almond'],
          tags: ['Halloween'],
          shape: 'Almond',
          length: 'Medium',
          collection: 'Juice Ghouls Collection'
        }
      ];

      const resolved = resolveHalloweenSetsWithSanity(mockSanityProducts);

      // Pearl Noir must be pulled from Sanity at £15.00 with £12.00 sale price (20% off)
      const pearlNoir = resolved.find((s) => s.name === 'Pearl Noir');
      expect(pearlNoir).toBeDefined();
      expect(pearlNoir?.originalPrice).toBe(15.0);
      expect(pearlNoir?.discountedPrice).toBe(12.0);

      // Booquette must dynamically reflect the updated Sanity price (£16.50 -> 20% off = £13.20)
      const booquette = resolved.find((s) => s.name === 'Booquette');
      expect(booquette).toBeDefined();
      expect(booquette?.originalPrice).toBe(16.50);
      expect(booquette?.discountedPrice).toBe(13.20);

      // Other sets without custom mocks retain their catalog defaults
      const helloHorror = resolved.find((s) => s.name === 'Hello Horror');
      expect(helloHorror?.originalPrice).toBe(15.5);
      expect(helloHorror?.discountedPrice).toBe(12.4);
    });

    it('dynamically includes newly added sets with Juice Ghouls Collection on Halloween page at 20% off', () => {
      const mockSanityProducts: Product[] = [
        {
          id: 'JUICEGELS-9900',
          groupId: 'juicegels_spookyphantomset',
          name: 'Spooky Phantom',
          price: 20.00,
          description: 'Ethereal ghostly nails with glowing aura art',
          image: 'https://cdn.sanity.io/phantom.jpg',
          extraImages: [],
          shapes: ['Almond'],
          tags: ['Halloween'],
          shape: 'Almond',
          length: 'Medium',
          collection: 'Juice Ghouls Collection'
        }
      ];

      const resolved = resolveHalloweenSetsWithSanity(mockSanityProducts);

      expect(resolved.length).toBe(HALLOWEEN_SETS.length + 1);

      const phantom = resolved.find((s) => s.name === 'Spooky Phantom');
      expect(phantom).toBeDefined();
      expect(phantom?.originalPrice).toBe(20.00);
      expect(phantom?.discountedPrice).toBe(16.00); // 20% off £20.00 = £16.00
      expect(phantom?.category).toBe('spooky-cute');
      expect(phantom?.imageUrl).toBe('https://cdn.sanity.io/phantom.jpg');
    });

    it('accurately identifies Halloween variants and calculates per-product discount rather than whole basket', () => {
      const halloweenItem: CartItem = {
        product: {
          id: 'JUICEGELS-2452',
          groupId: 'juicegels_booquetteset',
          name: 'Booquette (Halloween Edition)',
          price: 15.0,
          description: '',
          image: '',
          extraImages: [],
          shapes: ['Almond'],
          shape: 'Almond',
          length: 'Medium',
          tags: ['Halloween', '20% OFF'],
          collection: 'Juice Ghouls Collection'
        },
        shape: 'Almond',
        length: 'Medium',
        quantity: 2
      };

      const regularItem: CartItem = {
        product: mockProductA, // £24.99
        shape: 'Square',
        length: 'Medium',
        quantity: 1
      };

      expect(isHalloweenProduct(halloweenItem.product)).toBe(true);
      expect(isHalloweenProduct(regularItem.product)).toBe(false);

      // Total discount should be applied ONLY per Halloween product:
      // 20% of £15.00 = £3.00 * 2 = £6.00 discount.
      // Regular item (£24.99) should NOT be discounted!
      const discount = calculateHalloweenDiscount([halloweenItem, regularItem]);
      expect(discount).toBe(6.0);
    });
  });
});
