import React from 'react';
import './Menu.css'
import 'remixicon/fonts/remixicon.css';

function Menu(props) {
  const menuConfig = [
    ['Home', 'home'],
    ['Blog', 'bookmark'],
    ['Portfolio', 'briefcase']
  ];
  const menuItems = menuConfig.map(([item, icon]) => (
    <li className="Menu-item">
      <div className="Menu-item-container">
        <i class={`ri-${icon}-line`}></i>
        <a href='/'>{item}</a>
      </div>
    </li>
  ));

  return (
    <nav className="Menu">
      <ul>
        {menuItems}
        {/* <li className="Menu-item">
          <i class="ri-home-line"></i>
          <a href='/'>Home</a>
        </li>
        <li>
          <i class="ri-bookmark-line"></i>
          <a href='/'>Blog</a>
        </li>
        <li>
          <i class="ri-briefcase-line"></i>
          <a href='/'>Portfolio</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Menu;
