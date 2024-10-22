import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Edizione 2025',
      href: getPermalink('/#intro'),
    },
    {
      text: 'Docenti',
      href: getPermalink('/#docenti'),
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
    { text: 'Scarica il PDF', href: 'https://forms.gle/zD1s7GxFS88tBmXk9', target: '_blank' },
    { text: 'Candìdati', href: 'https://forms.gle/gMPq1WAKezoVYBZj8', target: '_blank' },
  ], 
};

export const footerData = {
  links: [
    
  ],
  secondaryLinks: [
    { text: 'IDA Fotografia', href: 'https://idafotografia.com', target: '_blank' },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/thesoulandthemachine' },
    { ariaLabel: 'E-mail', icon: 'tabler:mail', href: 'mailto:education@idafotografia.com'},
  ],
  footNote: `
    Un corso di <a href="https://giuliabianchi.com/" target="_blank" >Nausicaa Giulia Bianchi</a> per <a href="https://idafotografia.com/" target="_blank" >IDA</a>
  `,
}; 