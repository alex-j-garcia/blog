import React, {useContext} from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Header.css'

export default function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className={`${theme}-theme`}>
      <Button theme={theme} handleClick={toggleTheme} />
    </header>
  );
}

function Button({ theme, handleClick }) {
  return (
    <button onClick={handleClick}>
      {theme === 'dark' ?
        <i className="ri-sun-line"></i> :
        <i className="ri-moon-line"></i>
      }
    </button>
  );
}
