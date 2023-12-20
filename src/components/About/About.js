import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/myface.png";
import Toolstack from "./Toolstack";
import Certificates from "./Certificates";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Introduction</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px"}}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxWidth: '100%', height: '20em' }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <Github/>

        <h1 className="project-heading" >
          Technical <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> 
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <Certificates/>


      </Container>
    </Container>
  );
}

export default About;
