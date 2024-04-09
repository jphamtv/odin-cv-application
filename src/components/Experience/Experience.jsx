import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'
import Button from '../FormComponents/Button';
import DateInput from '../FormComponents/DateInput';

export default function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
  }

  const handleStartMonthChange = (e) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      startDate: `${e.target.value} ${prevExperience.startDate.split(' ')[1]}`,
    }));
  };
  
  const handleStartYearChange = (e) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      startDate: `${prevExperience.startDate.split(' ')[0]} ${e.target.value}`,
    }));
  };
  
  const handleEndMonthChange = (e) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      endDate: `${e.target.value} ${prevExperience.endDate.split(' ')[1]}`,
    }));
  };
  
  const handleEndYearChange = (e) => {
    setExperience((prevExperience) => ({
      ...prevExperience,
      endDate: `${prevExperience.endDate.split(' ')[0]} ${e.target.value}`,
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
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <Input
              type='text'
              label='Company Name'
              name='company'
              value={experience.company}
              onChange={handleChange}
            />
              <Input
                type='text'
                label='Job Title'
                name='jobTitle'
                value={experience.jobTitle}
                onChange={handleChange}
              />
          </div>
          <div className='row'>
            <DateInput
              label='Start Date'
              month={experience.startDate.split(' ')[0]}
              year={experience.startDate.split(' ')[1]}
              onMonthChange={handleStartMonthChange}
              onYearChange={handleStartYearChange}
            />
            <DateInput
              label='End Date'
              month={experience.endDate.split(' ')[0]}
              year={experience.endDate.split(' ')[1]}
              onMonthChange={handleEndMonthChange}
              onYearChange={handleEndYearChange}
            />
          </div>
          <div className='row'>
            <Textarea
              label='Description'
              name='description'
              value={experience.description}
              onChange={handleChange}
            />
          </div>
          <div className='button-container'>
            <Button label='Save' type='submit' /> 
          </div>
        </form>
      ) : (
        <div>
          <p>{experience.company}</p>
          <p>{experience.jobTitle}</p>
          <p>{experience.startDate}</p>
          <p>{experience.endDate}</p>
          <pre>{experience.description}</pre>
          <div className='button-container'>
            <Button label='Edit' onClick={handleEdit} /> 
          </div>    
        </div>
      )}
    </div>
  );
}

Experience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setExperience: PropTypes.func.isRequired,
};