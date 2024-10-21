import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About Me',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  {
    label:'Resume',
    pathname:'https://drive.google.com/file/d/1kYwMV7MjHKdAp85s1J4-Qzl4zt3DBdlz/view?usp=sharing'
  },
  // {
  //   label: 'Articles',
  //   pathname: '/articles',
  // }
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
