import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
