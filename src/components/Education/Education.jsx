import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

export default function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevInfo) => ({ ...prevInfo, [name]: value }));
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
          <Input
            type='date'
            label='Start Date'
            name='startDate'
            value={education.startDate}
            onChange={handleChange}
        />
          <Input
            type='date'
            label='End Date'
            name='endDate'
            value={education.endDate}
            onChange={handleChange}
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