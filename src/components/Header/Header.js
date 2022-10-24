import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Button from '../Button/Button'
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <Button onClick={toggleTheme}>
        {theme === 'dark' ?
          <i className='ri-sun-line'></i> :
          <i className='ri-moon-line'></i>
        }
      </Button>
    </header>
  );
}
