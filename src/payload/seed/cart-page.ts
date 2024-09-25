import type { Page } from '../payload-types'

export const cartPage: Partial<Page> = {
  title: 'Cart',
  slug: 'cart',
  _status: 'published',
  meta: {
    title: 'Cart',
    description:
      'ستزامن عربتك مع ملفك الشخصي لكي تتمكن من مواصلة التسوق من أي جهاز.',
  },
  hero: {
    type: 'lowImpact',
    links: [],
    media: '',
    richText: [
      {
        type: 'h1',
        children: [
          {
            text: 'عربة التسوق',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'هذه العربة تُحفظ في التخزين المحلي لكي تتمكن من مواصلة التسوق لاحقاً. بمجرد أن تُصادق مع Payload، ستزامن عربتك مع ملفك الشخصي لكي تتمكن من مواصلة التسوق من أي جهاز. هذا البطل والمحتوى أسفل العربة كلهما ديناميكيان تماماً و',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'مُتاحاً في لوحة التحكم الإدارية',
              },
            ],
          },
        ],
      },
    ],
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          link: {
            type: 'reference',
            url: '',
            reference: null,
            label: '',
          },
          richText: [
            {
              children: [
                {
                  text: 'هذا هو كتلة بناء تصميم مخصصة قابلة للتكوين في نظام إدارة المحتوى—هذا يمكن أن يكون أي شيء تريد. منتجات متعلقة أو مقترحة، منشور في المدونة، فيديو، الخ.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      richText: [
        {
          children: [
            {
              text: 'Continue shopping',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'هذا هو كتلة بناء تصميم مخصصة ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'مُتاحاً في لوحة التحكم الإدارية',
                },
              ],
            },
            {
              text: '.',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'reference',
            url: '',
            reference: {
              relationTo: 'pages',
              value: '{{PRODUCTS_PAGE_ID}}',
            },
            label: 'متابعة التسوق',
            appearance: 'primary',
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
