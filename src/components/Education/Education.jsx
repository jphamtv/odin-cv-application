import { useState } from 'react'
import Input from '../FormComponents/Input';
import Button from '../FormComponents/Button';

export default function Education() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [degree, setDegree] = useState('');
  const [major, setMajor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <Input
              type='text'
              label='School Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
              <Input
                type='text'
                label='School Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
          </div>
          <div className='row'>
            <Input
              type='text'
              label='Degree or Certificate'
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
            <Input
              type='text'
              label='Field of Study'
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>
          <div className='row'>
          <Input
            type='date'
            label='Start Date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type='date'
            label='End Date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
          <p>{location}</p>
          <p>{degree}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <Button
            label='Edit'
            onClick={handleEdit}
          />
        </div>
      )}
    </div>
  );
}
