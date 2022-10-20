import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import 'remixicon/fonts/remixicon.css';

export default function Menu() {
  const {pathname} = useLocation();

  const menuConfig = [
    ['Home', 'home'],
    ['Blog', 'bookmark'],
    ['Portfolio', 'briefcase']
  ];

  const menuItems = menuConfig.map(([item, icon], index) => {
    const isCurrent = item === pathname.slice(1) || (pathname === '/' && item == 'Home');
    return (
      <li key={index} className='Menu-item'>
        <Link
          to={`/${item === 'Home' ? '' : item}`}
          className={isCurrent ? 'current' : null}
          aria-current={isCurrent ? 'page' : null}
        >
          <i className={`ri-${icon}-line`}></i>
          <span>{item}</span>
        </Link>
      </li>
    );
  });

  return (
    <nav className='Menu'>
      <ul>
        {menuItems}
      </ul>
    </nav>
  );
}
