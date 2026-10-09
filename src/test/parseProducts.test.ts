import { describe, it, expect } from 'vitest';
import {
  parseSanityProducts,
  buildSanityImageUrl,
} from '../app/utils/parseProducts';

describe('Sanity Product Parser', () => {
  describe('buildSanityImageUrl', () => {
    it('constructs Sanity CDN URL from standard image ref', () => {
      const ref = 'image-abc123456-800x600-png';
      const url = buildSanityImageUrl(ref);
      expect(url).toContain('https://cdn.sanity.io/images/');
      expect(url).toContain('abc123456-800x600.png');
    });

    it('returns empty string if ref is empty or malformed', () => {
      expect(buildSanityImageUrl('')).toBe('');
      expect(buildSanityImageUrl('malformed-ref')).toBe('');
    });

    it('applies crop and focal point parameters when crop and target dims are passed', () => {
      const ref = 'image-abc123456-1000x1000-jpg';
      const crop = { top: 0.1, bottom: 0.1, left: 0.1, right: 0.1 };
      const hotspot = { x: 0.5, y: 0.5 };
      const url = buildSanityImageUrl(ref, hotspot, crop, 400, 320);

      expect(url).toContain('w=400');
      expect(url).toContain('h=320');
      expect(url).toContain('fit=crop');
      expect(url).toContain('rect=');
    });
  });

  describe('parseSanityProducts', () => {
    it('parses standard nail set and automatically expands 15 variants (5 shapes × 3 lengths)', () => {
      const rawSanity = [
        {
          _id: 'prod-1',
          title: 'Lavender Dream',
          productId: 100,
          price: '25.00',
          image: {
            asset: { _ref: 'image-lavender-600x600-jpg' },
          },
          tags: ['cute', 'purple'],
          collection: 'Bloom Collection',
        },
      ];

      const parsed = parseSanityProducts(rawSanity);

      // 5 default shapes * 3 default lengths = 15 variants
      expect(parsed).toHaveLength(15);

      // All variants share same groupId and base title
      expect(parsed[0].groupId).toBe('juicegels_lavenderdreamset');
      expect(parsed[0].name).toBe('Lavender Dream');
      expect(parsed[0].price).toBe(25);
      expect(parsed[0].tags).toEqual(['cute', 'purple']);
      expect(parsed[0].collection).toBe('Bloom Collection');

      // Verify all 5 shapes are covered
      const shapes = new Set(parsed.map((p) => p.shape));
      expect(shapes).toEqual(new Set(['Square', 'Oval', 'Stiletto', 'Coffin', 'Almond']));

      // Verify all 3 lengths are covered
      const lengths = new Set(parsed.map((p) => p.length));
      expect(lengths).toEqual(new Set(['Short', 'Medium', 'Long']));

      // First variant ID is JUICEGELS-0100
      expect(parsed[0].id).toBe('JUICEGELS-0100');
      // Last variant ID is JUICEGELS-0114 (100 + 14)
      expect(parsed[14].id).toBe('JUICEGELS-0114');
    });

    it('treats "Nail Sizing Guide" as a single product without generating 15 variants', () => {
      const rawGuide = [
        {
          _id: 'guide-1',
          title: 'Nail Sizing Guide',
          productId: 286,
          price: 3.5,
          image: {
            asset: { _ref: 'image-guide-400x400-jpg' },
          },
        },
      ];

      const parsed = parseSanityProducts(rawGuide);

      expect(parsed).toHaveLength(1);
      expect(parsed[0].id).toBe('JUICEGELS-0286');
      expect(parsed[0].groupId).toBe('juicegels_nailsizingguide');
      expect(parsed[0].name).toBe('Nail Sizing Guide');
      expect(parsed[0].price).toBe(3.5);
    });

    it('handles rich text PortableText description blocks', () => {
      const rawWithBlocks = [
        {
          _id: 'prod-blocks',
          title: 'Starry Sky',
          productId: 300,
          price: 30,
          description: [
            {
              _type: 'block',
              children: [
                { text: 'First paragraph with detail.' },
                { text: ' Continued text.' },
              ],
            },
          ],
        },
      ];

      const parsed = parseSanityProducts(rawWithBlocks);
      expect(parsed[0].description).toBe('First paragraph with detail. Continued text.');
    });
  });
});
