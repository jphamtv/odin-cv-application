import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textarea({ label, value, onChange }) {
  const [text, setText] = useState(value);

  const handleChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  }
  return (
    <div className='input'>
      <label>{label}</label>
      <textarea value={text} onChange={handleChange} />
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};