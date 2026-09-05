import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About Us' },
    { name: 'contact', title: 'Contact' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    }),
    // --- HERO ---
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image (URL)',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'bookingButtonText',
      title: 'Booking Button Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroEyebrow',
      title: 'Inch Hero Eyebrow Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroTitle',
      title: 'Inch Hero Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroSubtitle',
      title: 'Inch Hero Subtitle',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroDescription',
      title: 'Inch Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroButtonText',
      title: 'Inch Hero Button Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'inchHeroBackgroundImage',
      title: 'Inch Hero Background Image (URL)',
      type: 'url',
      group: 'hero',
    }),
    // --- ABOUT (Wellness) ---
    defineField({
      name: 'aboutEyebrow',
      title: 'About Eyebrow Label',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutParagraph1',
      title: 'About Paragraph 1',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutParagraph2',
      title: 'About Paragraph 2',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutParagraph3',
      title: 'About Paragraph 3',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutImage1',
      title: 'About Image 1 (URL)',
      type: 'url',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage2',
      title: 'About Image 2 (URL)',
      type: 'url',
      group: 'about',
    }),
    defineField({
      name: 'featuresEyebrow',
      title: 'Features Eyebrow Label',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Leaf', value: 'leaf' },
                  { title: 'Heart', value: 'heart' },
                  { title: 'Award', value: 'award' },
                  { title: 'Users', value: 'users' },
                ],
              },
            },
          ],
        },
      ],
      group: 'about',
    }),
    // --- ABOUT (Inch) ---
    defineField({
      name: 'inchAboutEyebrow',
      title: 'Inch About Eyebrow Label',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'inchAboutTitle',
      title: 'Inch About Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'inchAboutParagraph1',
      title: 'Inch About Paragraph 1',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'inchAboutParagraph2',
      title: 'Inch About Paragraph 2',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'inchAboutParagraph3',
      title: 'Inch About Paragraph 3',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'inchAboutImage1',
      title: 'Inch About Image 1 (URL)',
      type: 'url',
      group: 'about',
    }),
    defineField({
      name: 'inchAboutImage2',
      title: 'Inch About Image 2 (URL)',
      type: 'url',
      group: 'about',
    }),
    defineField({
      name: 'inchBenefitsEyebrow',
      title: 'Benefits Eyebrow Label',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'inchBenefitsTitle',
      title: 'Benefits Title',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'inchBenefits',
      title: 'Inch by Inch Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'items',
              title: 'Benefits',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
      group: 'about',
    }),
    // --- CONTACT ---
    defineField({
      name: 'contactEyebrow',
      title: 'Contact Eyebrow Label',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
      rows: 3,
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'contact',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Map Embed URL',
      type: 'url',
      group: 'contact',
    }),
    // --- FOOTER ---
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
      group: 'footer',
    }),
  ],
})
