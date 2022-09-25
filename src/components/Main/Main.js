import React, {useContext} from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`${theme}-theme`}>
      <h1>This is main</h1>
      <Button theme={theme} handleClick={toggleTheme} />
    </main>
  );
}

function Button({ theme, handleClick }) {
  return (
    <button onClick={handleClick}>
      {
        theme === 'dark' ?
          <FontAwesomeIcon icon={faSun} /> :
          <FontAwesomeIcon icon={faMoon} />
      }
    </button>
  );
}

export default Main;