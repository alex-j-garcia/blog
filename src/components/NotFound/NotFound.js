import LinksList from '../common/components/LinksList';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className='NotFound'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! That page doesn't exist. You may have been looking for:</p>
      <LinksList list={PAGES} />
    </section>
  );
}

const PAGES = [
  {
    title: 'Home',
    urlOrPath: '/',
  },
  {
    title: 'Portfolio',
    urlOrPath: '/portfolio',
  },
  {
    title: 'Blog',
    urlOrPath: '/blog',
  },
  {
    title: 'Snippets',
    urlOrPath: '/snippets',
  },
];
