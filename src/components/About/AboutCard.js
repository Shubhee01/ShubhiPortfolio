import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Shubhi Choubey </span>
            from <span className="purple"> Ujjain, India.</span>
            <br />
            I recently completed my internship as an Advanced Application Engineering Intern at <span className="purple">Accenture</span>, India.
            <br />
            I'm in my final year of B.Tech. degree at <span className="purple">VIT Bhopal University. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""Coding Enthusiast and Problem Solver: Passionately Crafting Solutions in Lines of Code.""{" "}
          </p>
          <footer className="blockquote-footer">Shubhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
