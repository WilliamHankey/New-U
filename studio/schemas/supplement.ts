import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'supplement',
  title: 'Supplement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. R 450 or From $25',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'inStock',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Coming Soon', value: 'comingSoon' },
          { title: 'Out of Stock', value: 'outOfStock' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (External)',
      type: 'url',
      description:
        'If you prefer to use an external image URL instead of uploading, provide it here.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key benefits of this supplement, shown as a bullet list.',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || 'Supplement',
        media,
      }
    },
  },
})