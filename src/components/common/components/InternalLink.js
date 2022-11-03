import { Link, useLocation } from 'react-router-dom';

export default function InternalLink({ link }) {
  const { title, urlOrPath, icon } = link;
  const { pathname } = useLocation();

  return (
    <Link
      to={urlOrPath}
      aria-current={pathname === urlOrPath ? 'page' : null}
    >
      {icon ? icon : null}
      {title}
    </Link>
  );
}
