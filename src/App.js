import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './ThemeContext';
import Main from './components/Main/Main';
import './App.css';

export default function App() {
  return (
    <Router>
      <ThemeContextProvider>
          <Main />
      </ThemeContextProvider>
    </Router>
  );
}
