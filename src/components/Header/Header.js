import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Button from '../Button';
import DarkThemeIcon from './components/DarkThemeIcon';
import LightThemeIcon from './components/LightThemeIcon';
import './Header.css'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <Button onClick={toggleTheme}>
        {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
      </Button>
    </header>
  );
}
