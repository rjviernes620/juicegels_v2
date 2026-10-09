import { describe, it, expect } from 'vitest';
import {
  buildShippingOptions,
  SHIPPING_FREE_THRESHOLD,
  getStripeShippingRateIds,
  getStripeFreeShippingPromoId,
} from '../app/utils/shopHelpers';

describe('Shipping Options & Calculations', () => {
  describe('UK Shipping (GB)', () => {
    it('charges standard tracked48 fee (£1.99) when below the £30 threshold', () => {
      const subtotal = 25.0;
      const options = buildShippingOptions(subtotal, 'GB', false);

      expect(options).toHaveLength(2);

      const tracked48 = options.find((opt) => opt.id === 'tracked48');
      expect(tracked48).toBeDefined();
      expect(tracked48?.amount).toBe(1.99);
      expect(tracked48?.isFree).toBe(false);

      const tracked24 = options.find((opt) => opt.id === 'tracked24');
      expect(tracked24).toBeDefined();
      expect(tracked24?.amount).toBe(4);
      expect(tracked24?.isFree).toBe(false);
    });

    it('grants free tracked48 shipping when subtotal is exactly at the £30 threshold', () => {
      const subtotal = SHIPPING_FREE_THRESHOLD; // 30
      const options = buildShippingOptions(subtotal, 'GB', false);

      const tracked48 = options.find((opt) => opt.id === 'tracked48');
      expect(tracked48).toBeDefined();
      expect(tracked48?.amount).toBe(0);
      expect(tracked48?.isFree).toBe(true);

      const tracked24 = options.find((opt) => opt.id === 'tracked24');
      expect(tracked24?.amount).toBe(4);
    });

    it('grants free tracked48 shipping when subtotal exceeds £30', () => {
      const subtotal = 55.0;
      const options = buildShippingOptions(subtotal, 'GB', false);

      const tracked48 = options.find((opt) => opt.id === 'tracked48');
      expect(tracked48?.amount).toBe(0);
      expect(tracked48?.isFree).toBe(true);
    });

    it('makes all UK shipping methods free when a free shipping promo is applied', () => {
      const subtotal = 15.0;
      const options = buildShippingOptions(subtotal, 'GB', true);

      const tracked48 = options.find((opt) => opt.id === 'tracked48');
      const tracked24 = options.find((opt) => opt.id === 'tracked24');

      expect(tracked48?.amount).toBe(0);
      expect(tracked48?.isFree).toBe(true);
      expect(tracked24?.amount).toBe(0);
      expect(tracked24?.isFree).toBe(true);
    });

    it('defaults to UK shipping rules if country is empty string', () => {
      const options = buildShippingOptions(10.0, '', false);
      expect(options.some((opt) => opt.id === 'tracked48')).toBe(true);
    });
  });

  describe('International Shipping', () => {
    it('provides standard international shipping rate (£9.50) for European destinations', () => {
      const options = buildShippingOptions(20.0, 'FR', false);

      expect(options).toHaveLength(1);
      const international = options[0];
      expect(international.id).toBe('international');
      expect(international.amount).toBe(9.5);
      expect(international.isFree).toBe(false);
      expect(international.estimate).toContain('3-5 business days');
    });

    it('provides international shipping with longer delivery estimate for non-European destinations', () => {
      const options = buildShippingOptions(20.0, 'US', false);

      expect(options).toHaveLength(1);
      const international = options[0];
      expect(international.id).toBe('international');
      expect(international.amount).toBe(9.5);
      expect(international.isFree).toBe(false);
      expect(international.estimate).toContain('6-7 business days');
    });

    it('makes international shipping free when free shipping promo is applied', () => {
      const options = buildShippingOptions(20.0, 'US', true);

      expect(options[0].amount).toBe(0);
      expect(options[0].isFree).toBe(true);
    });
  });

  describe('Stripe Rate ID Resolution', () => {
    it('uses test-mode Stripe rate IDs when key begins with pk_test', () => {
      const testRates = getStripeShippingRateIds('pk_test_sample_key');
      expect(testRates.tracked24).toBe('shr_1TjOFhK9S4gHGvxwGcIJ8ICh');
      expect(testRates.tracked48).toBe('shr_1TjOJVK9S4gHGvxRClQMfr1');
      expect(testRates.international).toBe('shr_1TlIyvK9S4gHGvxwwsl3tfgS');
    });

    it('uses live-mode Stripe rate IDs when key begins with pk_live', () => {
      const liveRates = getStripeShippingRateIds('pk_live_sample_key');
      expect(liveRates.tracked24).toBe('shr_1Ti0hyK4CROOpWXUhiIhLqWy');
      expect(liveRates.tracked48).toBe('shr_1Ti0ieK4CROOpWXU5Cbop3Ii');
      expect(liveRates.international).toBe('shr_1To72LK4CROOpWXUQ4DKmzFE');
    });

    it('returns promo ID in test mode', () => {
      const testPromo = getStripeFreeShippingPromoId('pk_test_sample_key');
      expect(testPromo).toBeTruthy();
    });
  });
});
