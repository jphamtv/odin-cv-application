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
  const [experiences, setExperiences] = useState([
    {
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);
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
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <Education
            education={education}
            setEducation={setEducation}
          />
          <div className='button-container'>
          <Button label='Submit' type='submit' onClick={handleSubmit} />
          </div>
        </div>
      ) : (
        <>
          <div className='resume-preview'>
            <section className='personal-info'>
              <div className='resume-header'>
                <p className='full-name'>{personalInfo.fullName}</p>
                <Button
                  label='Edit'
                  onClick={handleEdit}
                  className='edit-button'
                />  
              </div>
              <div>
                <p>{personalInfo.email} <span className='dot'>•</span></p>
                <p>{personalInfo.phoneNumber} <span className='dot'>•</span></p>
                <p>linkedin.com/in/{personalInfo.linkedin}</p>
              </div>
              <hr />
            </section>
            <section className='experience'>
              <h3>EXPERIENCE</h3>
              {experiences.map((experience, index) => (
                <div key={index}>
                  <div>
                    <p className='bold-text'>{experience.jobTitle}<span className='comma'>,</span></p>
                    <p><span className='bold-text'>{experience.company}</span><span className='dot'>—</span></p>
                    <p>({experience.startDate}—{experience.endDate})</p>
                  </div>
                  <pre>{experience.description}</pre>
                </div>
              ))}
            </section>
            <section className='experience'>
              <h3>EDUCATION</h3>
              <div>
                <p className='bold-text'>{education.degree}<span className='comma'>,</span></p>
                <p><span className='bold-text'>{education.major}</span><span className='dot'>—</span></p>
                <p>{education.schoolName}<span className='margin-right'></span></p>
                <p>({education.startDate}—{education.endDate})</p>
              </div>
            </section>
          </div>
        </>        
      )}      
    </div>
  );
}
