import PropTypes from "prop-types";
import "./Input.css";

export default function Input({ type, label, name, value, onChange }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
