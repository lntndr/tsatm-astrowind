import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Edizione 2025',
      href: getPermalink('/#intro'),
    },
    {
      text: 'Docenti',
      href: getPermalink('/#insegnanti'),
    },
    {
      text: 'Recensioni',
      href: getPermalink('/#recensioni'),
    },
        /*
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
      ],
    },
    */
  ],
  actions: [
    { text: 'Scarica il PDF', href: 'https://github.com/onwidget/astrowind', target: '_blank' },
    { text: 'Candìdati', href: 'https://github.com/onwidget/astrowind', target: '_blank' },
  ], 
};

export const footerData = {
  links: [
  
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <!-- Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved. -->
    Un corso di Nausicaa Giulia Bianchi per IDA ETS
  `,
};