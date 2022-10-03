import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './Menu.css';
import 'remixicon/fonts/remixicon.css';

function Menu() {
  const menuConfig = [
    ['home', 'home'],
    ['blog', 'bookmark'],
    ['portfolio', 'briefcase']
  ];
  const menuItems = menuConfig.map(([item, icon]) => (
    <li className="Menu-item">
      <div className="Menu-item-container">
        <i class={`ri-${icon}-line`}></i>
        <Link to={`/${item === 'home' ? '' : item}`}>{item}</Link>
      </div>
    </li>
  ));

  return (
    <nav className="Menu">
      <ul>
        {menuItems}
      </ul>
    </nav>
  );
}

export default Menu;
