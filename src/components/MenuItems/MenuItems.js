import NavLink from '../NavLink/NavLink';

export default function MenuItems() {
  return (
    <ul>
      {PAGES.map((page, index) => (
        <li key={index} className='Menu-item'>
          <NavLink page={page} />
        </li>
      ))}
    </ul>
  );
}

const PAGES = [
  {
    title: 'home',
    icon: 'home',
  },
  {
    title: 'portfolio',
    icon: 'briefcase',
  },
  {
    title: 'blog',
    icon: 'bookmark',
  },
  {
    title: 'snippets',
    icon: 'code',
  },
];
