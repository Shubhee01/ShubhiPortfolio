import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Meditrack: Caretaker of your Health"
              description="Personalized medical data storing app which provides multiple disease prediction and specialists’ recommendation based on location and rating from Google.
              Created the website with HTML, CSS, JavaScript, and Flask (Python)and Integrated services like Azure, Firebase, Google
              API and ML algorithms."
              ghLink="https://github.com/Shubhee01/Meditrack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CROP: Cash Return On Payment"
              description="A fully responsive e-commerce website with multiple functionalities, including seller product listing, shopping cart, payment gateway integration, and user-friendly interface. 
              Engineered the website leveraging Angular, Typescript, Firebase, and Fake Ecommerce product API"
              ghLink="https://github.com/Shubhee01/CROP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Caloryy: Burn It!"
              description=" Calculates the calories burnt by particular a person during physical activity and stores the 
              data for future calculation of maintaining weight. Created using the HTML/CSS, Flask (Python), ML Algorithms and Microsoft Azure hosting Services."
              ghLink="https://github.com/Shubhee01/Caloryy"        
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
