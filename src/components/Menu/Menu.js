import NavLink from '../NavLink/NavLink';
import './Menu.css';
import 'remixicon/fonts/remixicon.css';

export default function Menu() {
  const menuItems = PAGES.map(({page, icon}, index) => (
    <li key={index} className='Menu-item'>
      <NavLink page={page}>
        <i className={`ri-${icon}-line`}></i>
        <span>{page}</span>
      </NavLink>
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
    page: 'home',
    icon: 'home',
  },
  {
    page: 'blog',
    icon: 'bookmark',
  },
  {
    page: 'portfolio',
    icon: 'bookmark',
  },
  {
    page: 'snippets',
    icon: 'code',
  },
];
