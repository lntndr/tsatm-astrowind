import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Edizione 2026',
      shortText: 'Ed. 2026',
      href: getPermalink('/#edizione-2026'),
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
    { text: "Lista d'attesa", href: 'https://forms.gle/pi8jvxY1SbRXRFURA', target: '_blank' },
    { text: 'Scarica il PDF', shortText: 'PDF', href: 'https://forms.gle/1iC8wvqYNbffmzJr5', target: '_blank' },
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
  photoCredits: [
    { text: 'Nicolae Barizza' },
    { text: 'Elena Prola' },
    { text: 'Fabio Solfanelli' },
    { text: 'Elisa Mercadante' },
    { text: 'Barbara Malacart' },
    { text: 'Patrizia Pratesi' },
    { text: 'Sergio Ferri' },
    { text: 'Elena Indoitu' },
    { text: 'Valeria Bitonto' },
    { text: 'Simona Ramponi' },
    { text: 'Serafina Figliuzzi' },
    { text: 'Nicla Sisto' },
    { text: 'Kristina Babusci' },
    { text: 'Nicoletta Deva Tortone' },
    { text: 'Jacopo Casolai' },
    { text: 'Zoe Ferrara' },
    { text: 'Palmira Benetti' },
    { text: 'Elena Prola' },
    { text: 'Michael Bertolasi' },
  ],
  footNote: `
    Un corso di <a href="https://giuliabianchi.com/" target="_blank" >Nausicaa Giulia Bianchi</a> per <a href="https://idafotografia.com/" target="_blank" >IDA</a>
  `,
};
