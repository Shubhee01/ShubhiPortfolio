import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myface.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DO YOU <span className="purple"> KNOW </span> ME ?
            </h1>
            <p className="home-about-body">
              I'm Shubhi Choubey, I wield
              <i>
                <b className="purple"> C++, Python, and JavaScript </b> to craft seamless web experiences.
              </i>
              <br />
              <br />
              My field of Interest's are learning new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              From data visualization wizardry at   
              <b className="purple"> Accenture</b> to dancing through lines of code,
              <i>
              I'm on a mission to merge
                <b className="purple">
                  {" "}
                  creativity with technology.
                </b>
              </i>
              <br/>
              <br/>
              Join me as we code our way to the future!
                <b className="purple">
                  {" "}
                  Let's innovate, create, and explore together.
                </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
              Feel free to <span className="purple">reach out</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shubhee01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubhee01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shubhee_01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
