import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'
import Button from '../FormComponents/Button';

export default function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

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
            <Input
              type='date'
              label='Start Date'
              name='startDate'
              value={experience.startDate}
              onChange={handleChange}
            />
            <Input
              type='date'
              label='End Date (leave blank if current)'
              name='endDate'
              value={experience.endDate}
              onChange={handleChange}
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
          <Button label='Save' type='submit' />
        </form>
      ) : (
        <div>
          <p>{experience.company}</p>
          <p>{experience.jobTitle}</p>
          <p>{experience.startDate}</p>
          <p>{experience.endDate}</p>
          <pre>{experience.description}</pre>
          <Button label='Edit' onClick={handleEdit} />  
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