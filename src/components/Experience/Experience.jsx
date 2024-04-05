import { useState } from 'react'
import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'
import Button from '../FormComponents/Button';

export default function Experience() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [summary, setSummary] = useState('');
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
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <Input
              type='text'
              label='Company Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
              <Input
                type='text'
                label='Job Title'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
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
          <div className='row'>
            <Textarea
              label='Work Summary'
              value={summary}
              onChange={(value) => setSummary(value)}
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
          <p>{position}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <pre>{summary}</pre>
          <Button
            label='Edit'
            onClick={handleEdit}
          />  
        </div>
      )}
    </div>
  );
}
