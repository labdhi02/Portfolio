import React from "react";
import "./Projects.css"; // Using your provided CSS theme
import Particle from "../Particle.js";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from React Icons

// Import images from the 'src' folder
import polysenseImage from "../../Assets/Projects/Polysense.jpg";
import flavourFindImage from "../../Assets/Projects/FlavourFInd.png";
import placementCellImage from "../../Assets/Projects/Placement.png";
import libraryImage from "../../Assets/Projects/LibrayImage .png"; // Correct path if needed

const projects = [
  {
    title: "Polysense - PCOD Detection using ML",
    image: polysenseImage,
    githubUrl: "https://github.com/labdhi02/Polysense---Early-Stage-Detection-of-PCOD",
    description: "A machine learning-based system to detect early signs of PCOD in women. The system features a React-based front-end for seamless user interaction, aiming to raise awareness and promote early diagnosis for better management of PCOD.",
  },
  {
    title: "FlavourFind                          ",
    image: flavourFindImage,
    githubUrl: "https://github.com/labdhi02/FlavourFind",
    description: "A recipe-based mobile application built with React Native. Designed to help users discover and explore a wide variety of recipes. It utilizes JSON data files to store and manage recipe information, including ingredients, instructions, and preparation time.",
  },
  {
    title: "Placement-Cell",
    image: placementCellImage,
    githubUrl: "https://github.com/labdhi02/placement-cell",
    description: "A MERN stack-based web application that simplifies placement management for educational institutions. It includes an admin dashboard for efficiently managing student profiles, company requirements, interviews, and placement statistics.",
  },
  {
    title: "Library Book Management",
    image: libraryImage,
    githubUrl: "https://github.com/labdhi02/Library-Book-Management",
    description: "A CRUD-based web application for managing library books. This system allows users to add, update, and delete book records, as well as view the list of available books. Built with the MERN stack, it offers an intuitive user interface to handle book management with ease.",
  },
];

const blogs = [
  {
    title: "Navigating Corporate Life: My Internship Journey",
    link: "https://medium.com/@labdhi200/navigating-corporate-life-my-internship-journey-b420a583a5ff", // Replace with your actual blog link
    description: "In this blog, I share my experiences and insights from my internship journey, navigating the corporate world for the first time. It covers the challenges, learning opportunities, and the skills I gained that helped me grow professionally.",
  },
  {
    title: "Placement-cell Website",
    link: "https://medium.com/@labdhi200/placement-cell-website-5f5e582b4340", // Replace with your actual blog link
    description: "This blog outlines the development process of the Placement-cell website, a project aimed at simplifying placement management for educational institutions. I delve into the technical aspects of building the MERN stack application and how it enhances placement operations.",
  },
];

const ProjectCard = ({ title, image, githubUrl, description }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="button">
      <FaGithub className="github-icon" /> View on GitHub
    </a>
  </div>
);


const BlogCard = ({ title, link, description }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="button">
      Read Blog
    </a>
  </div>
);

const Projects = () => (
  <div className="home-section">
    <Particle /> {/* Add Particle effect only once for the whole section */}
    <div className="home-content">
      <h1 className="heading">My Projects</h1>
      <p className="intro-text">
        Below are some of the projects I have worked on, demonstrating my skills in web development, 
        machine learning, mobile development, and modern frameworks like 
        <strong> React JS</strong>, <strong>React Native</strong>, and <strong>MERN Stack</strong>. 
        Click on any project to view the code on GitHub.
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            githubUrl={project.githubUrl}
            description={project.description}
          />
        ))}
      </div>
      <h1 className="heading">My Blogs</h1>
      
      <div className="projects-container">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            link={blog.link}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
