import {useState, createContext} from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({children}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export {
  ThemeContextProvider,
  ThemeContext,
};
