import PropTypes from 'prop-types'
import './Input.css'

export default function Input({ type, label, value, onChange }) {
  return (
    <div className='input'>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};