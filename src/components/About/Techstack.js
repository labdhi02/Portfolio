import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiReactrouter, SiTailwindcss, SiCss3 } from "react-icons/si"; // Tailwind CSS and React Router
import { TbBrandReactNative } from "react-icons/tb"; // React Native

function Techstack() {
  const techStack = [
    { icon: <CgCPlusPlus color="#00599C" />, name: "C++" },
    { icon: <DiJavascript1 color="#F7DF1E" />, name: "JavaScript" },
    { icon: <DiReact color="#61DAFB" />, name: "React" },
    { icon: <DiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <TbBrandReactNative color="#61DAFB" />, name: "React Native" },
    { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind CSS" },
    { icon: <DiNodejs color="#83CD29" />, name: "Node.js" },   
    { icon: <DiJava color="#007396" />, name: "Java" },
    { icon: <SiCss3 color="#1572B6" />, name: "CSS" },
    { icon: <DiJavascript1 color="#F7DF1E" />, name: "SQL" }, // Placeholder for SQL
  ];

  return (
    <div className="techstack-container">
      <h2 className="techstack-title">Professional Skill Set</h2> {/* Added the heading */}
      <Row className="techstack-row">
        {techStack.map((tech, index) => (
          <Col key={index} xs={4} md={2} className="tech-icon-box">
            {tech.icon}
            <p className="tech-name">{tech.name}</p>
          </Col>
        ))}
      </Row>

      {/* Add a line about your skills */}
      <p className="skills-description">
        I craft seamless, interactive experiences with React, while also building powerful, scalable systems with Node.js and MongoDB. Let's innovate and create something extraordinary together!
      </p>
    </div>
  );
}

export default Techstack;
