import PropTypes from 'prop-types'
import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

export default function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
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
      <h2>Personal Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
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
          <Button label='Save' type='submit' />
        </form>
      ) : (
        <div>
          <p>{personalInfo.fullName}</p>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phoneNumber}</p>
          <p>{personalInfo.linkedin}</p>
          <Button label='Edit' onClick={handleEdit} />
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