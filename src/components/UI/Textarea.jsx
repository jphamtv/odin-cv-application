import PropTypes from 'prop-types'

export default function Textarea({ label, name, value, onChange }) {
  return (
    <div className='input'>
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} />
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};