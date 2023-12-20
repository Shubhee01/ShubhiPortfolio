import React from "react";
import Card from 'react-bootstrap/Card';

function Certificates() {
  return (
    <>
    <Card className="college">
      <Card.Header><u>Coursera</u></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Applied Machine Learning in Python
          <p>
          2022
          </p>
        </blockquote>
        <Card.Link href="https://drive.google.com/file/d/1klPiIzg6CnbCGe0t7ss_wwJXRuHZOR_Z/view?usp=sharing" style={{ color:  'rgba(197, 115, 230, 0.883)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className="college">
      <Card.Header><u>Coursera</u></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          HTML, CSS and JavaScript for Web Developers
          <p>
          2021
          </p>
        </blockquote>
        <Card.Link href="https://drive.google.com/file/d/1K6AotZ-dneIj1iKXbzYKEwfxZFTu5Y3w/view?usp=sharing" style={{ color:  'rgba(197, 115, 230, 0.883)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Link</Card.Link>
      </Card.Body>
    </Card>
</>
  );
}
export default Certificates;