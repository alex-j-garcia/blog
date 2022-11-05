import PropTypes from 'prop-types';

ExternalLink.propTypes = {
  link: PropTypes.shape({
    urlOrPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ExternalLink({ link }) {
  return (
    <a 
      href={link.urlOrPath} 
      rel='noreferrer'
      target='_blank'
    >
      {link.title}
    </a>
  );
}
