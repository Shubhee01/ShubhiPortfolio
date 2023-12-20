import React from "react";
import Card from 'react-bootstrap/Card';

function Work() {
  return (
    <div>
      <Card className="work">
      <Card.Header><h2><u>Advanced Application Engineering Intern</u></h2></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <h2>
        <a href="https://www.accenture.com/in-en" target="blank" style={{textDecoration: "none", color: "#c770f0"}}>
        Accenture
        </a>
        </h2>
          <p>
          June 2023- July 2023
          </p>
          <p style={{ fontSize: "1.1em", textAlign: "justify"}}>
          ● Designed and implemented enhanced Data Visualization for CMO's billing system, resulting in a 40% improvement in billing accuracy and 45% customer satisfaction using Apex Charts based on user data fetched via API from AWS storage.
          </p>
          <p style={{ fontSize: "1.1em", paddingBottom: "20px", textAlign: "justify"}}>
          ● Integrated the data visualization solution seamlessly into a React application, enhancing user experience and data accessibility in collaboration with the team of 3 members.
          </p>
        </blockquote>
        <Card.Link href="https://drive.google.com/file/d/1e_W_nmTTru-3QPjf5hjVQ8UH7Z0zi3v4/view?usp=sharing" style={{ color:  'rgba(197, 115, 230, 0.883)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Certificate</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Work;
