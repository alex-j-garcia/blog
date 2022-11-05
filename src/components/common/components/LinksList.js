import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

LinksList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    urlOrPath: PropTypes.string.isRequired,
    icon: PropTypes.element,
  })).isRequired,
  isExternal: PropTypes.bool,
};

export default function LinksList({ list, isExternal = false }) {
  return (
    <ul>
      {list.map((link, index) => (
        <li key={index}>
          {isExternal ? 
            <ExternalLink link={link} /> :
            <InternalLink link={link} />
          }
        </li>
      ))}
    </ul>
  );
}
