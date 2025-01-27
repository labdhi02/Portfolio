import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Particle from "../Particle";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";  // Import icons

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_k546ydd";
    const templateId = "template_w9ne9m6";
    const userId = "a8swVYGC8bEZ6f8_o";

    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
      to_email: "labdhi200@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="particle-background">
        <Particle />
      </div>

      {/* Flexbox container for form and contact info */}
      <div className="contact-flex-container">
        <div className="form-container">
          <h2 className="contact-header">Let's Talk</h2>
          <p className="contact-subheader">
            If you're looking to create a website or explore collaboration
            opportunities for a new project, I am available to assist you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-new">
        <h3 className="info-header">Contact Details</h3>
        <p className="info-text">
          Feel free to reach out through any of the following:
        </p>

        <div className="contact-details">
          <p>
            <FaEnvelope /> <strong>Email :</strong> labdhi200@gmail.com
          </p>
          <p>
            <FaPhone /> <strong>Phone :</strong> +91 8780891785
          </p>
          <p>
            <FaMapMarkerAlt /> <strong>Address :</strong> Surat, Gujarat, India
          </p>
        </div>

        <h3 className="info-header">Connect with Me</h3>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/labdhi-shah-8656b4255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/labdhi02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
