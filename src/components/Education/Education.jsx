import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import DateInput from '../FormComponents/DateInput';

export default function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
  }

  const handleStartMonthChange = (e) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      startDate: `${e.target.value} ${prevEducation.startDate.split(' ')[1]}`,
    }));
  };
  
  const handleStartYearChange = (e) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      startDate: `${prevEducation.startDate.split(' ')[0]} ${e.target.value}`,
    }));
  };
  
  const handleEndMonthChange = (e) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      endDate: `${e.target.value} ${prevEducation.endDate.split(' ')[1]}`,
    }));
  };
  
  const handleEndYearChange = (e) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      endDate: `${prevEducation.endDate.split(' ')[0]} ${e.target.value}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className='section'>
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <Input
              type='text'
              label='School Name'
              name='schoolName'
              value={education.schoolName}
              onChange={handleChange}
            />
              <Input
                type='text'
                label='School Location'
                name='location'
                value={education.location}
                onChange={handleChange}
              />
          </div>
          <div className='row'>
            <Input
              type='text'
              label='Degree or Certificate'
              name='degree'
              value={education.degree}
              onChange={handleChange}
            />
            <Input
              type='text'
              label='Field of Study'
              name='major'
              value={education.major}
              onChange={handleChange}
            />
          </div>
          <div className='row'>
          <DateInput
              label='Start Date'
              month={education.startDate.split(' ')[0]}
              year={education.startDate.split(' ')[1]}
              onMonthChange={handleStartMonthChange}
              onYearChange={handleStartYearChange}
            />
            <DateInput
              label='End Date'
              month={education.endDate.split(' ')[0]}
              year={education.endDate.split(' ')[1]}
              onMonthChange={handleEndMonthChange}
              onYearChange={handleEndYearChange}
            />
          </div>
          <Button label='Save' type='submit' />
        </form>
      ) : (
        <div>
          <p>{education.schoolName}</p>
          <p>{education.location}</p>
          <p>{education.degree}</p>
          <p>{education.major}</p>
          <p>{education.startDate}</p>
          <p>{education.endDate}</p>
          <Button label='Edit' onClick={handleEdit} />
        </div>
      )}
    </div>
  );
}

Education.propTypes = {
  education: PropTypes.shape({
    schoolName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
  setEducation: PropTypes.func.isRequired,
};