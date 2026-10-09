import { describe, it, expect } from 'vitest';
import {
  encodeBasketToken,
  decodeBasketToken,
  buildBasketUrl,
  parseTokenBasketParam,
  parseMetaBasketProductsParam,
  parseBasketItemsParam,
  type BasketTokenData,
} from '../app/utils/shopHelpers';
import { type Product } from '../app/utils/parseProducts';
import { type CartItem } from '../app/types';

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
});
