import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu'
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio'
import { ThemeContextProvider } from './ThemeContext';

export default function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Menu />
        <Switch>
          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </ThemeContextProvider>
    </Router>
  );
}
