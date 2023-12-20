import React from "react";
import Card from 'react-bootstrap/Card';

function Github() {
  return (
    <>
    <Card className="college">
      <Card.Header><u>Bachelor's in Computer Science and Engineering</u></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          VIT Bhopal University, Bhopal(M.P.), India
          <p>
          2020-2024
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">CGPA 9.27</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card className="college">
      <Card.Header><u>12th Standard under PCM</u></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          IBS Global Academy, Ujjain(M.P.), India
          <p>
          2020
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">88.8%</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card className="college">
      <Card.Header><u>10th Standard</u></Card.Header >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Carmel Convent Sr. Sec. School, Ujjain(M.P.), India
          <p>
          2018
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">92.2%</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
</>
  );
}
export default Github;