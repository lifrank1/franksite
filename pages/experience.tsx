// Import component before using it
import '../src/App.css'
import {ExperienceData} from '../data/ExperienceData';
import ExperienceBlock from '../components/ExperienceBlock'
import React from 'react';

function Experience() {
  const experienceData = ExperienceData; // Assuming ExperienceData is an array of experiences

  return (
    <div className="experience-container">
      <h2>Professional Experience</h2>
      {experienceData.map((exp, index) => (
        <ExperienceBlock
          key={index} // Provide a unique key for each item in the map
          company={exp.company}
          link={exp.link}
          role={exp.role}
          location={exp.location}
          time={exp.time}
          achievements={exp.achievements}
        />
      ))}
    </div>
  );
}


export default Experience;