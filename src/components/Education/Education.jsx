import { useState } from 'react'
import Input from '../FormComponents/Input';

export default function Education() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [degree, setDegree] = useState('');
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
    <div>
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="School Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            <Input
              type="text"
              label="School Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          <Input
            type="text"
            label="Degree or Certificate"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <Input
            type="date"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="date"
            label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p>{name}</p>
          <p>{location}</p>
          <p>{degree}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
