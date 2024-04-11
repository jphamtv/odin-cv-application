import { useState } from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Button from '../FormComponents/Button';
import './Resume.css'

export default function Resume() {
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
  const [educations, setEducations] = useState([
    {
      schoolName: '',
      location: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handlePrint = () => {
    window.print();
  }

  return (
    <div>
      <h1>Resume Builder</h1>
      {isEditing ? (
        <div className='resume-builder'>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}/>
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
          <Education
            educations={educations}
            setEducations={setEducations}
          />
          <div className='submit-button-container'>
          <Button label='View Resume' type='submit' onClick={handleSubmit} className='submit-button' />
          </div>
        </div>
      ) : (
        <>
          <div className='resume-preview'>
            <section className='personal-info'>
              <div className='resume-header'>
                <p className='full-name'>{personalInfo.fullName}</p>
                <div className="resume-button-container">
                  <Button
                    label='Edit'
                    onClick={handleEdit}
                    className='edit-button'
                    />  
                  <Button
                    label='Print Resume'
                    onClick={handlePrint}
                    className='print-button'
                    />                  
                </div>
              </div>
              <div className='font-14px'>
                <p>{personalInfo.email} <span className='dot'>•</span></p>
                <p>{personalInfo.phoneNumber} <span className='dot'>•</span></p>
                <p>linkedin.com/in/{personalInfo.linkedin}</p>
              </div>
              <hr />
            </section>
            <section>
              <h3>EXPERIENCE</h3>
              {experiences
              .filter((experience) => experience.company)
              .map((experience, index) => (
                <div key={index}>
                  <p className='font-14px'>
                    <span className='bold-text'>{experience.jobTitle}</span>
                    {experience.company && (
                      <>
                        <span>,</span>
                        <span className='bold-text'> {experience.company}</span>
                      </>
                    )}
                    {experience.startDate && experience.endDate && (
                      <span> - ({experience.startDate}—{experience.endDate})</span>
                    )}
                  </p>
                  <pre>{experience.description}</pre>
                </div>
              ))}
            </section>
            <section>
              <h3>EDUCATION</h3>
              {educations
              .filter((education) => education.schoolName)
              .map((education, index) => (
                <div key={index}>
                  <p className='font-14px'>
                    <span className='bold-text'>{education.degree}</span>
                    {education.major && (
                      <>
                        <span>,</span>
                        <span className='bold-text'> {education.major}</span>
                      </>
                    )}
                    {education.schoolName && <span> - {education.schoolName}</span>}
                    {education.startDate && education.endDate && (
                      <span> ({education.startDate}—{education.endDate})</span>
                    )}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </>        
      )}      
    </div>
  );
}
