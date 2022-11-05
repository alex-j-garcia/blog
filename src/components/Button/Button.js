import PropTypes from 'prop-types';

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default function Button({ onClick, children = null }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
