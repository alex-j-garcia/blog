import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

InternalLink.propTypes = {
  link: PropTypes.shape({
    urlOrPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
  }).isRequired,
};

export default function InternalLink({ link }) {
  const { title, urlOrPath, icon = null } = link;
  const { pathname } = useLocation();

  return (
    <Link
      to={urlOrPath}
      aria-current={pathname === urlOrPath ? 'page' : null}
    >
      {icon}{title}
    </Link>
  );
}
