import NavLink from '../../NavLink/NavLink';

export default function MenuItems() {
  return (
    <ul>
      {PAGES.map((page, index) => (
        <li key={index}>
          <NavLink page={page} />
        </li>
      ))}
    </ul>
  );
}

const PAGES = [
  {
    title: 'home',
    urlOrPath: '/',
    icon: 'home',
  },
  {
    title: 'portfolio',
    urlOrPath: '/portfolio',
    icon: 'briefcase',
  },
  {
    title: 'blog',
    urlOrPath: '/blog',
    icon: 'bookmark',
  },
  {
    title: 'snippets',
    urlOrPath: '/snippets',
    icon: 'code',
  },
];
