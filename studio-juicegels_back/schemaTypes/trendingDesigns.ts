export default {
  name: 'trendingDesigns',
  type: 'document',
  title: 'Trending Designs',
  fields: [
    {
      name: 'products',
      type: 'array',
      title: 'Trending Nail Sets',
      description:
        'Pick up to 5 nail sets to feature in the "Trending Designs" section on the home page. Drag to reorder.',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
      validation: (Rule: any) => Rule.max(5).unique(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Trending Designs',
        subtitle: 'Home page featured nail sets',
      }
    },
  },
}
