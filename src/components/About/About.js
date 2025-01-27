import React from "react";
import "./About.css";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Education from "./Education";
import WorkExperience from "./Work";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7} // On larger screens, the text will be on the left
            className="order-md-1 order-2"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5} // On larger screens, the image will be on the right
            className="order-md-2 order-1"
            style={{ paddingBottom: 20 }}
          >
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>

        <Education />
        <WorkExperience />

       
        <Techstack />

       
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
