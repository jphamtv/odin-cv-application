import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from './UI/Input'
import Textarea from './UI/Textarea'
import Button from './UI/Button';
import DateInput from './UI/DateInput';

export default function Experience({ experiences, setExperiences }) {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index] =
        { ...updatedExperiences[index], [name]: value };
      
      return updatedExperiences;
    });
  }

  const handleStartMonthChange = (month, index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index].startDate =
        `${month} ${updatedExperiences[index].startDate.split(' ')[1]}`;
      
      return updatedExperiences;
    });
  };
  
  const handleStartYearChange = (year, index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index].startDate =
        `${updatedExperiences[index].startDate.split(' ')[0]} ${year}`;
      
      return updatedExperiences;
    });
  };

  const handleEndMonthChange = (month, index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index].endDate =
        `${month} ${updatedExperiences[index].endDate.split(' ')[1]}`;
      
      return updatedExperiences;
    });
  };

  const handleEndYearChange = (year, index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index].endDate =
        `${updatedExperiences[index].endDate.split(' ')[0]} ${year}`;
      
      return updatedExperiences;
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  
  const handleAddExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
    setEditingIndex(experiences.length);
  };
  
  const handleDeleteExperience = (indexToRemove) => {
    setExperiences(experiences.filter(
      (experience, index) => index !== indexToRemove)
    );
    setEditingIndex(null);
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2>Experience</h2>
        <div className="button-container">
          <Button
            label="Add Experience"
            onClick={handleAddExperience}
            className="add-button"
          />
        </div>
      </div>
      {experiences.map((experience, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <form onSubmit={handleSubmit}>  
              <div className='row'>
                <Input
                  type='text'
                  label='Company Name'
                  name='company'
                  value={experience.company}
                  onChange={(e) => handleChange(e, index)}
                />
                <Input
                  type='text'
                  label='Job Title'
                  name='jobTitle'
                  value={experience.jobTitle}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className='row'>
                <DateInput
                  label='Start Date'
                  month={experience.startDate.split(' ')[0]}
                  year={experience.startDate.split(' ')[1]}
                  onMonthChange={(month) =>
                    handleStartMonthChange(month, index)}
                  onYearChange={(year) =>
                    handleStartYearChange(year, index)}
                />
                <DateInput
                  label='End Date'
                  month={experience.endDate.split(' ')[0]}
                  year={experience.endDate.split(' ')[1]}
                  onMonthChange={(month) => handleEndMonthChange(month, index)}
                  onYearChange={(year) => handleEndYearChange(year, index)}
                />
              </div>
              <div className='row'>
                <Textarea
                  label='Description'
                  name='description'
                  value={experience.description}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className='form-button-container'>
                <Button
                  label='Delete'
                  onClick={() => handleDeleteExperience(index)}
                  className='delete-button'
                />
                <Button
                  label='Save'
                  type='submit'
                />
              </div>
            </form>
          ) : experience.company ? (
            <div className='form-container-closed'>
              <p>
                {experience.company} ({experience.startDate}—{experience.endDate})
              </p>
              <div className='button-container'>
                <Button
                  label='Edit'
                  onClick={() => handleEdit(index)}
                  className='edit-button'
                />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  setExperiences: PropTypes.func.isRequired,
};