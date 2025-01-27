import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGithub, SiGit, SiPostman, SiVercel } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode color="#0066F4" />, name: "VS Code" },
    { icon: <SiGithub color="#181717" />, name: "GitHub" },
    { icon: <SiGit color="#F05032" />, name: "Git" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <SiVercel color="#000000" />, name: "Vercel" },
  ];

  return (
    <div className="toolstack-container">
      <h2 className="toolstack-title">Tools I use</h2> {/* Updated heading */}
      <Row className="toolstack-row">
        {tools.map((tool, index) => (
          <Col key={index} xs={4} md={2} className="tool-icon-box">
            {tool.icon}
            <p className="tool-name">{tool.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Toolstack;
