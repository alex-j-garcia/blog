import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Blog from '../../pages/Blog';
import Portfolio from '../../pages/Portfolio';
import Snippets from '../Snippets/Snippets';
import NotFound from '../NotFound/NotFound';
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

        <Menu />
      </div>
    </main>
  );
}
