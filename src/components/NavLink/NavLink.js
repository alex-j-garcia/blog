import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

export default function NavLink({ page }) {
  const { pathname } = useLocation();
  const { title, icon, urlOrPath } = page;

  return (
    <Link
      to={urlOrPath}
      aria-current={pathname === urlOrPath ? 'page' : null}
    >
      <i className={`ri-${icon}-line`}></i>
      <span>{title}</span>
    </Link>
  );
}
