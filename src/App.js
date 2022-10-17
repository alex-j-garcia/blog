import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './ThemeContext';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import './App.css';

export default function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Header />
        <Main />
      </ThemeContextProvider>
    </Router>
  );
}
