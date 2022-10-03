import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu'
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio'
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
        </Routes>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
