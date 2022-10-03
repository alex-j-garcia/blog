import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu'
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Main />
      <Menu />
    </ThemeContextProvider>
  );
}

export default App;
