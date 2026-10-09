import { describe, it, expect } from 'vitest';
import {
  formatMoney,
  isVariationLocked,
  getProductShapes,
  getProductLengths,
  getOrderSummaryLabel,
  getCartItemDetailText,
  getCollectionDetails,
  getCollectionStyle,
} from '../app/utils/shopHelpers';
import { type Product } from '../app/utils/parseProducts';
import { type CartItem } from '../app/types';

describe('Product & Shop Helpers', () => {
  const standardProduct: Product = {
    id: 'JUICEGELS-0100',
    groupId: 'juicegels_cherryset',
    name: 'Cherry Blossom Set',
    price: 28.5,
    description: 'Delicate floral nails',
    image: 'https://cdn.sanity.io/cherry.jpg',
    extraImages: [],
    shapes: ['Almond', 'Coffin'],
    tags: ['floral', 'spring'],
    shape: 'Almond',
    length: 'Medium',
    collection: 'Bloom Collection',
  };

  const sizingGuideProduct: Product = {
    id: 'JUICEGELS-0286',
    groupId: 'juicegels_nailsizingguide',
    name: 'Nail Sizing Guide',
    price: 3.5,
    description: 'Find your exact press-on sizes',
    image: 'https://cdn.sanity.io/guide.jpg',
    extraImages: [],
    shapes: ['Square'],
    tags: ['guide'],
    shape: 'Square',
    length: 'Short',
  };

  describe('formatMoney', () => {
    it('formats numerical currency values with British Pound symbol and 2 decimals', () => {
      expect(formatMoney(0)).toBe('£0.00');
      expect(formatMoney(25)).toBe('£25.00');
      expect(formatMoney(19.99)).toBe('£19.99');
      expect(formatMoney(3.5)).toBe('£3.50');
    });
  });

  describe('isVariationLocked', () => {
    it('returns true for locked products (e.g., Sizing Guide JUICEGELS-0286)', () => {
      expect(isVariationLocked(sizingGuideProduct)).toBe(true);
    });

    it('returns false for customizable nail sets', () => {
      expect(isVariationLocked(standardProduct)).toBe(false);
    });
  });

  describe('getProductShapes & getProductLengths', () => {
    it('retrieves product specific shapes if present', () => {
      expect(getProductShapes(standardProduct)).toEqual(['Almond', 'Coffin']);
    });

    it('falls back to default shapes if empty or missing', () => {
      const productWithoutShapes = { ...standardProduct, shapes: [] };
      expect(getProductShapes(productWithoutShapes)).toEqual([
        'Short Almond',
        'Medium Almond',
        'Long Almond',
      ]);
    });

    it('retrieves valid lengths', () => {
      expect(getProductLengths(standardProduct)).toEqual(['Short', 'Medium', 'Long']);
    });
  });

  describe('Cart Item Summary Formatting', () => {
    it('formats summary labels differently for sizing guide vs customizable nail sets', () => {
      const nailSetItem: CartItem = {
        product: standardProduct,
        shape: 'Almond',
        length: 'Medium',
        quantity: 2,
      };

      const sizingItem: CartItem = {
        product: sizingGuideProduct,
        shape: 'Square',
        length: 'Short',
        quantity: 1,
      };

      expect(getOrderSummaryLabel(nailSetItem)).toBe(
        'Cherry Blossom Set (Almond · Medium) ×2'
      );
      expect(getOrderSummaryLabel(sizingItem)).toBe('Nail Sizing Guide ×1');

      expect(getCartItemDetailText(nailSetItem)).toBe('Almond · Medium · ×2 · £57.00');
      expect(getCartItemDetailText(sizingItem)).toBe('×1 · £3.50');
    });
  });

  describe('Collections Resolution & Styling', () => {
    const companionProduct: Product = {
      id: 'JUICEGELS-0115',
      groupId: 'juicegels_daisyset',
      name: 'Daisy Meadow Set',
      price: 26.0,
      description: 'Daisy flower details',
      image: 'https://cdn.sanity.io/daisy.jpg',
      extraImages: [],
      shapes: ['Almond'],
      tags: ['floral'],
      shape: 'Almond',
      length: 'Short',
      collection: 'Bloom Collection',
    };

    const unrelatedProduct: Product = {
      id: 'JUICEGELS-0200',
      groupId: 'juicegels_gothset',
      name: 'Dark Star Set',
      price: 30.0,
      description: 'Gothic black nails',
      image: 'https://cdn.sanity.io/star.jpg',
      extraImages: [],
      shapes: ['Stiletto'],
      tags: ['goth'],
      shape: 'Stiletto',
      length: 'Long',
      collection: 'Stardust Collection',
    };

    it('identifies companion products in the same collection while excluding current group', () => {
      const allProducts = [standardProduct, companionProduct, unrelatedProduct];
      const details = getCollectionDetails(standardProduct, allProducts);

      expect(details).not.toBeNull();
      expect(details?.name).toBe('Bloom Collection');
      expect(details?.tagline).toContain('freshness of spring flowers');
      expect(details?.otherProducts).toHaveLength(1);
      expect(details?.otherProducts[0].groupId).toBe('juicegels_daisyset');
    });

    it('returns null if product does not belong to any collection', () => {
      const details = getCollectionDetails(sizingGuideProduct, [standardProduct]);
      expect(details).toBeNull();
    });

    it('returns theme colors and emoji for known collections', () => {
      const bloomStyle = getCollectionStyle('Bloom Collection');
      expect(bloomStyle.emoji).toBe('🌸');
      expect(bloomStyle.cardGradient).toContain('#db2777');

      const kamadoStyle = getCollectionStyle('Kamado Collection');
      expect(kamadoStyle.emoji).toBe('🌿');

      const stargirlStyle = getCollectionStyle('Stargirl Collection');
      expect(stargirlStyle.emoji).toBe('✨');

      const stardustStyle = getCollectionStyle('Stardust Collection');
      expect(stardustStyle.emoji).toBe('🎀');

      const mysteryStyle = getCollectionStyle('Sweet Mystery Collection');
      expect(mysteryStyle.emoji).toBe('🍬');

      const defaultStyle = getCollectionStyle('Unknown Collection');
      expect(defaultStyle.cardGradient).toBeDefined();
    });
  });
});
