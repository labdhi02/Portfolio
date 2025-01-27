import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <style>
        {`
          .quote-card-view {
            background: #2c3e50;
            border: none;
            color: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .about-description {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #ecf0f1;
            text-align: justify;
          }

          .about-activities {
            list-style: none;
            padding-left: 0;
            margin-top: 15px;
          }

          .about-activity {
            font-size: 1rem;
            line-height: 1.5;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            color: #ecf0f1;
          }

          .about-activity svg {
            margin-right: 10px;
            color: #8e44ad;
          }

          .quote {
            font-style: italic;
            color: rgb(155, 126, 172);
            margin-top: 20px;
            text-align: center;
          }

          .blockquote-footer {
            font-weight: bold;
            font-size: 1rem;
            color: #ecf0f1;
            text-align: center;
            margin-top: 20px;
          }
        `}
      </style>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="about-description">
              Hi Everyone, I am <b>Labdhi Shah </b> 
              from Surat, Gujarat , India.
              <br />
              I am a pre final year student of Information Technology at Charusat University with a foundation in:
            </p>
            <ul className="about-activities">
              <li className="about-activity">
                <ImPointRight /> Web Development
              </li>
              <li className="about-activity">
                <ImPointRight /> DSA
              </li>
              <li className="about-activity">
                <ImPointRight /> Framework like ReactJs , React-Native , Tailwind CSS
              </li>
            </ul>
            <p className="about-description">
              During my internship at Softrica IT Company, I gained hands-on experience and enhanced my skills.
              <br />
              Apart from coding, I enjoy:
            </p>
            <ul className="about-activities">
              <li className="about-activity">
                <ImPointRight /> Photography
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>         
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutCard;
