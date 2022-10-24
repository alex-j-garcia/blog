import NavLink from '../NavLink/NavLink';
import './Menu.css';

export default function Menu() {
  const menuItems = PAGES.map((page, index) => (
    <li key={index} className='Menu-item'>
      <NavLink page={page} />
    </li>
  ));

  return (
    <nav className='Menu'>
      <ul>
        {menuItems}
      </ul>
    </nav>
  );
}

const PAGES = [
  {
    title: 'home',
    icon: 'home',
  },
  {
    title: 'blog',
    icon: 'bookmark',
  },
  {
    title: 'portfolio',
    icon: 'bookmark',
  },
  {
    title: 'snippets',
    icon: 'code',
  },
];
