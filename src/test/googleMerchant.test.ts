import { describe, it, expect } from 'vitest';
import { formatGoogleMerchantImageUrl } from '../../functions/src/routes/googleMerchant';

describe('Google Merchant Center Image Dimensions (500px x 500px)', () => {
  it('formats standard Sanity CDN image to 500px x 500px with fit=crop', () => {
    const rawUrl = 'https://cdn.sanity.io/images/5co5ooqr/production/6298dd5f72cfd4dffd80434806d494be3e9ccac2-1080x1080.jpg';
    const formatted = formatGoogleMerchantImageUrl(rawUrl);

    const url = new URL(formatted);
    expect(url.origin).toBe('https://cdn.sanity.io');
    expect(url.searchParams.get('w')).toBe('500');
    expect(url.searchParams.get('h')).toBe('500');
    expect(url.searchParams.get('fit')).toBe('crop');
  });

  it('updates existing query parameters to force 500px x 500px', () => {
    const rawUrl = 'https://cdn.sanity.io/images/5co5ooqr/production/d1a069b629dd8fab238d070dca546041df10090b-2798x2798.jpg?w=1600&h=1600&fit=max';
    const formatted = formatGoogleMerchantImageUrl(rawUrl);

    const url = new URL(formatted);
    expect(url.searchParams.get('w')).toBe('500');
    expect(url.searchParams.get('h')).toBe('500');
    expect(url.searchParams.get('fit')).toBe('crop');
  });

  it('applies hotspot focal point when hotspot metadata is provided', () => {
    const rawUrl = 'https://cdn.sanity.io/images/5co5ooqr/production/d1a069b629dd8fab238d070dca546041df10090b-1000x1000.jpg';
    const imageObj = {
      hotspot: { x: 0.65, y: 0.45 }
    };
    const formatted = formatGoogleMerchantImageUrl(rawUrl, imageObj);

    const url = new URL(formatted);
    expect(url.searchParams.get('w')).toBe('500');
    expect(url.searchParams.get('h')).toBe('500');
    expect(url.searchParams.get('fit')).toBe('crop');
    expect(url.searchParams.get('crop')).toBe('focalpoint');
    expect(url.searchParams.get('fp-x')).toBe('0.6500');
    expect(url.searchParams.get('fp-y')).toBe('0.4500');
  });

  it('applies crop rect when crop metadata is provided', () => {
    const rawUrl = 'https://cdn.sanity.io/images/5co5ooqr/production/d1a069b629dd8fab238d070dca546041df10090b-1000x1000.jpg';
    const imageObj = {
      crop: { top: 0.1, bottom: 0.1, left: 0.05, right: 0.05 }
    };
    const formatted = formatGoogleMerchantImageUrl(rawUrl, imageObj);

    const url = new URL(formatted);
    expect(url.searchParams.get('w')).toBe('500');
    expect(url.searchParams.get('h')).toBe('500');
    expect(url.searchParams.get('fit')).toBe('crop');
    expect(url.searchParams.get('rect')).toBe('50,100,900,800');
  });

  it('preserves non-Sanity fallback images intact without breaking', () => {
    const fallbackUrl = 'https://juicegels.com/images/Nail 2.jpeg';
    const formatted = formatGoogleMerchantImageUrl(fallbackUrl);
    expect(formatted).toBe('https://juicegels.com/images/Nail 2.jpeg');
  });

  it('handles empty or undefined URLs gracefully', () => {
    expect(formatGoogleMerchantImageUrl('')).toBe('');
    expect(formatGoogleMerchantImageUrl(undefined)).toBe('');
  });
});
