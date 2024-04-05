import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

export default function PersonalInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [isEditing, setIsEditing] = useState(true);

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='email'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='row'>
            <Input
              type='tel'
              label='Phone Number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              type='text'
              label='LinkedIn'
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <Button
            label='Save'
            type='submit'
          />
        </form>
      ) : (
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{linkedin}</p>
          <Button
            label='Edit'
            onClick={handleEdit}
          />
        </div>
      )}
    </div>
  );
}
