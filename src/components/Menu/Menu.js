import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Menu(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Blog</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Portfolio</a>
        </li>
        <li>
          <a href='/'>Resume</a>
          <FontAwesomeIcon icon={faBriefcase} />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
