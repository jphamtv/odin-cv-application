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
            <section className='personal-info'>
              <p className='full-name'>{personalInfo.fullName}</p>
              <div>
                <p>{personalInfo.email} <span className='dot'>•</span></p>
                <p>{personalInfo.phoneNumber} <span className='dot'>•</span></p>
                <p>linkedin.com/in/{personalInfo.linkedin}</p>
              </div>
              <hr />
            </section>
            <section className='experience'>
              <h3>EXPERIENCE</h3>
              <div>
                <p className='bold-text'>{experience.jobTitle}<span className='comma'>,</span></p>
                <p><span className='bold-text'>{experience.company}</span><span className='dot'>—</span></p>
                <p>({experience.startDate}—{experience.endDate})</p>
              </div>
                <pre>{experience.description}</pre>
            </section>
          </div>
          <Button label='Edit' onClick={handleEdit} />
        </>        
      )}      
    </div>
  );
}
