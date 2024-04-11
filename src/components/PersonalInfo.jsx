import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from './UI/Input';
import Button from './UI/Button';

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className='section'>
      <h2>Personal Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit} className='personal-info-form'>
          <div className='row'>
            <Input
              type='text'
              label='Name'
              name='fullName'
              value={personalInfo.fullName}
              onChange={handleChange}
            />
            <Input
              type='email'
              label='Email'
              name='email'
              value={personalInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className='row'>
            <Input
              type='tel'
              label='Phone Number'
              name='phoneNumber'
              value={personalInfo.phoneNumber}
              onChange={handleChange}
            />
            <Input
              type='text'
              label='LinkedIn'
              name='linkedin'
              value={personalInfo.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className='button-container'>
            <Button label='Save' type='submit' />
          </div>
        </form>
      ) : (
        <div className='section-header'>
          <p>{personalInfo.fullName}</p>
          <div className='button-container'>
            <Button
              label='Edit'
              onClick={handleEdit}
              className='edit-button'
            /> 
          </div>   
        </div>
      )}
    </div>
  );
}

PersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
  setPersonalInfo: PropTypes.func.isRequired,
};