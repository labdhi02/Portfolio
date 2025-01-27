import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Profile from "../../Assets/Profile.png";
import './Home.css';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div>
                <h1 style={{ textAlign: "left" }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </div>

              <div style={{ textAlign: "left" }}>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Labdhi Shah</strong>
                </h1>
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Innovative Problem Solver",
                      "Turning Ideas into Action",
                      "Crafting New Solutions",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
                <div className="button-container">
                  <Link to="/contact">
                    <button className="button">Get in Touch</button>
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1ac3xke7q-sCKar7iEia95QjWHBLZQyn1/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button resume-btn">Resume</button>
                  </a>
                </div>
              </div>
            </Col>

            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: "50%",
                height: "450px",
                width: "450px",
              }}
              className="profile-circle"
            >
              <img
                src={Profile}
                alt="home pic"
                className="img-fluid profile-image"
                style={{
                  borderRadius: "50%",
                  maxHeight: "110%",
                  maxWidth: "110%",
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-description">
              <div style={{ padding: "100px 40px", textAlign: "justify" }}>
                <p className="home-about-body">
                  <h1 style={{ color: "#be6adf" }}>Welcome to my space!</h1>
                  <br /> I am passionate about building innovative solutions
                  that combine technology, creativity, and strategy. With a
                  knack for problem-solving and a drive to make an impact, I
                  bring ideas to life through a thoughtful and hands-on
                  approach.
                  <br />
                  <br />
                  My journey so far has been fueled by curiosity and a relentless desire to learn and grow.
                  I specialize in areas like <strong>Web Development, Product Design</strong>, and
                  <strong> Technology Consulting</strong>. When I am working on projects, I enjoy
                  exploring emerging technologies, blogging, and mentoring aspiring developers.
                  <br />
                  <br />
                  <h3 style={{ color: "#be6adf" }}>Let’s connect to create something amazing together!</h3>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
