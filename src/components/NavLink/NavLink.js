import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

export default function NavLink({ page }) {
  const { pathname } = useLocation();
  const { title, icon } = page;
  const isCurrent = isCurrentPage(title, pathname);

  return (
    <Link
      to={getPath(title)}
      className={isCurrent ? 'current' : null}
      aria-current={isCurrent ? 'page' : null}
    >
      <i className={`ri-${icon}-line`}></i>
      <span>{title}</span>
    </Link>
  );
}

function isCurrentPage(page, pathname) {
  if (pathname === '/' && page === 'home') {
    return true;
  }

  if (pathname.slice(1) === page) {
    return true;
  }

  return false;
}

function getPath(page) {
  return page === 'home' ? '/' : `/${page}`;
}
