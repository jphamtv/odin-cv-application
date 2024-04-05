import PropTypes from 'prop-types'
import './Button.css'

export default function Button({ type, label, onClick }) {
  return (
    <button type={type} onClick={onClick}>{label}</button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
