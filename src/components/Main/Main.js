import React, {useContext} from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Main.css'

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
      {theme === 'dark' ?
        <i class="ri-sun-line"></i> :
        <i class="ri-moon-line"></i>
      }
    </button>
  );
}

export default Main;