import { useState } from 'react'
import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'

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
    <div>
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Company Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            <Input
              type="text"
              label="Job Title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
          <Textarea
            label="Work Summary"
            value={summary}
            onChange={(value) => setSummary(value)}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p>{name}</p>
          <p>{position}</p>
          <p>{startDate}</p>
          <p>{endDate}</p>
          <pre>{summary}</pre>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
