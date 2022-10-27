import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className='NotFound'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! That page doesn't exist. You may have been looking for:</p>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </section>
  );
}