import { useState } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Button from '../FormComponents/Button';
import './CV.css'

export default function CV() {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    linkedin: '',
  });
  const [experience, setExperience] = useState({
    company: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [education, setEducation] = useState({
    schoolName: '',
    location: '',
    degree: '',
    major: '',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>CV Builder</h1>
      {isEditing ? (
        <div className='cv-builder'>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}/>
          <Experience
            experience={experience}
            setExperience={setExperience}
          />
          <Education
            education={education}
            setEducation={setEducation}
          />
          <Button
            label='Submit'
            type='submit'
            onClick={handleSubmit}
          />
        </div>
      ) : (
        <>
          <div className='resume-preview'>
          </div>
          <Button label='Edit' onClick={handleEdit} />
        </>        
      )}      
    </div>
  );
}