import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';
import DateInput from '../FormComponents/DateInput';

export default function Education({ educations, setEducations }) {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index] = { ...updatedEducations[index], [name]: value };
      return updatedEducations;
    });
  }

  const handleStartMonthChange = (month, index) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index].startDate = `${month} ${updatedEducations[index].startDate.split(' ')[1]}`;
      return updatedEducations;
    });
  };
  
  const handleStartYearChange = (year, index) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index].startDate = `${updatedEducations[index].startDate.split(' ')[0]} ${year}`;
      return updatedEducations;
    });
  };
  
  const handleEndMonthChange = (month, index) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index].endDate = `${month} ${updatedEducations[index].endDate.split(' ')[1]}`;
      return updatedEducations;
    });
  };
  
  const handleEndYearChange = (year, index) => {
    setEducations((prevEducations) => {
      const updatedEducations = [...prevEducations];
      updatedEducations[index].endDate = `${updatedEducations[index].endDate.split(' ')[0]} ${year}`;
      return updatedEducations;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleAddEducation = () => {
    setEducations((prevEducations) => [
      ...prevEducations,
      {
        schoolName: '',
        location: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
      },
    ]);
    setEditingIndex(educations.length);
  };

  const handleDeleteEducation = (indexToRemove) => {
    setEducations(educations.filter((education, index) => index !== indexToRemove));
    setEditingIndex(null);
  };

  return (
    <div className='section'>
      <div className='section-header'>
        <h2>Education</h2>
        <div className='button-container'>
          <Button label='Add Education' onClick={handleAddEducation} className='add-button' />
        </div>
      </div>
      {educations.map((education, index) => (
        <div key={index}>
          {editingIndex === index ? (
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <Input
                  type='text'
                  label='School Name'
                  name='schoolName'
                  value={education.schoolName}
                  onChange={(e) => handleChange(e, index)}
                />
                  <Input
                    type='text'
                    label='School Location'
                    name='location'
                    value={education.location}
                    onChange={(e) => handleChange(e, index)}
                  />
              </div>
              <div className='row'>
                <Input
                  type='text'
                  label='Degree or Certificate'
                  name='degree'
                  value={education.degree}
                  onChange={(e) => handleChange(e, index)}
                />
                <Input
                  type='text'
                  label='Field of Study'
                  name='major'
                  value={education.major}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className='row'>
              <DateInput
                  label='Start Date'
                  month={education.startDate.split(' ')[0]}
                  year={education.startDate.split(' ')[1]}
                  onMonthChange={(month) => handleStartMonthChange(month, index)}
                  onYearChange={(year) => handleStartYearChange(year, index)}
                />
                <DateInput
                  label='End Date'
                  month={education.endDate.split(' ')[0]}
                  year={education.endDate.split(' ')[1]}
                  onMonthChange={(month) => handleEndMonthChange(month, index)}
                  onYearChange={(year) => handleEndYearChange(year, index)}
                />
              </div>
              <div className='form-button-container'>
                <Button label='Delete' onClick={() => handleDeleteEducation(index)} className='delete-button' />
                <Button label='Save' type='submit' />
              </div>
            </form>          
          ) : education.schoolName ? (
            <div className='form-container-closed'>
              <p>{education.schoolName} ({education.startDate}—{education.endDate})</p>
              <div className='button-container'>
                <Button label='Edit' onClick={() => handleEdit(index)} className='edit-button' />
              </div>
            </div>            
          ) : null}
        </div>
      ))}
    </div>
  );
}

Education.propTypes = {
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  setEducations: PropTypes.func.isRequired,
};