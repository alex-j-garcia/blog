import {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Blog from '../../pages/Blog';
import Portfolio from '../../pages/Portfolio';
import './Main.css';

export default function Main() {
  const {theme} = useContext(ThemeContext);

  return (
    <main className={`${theme}-theme`}>
      <div className='container'>
        <Header />

        <Switch>
          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>

          <Route path='/'>
            <About />
          </Route>
        </Switch>

        <Menu />
      </div>
    </main>
  );
}
