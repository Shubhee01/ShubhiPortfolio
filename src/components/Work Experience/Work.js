import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import WorkComponent from "./Workcomponent";

function Work() {
    return (
      <Container fluid className="work-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "15px" }}>
            <Col
              md={10}
              style={{
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                My <strong className="purple">Experience</strong>
              </h1>
              <WorkComponent />
            </Col>
            </Row>
        </Container>
      </Container>
    );
  }

  export default Work;