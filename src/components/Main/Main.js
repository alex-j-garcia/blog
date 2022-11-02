import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import Header from '../Header';
import Menu from '../Menu';
import About from '../About';
import Snippets from '../Snippets';
import NotFound from '../NotFound';
import Blog from '../../pages/Blog';
import Portfolio from '../../pages/Portfolio';
import './Main.css';

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme}-theme`}>
      <div className='container'>
        <Header />

        <Switch>
          <Route exact path='/'>
            <About />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/portfolio'>
            <Portfolio />
          </Route>

          <Route path='/snippets'>
            <Snippets />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Menu />
    </main>
  );
}
