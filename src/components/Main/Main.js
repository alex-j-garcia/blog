import { Switch, Route } from 'react-router-dom';
import useThemeContext from '../common/hooks/useThemeContext';
import Header from '../Header';
import Menu from '../Menu';
import About from '../About';
import Snippets from '../Snippets';
import NotFound from '../NotFound';
import Blog from '../Blog';
import Portfolio from '../Portfolio';
import './Main.css';

export default function Main() {
  const { theme } = useThemeContext();

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
