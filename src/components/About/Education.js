import React from "react";

// Import your logos
import charusatLogo from "../../Assets/Charu_logo.jpg"; // Path to Charusat University logo
import sanskarLogo from "../../Assets/SBV_logo.png"; // Path to Sanskar Bharati Vidyalaya logo

function Education() {
  return (
    <div className="education-container">
      <h2 className="education-heading">My Education Journey</h2>
      <div className="timeline">
        {/* Timeline Item 1: B. Tech in IT */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-logo">
                <img src={charusatLogo} alt="Charusat University Logo" />
              </div>
              <div className="timeline-details">
                <h4>B. Tech in IT</h4>
                <h5>
                  <a href="https://www.charusat.ac.in" target="_blank" rel="noopener noreferrer" className="school-link">
                    Charusat University
                  </a>
                </h5>
              </div>
            </div>
            <p>
              Pursuing a Bachelor’s degree in Information Technology Engineering at CHARUSAT University, currently in my pre-final year. Actively exploring modern technologies, coding, and web development to build innovative solutions.
            </p>
            <p>Current CGPA: 8.9</p>
            <span className="timeline-date">2022-present</span>
          </div>
        </div>

        {/* Timeline Item 2: Std-12th */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-logo">
                <img src={sanskarLogo} alt="Sanskar Bharati Vidyalaya Logo" />
              </div>
              <div className="timeline-details">
                <h4>Std-12th</h4>
                <h5>
                  <a href="https://sbvsurat.com/" target="_blank" rel="noopener noreferrer" className="school-link">
                    Sanskar Bharati Vidyalaya
                  </a>
                </h5>
              </div>
            </div>
            <p>
              I completed my 12th grade from Sanskar Bharati Vidyalaya, where I developed a strong foundation in academics as well as extracurricular activities. I worked hard to stay disciplined and committed to my studies, which helped me top the school in my batch.
            </p>
            <p>Percentile: 95.94</p>
            <span className="timeline-date">2022</span>
          </div>
        </div>

        {/* Timeline Item 3: Std-10th */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-logo">
                <img src={sanskarLogo} alt="Sanskar Bharati Vidyalaya Logo" />
              </div>
              <div className="timeline-details">
                <h4>Std-10th</h4>
                <h5>
                  <a href="https://sbvsurat.com/" target="_blank" rel="noopener noreferrer" className="school-link">
                    Sanskar Bharati Vidyalaya
                  </a>
                </h5>
              </div>
            </div>
            <p>
              My 10th grade journey at Sanskar Bharati Vidyalaya was a defining moment in my academic life. I focused on consistently performing well, and my hard work paid off as I secured excellent grades and stood among the top students in my class.
            </p>
            <p>Percentile: 99.53</p>
            <span className="timeline-date">2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
