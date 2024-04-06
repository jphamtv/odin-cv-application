import PropTypes from 'prop-types'

export default function DateInput({ label, name, value, onChange }) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  const handleMonthChange = (e) => {
    const [_, selectedYear] = value.split(' ');
    onChange(`${e.target.value} ${selectedYear}`);
  }
  
  const handleYearChange = (e) => {
    const [selectedMonth] = value.split(' ');
    onChange(`${selectedMonth} ${e.target.value}`);
  };

  return (
    <div className='date-input'>
      <label>{label}</label>
      <div className="input-container">
        <select value={value.split(' ')[0]} onChange={handleMonthChange}>
          <option value=''>Month</option>
          {months.map(month => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={value.split(' ')[1]} onChange={handleYearChange}>
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}