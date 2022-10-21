import {Link, useLocation} from 'react-router-dom';

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

export default function NavLink({page, children}) {
  const {pathname} = useLocation();
  const isCurrent = isCurrentPage(page, pathname);

  if (isCurrent) {
    return <CurrentLink page={page}>{children}</CurrentLink>
  }

  return <IdleLink page={page}>{children}</IdleLink>
}

function CurrentLink({page, children}) {
  return (
    <Link 
        to={getPath(page)}
        className='current'
        aria-current='page'
      >
      {children}
    </Link>
  )
}

function IdleLink({page, children}) {
  return (
    <Link to={getPath(page)}>
      {children}
    </Link>
  );
}
