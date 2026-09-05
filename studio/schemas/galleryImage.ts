import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used as the alt text / caption shown in the lightbox.',
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
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Massage, Facial, Wellness, Results, Exercise',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      initialValue: 'wellness',
      options: {
        list: [
          { title: 'Wellness & Beauty', value: 'wellness' },
          { title: 'Inch by Inch', value: 'inch' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
      section: 'section',
      media: 'image',
    },
    prepare({ title, section }) {
      return {
        title,
        subtitle: section === 'inch' ? 'Inch by Inch' : 'Wellness & Beauty',
      }
    },
  },
  validation: (Rule) =>
    Rule.custom((doc: Record<string, unknown>) => {
      if (!doc) return true
      if (doc.image || doc.imageUrl) return true
      return 'Please provide either an uploaded image or an external image URL.'
    }),
})
