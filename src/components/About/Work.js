import React from "react";

import sofrotricaLogo from "../../Assets/Softrica.jpeg"; // Path to Softrica logo

function WorkExperience() {
  return (
    <div className="education-container">
      <h2 className="education-heading">Professional Experience</h2>
      <div className="timeline">
        {/* Timeline Item 1: Web Developer */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-logo">
                <img src={sofrotricaLogo} alt="Softrica Logo" />
              </div>
              <div className="timeline-details">
                <h4>Web Developer</h4>
                <h5>
                  <a href="https://www.softrica.com" target="_blank" rel="noopener noreferrer" className="school-link">
                    Softrica
                  </a>
                </h5>
              </div>
            </div>
            <p>
             
              This hands-on work gave me a solid understanding of WordPress technology and insight into how websites are developed in a corporate environment. The skills and experiences I gained will be essential as I continue to grow in my career.
            </p>
            <span className="timeline-date">May-2024 to June-2024</span>
          </div>
        </div>

        {/* Add more Work Experience items as needed */}
      </div>
    </div>
  );
}

export default WorkExperience;
