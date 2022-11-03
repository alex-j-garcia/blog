import HomeIcon from './components/HomeIcon';
import PortfolioIcon from './components/PortfolioIcon';
import BlogIcon from './components/BlogIcon';
import SnippetsIcon from './components/SnippetsIcon';
import LinksList from '../common/components/LinksList';
import './Menu.css';

export default function Menu() {
  return (
    <nav className='Menu'>
      <LinksList list={PAGES} isExternal={false} />
    </nav>
  );
}

const PAGES = [
  {
    title: 'home',
    urlOrPath: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'portfolio',
    urlOrPath: '/portfolio',
    icon: <PortfolioIcon />,
  },
  {
    title: 'blog',
    urlOrPath: '/blog',
    icon: <BlogIcon />,
  },
  {
    title: 'snippets',
    urlOrPath: '/snippets',
    icon: <SnippetsIcon />,
  },
];
