import PropTypes from 'prop-types'
import './DateInput.css'

export default function DateInput({ label, month, year, onMonthChange, onYearChange }) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className='date-input'>
      <label>{label}</label>
      <div className="input-container">
        <select value={month} onChange={onMonthChange}>
          <option value=''>Month</option>
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={year} onChange={onYearChange}>
          <option value=''>Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select> 
      </div>
    </div>
  );
}

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
}
