import { Link } from 'react-router-dom';
import './Menu.css';
import 'remixicon/fonts/remixicon.css';

export default function Menu() {
  const menuConfig = [
    ['Home', 'home'],
    ['Blog', 'bookmark'],
    ['Portfolio', 'briefcase']
  ];

  const menuItems = menuConfig.map((menuItem, index) => {
    const [item, icon] = menuItem;

    return (
      <li key={index} className='Menu-item'>
        <Link to={`/${item === 'home' ? '' : item}`}>
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
