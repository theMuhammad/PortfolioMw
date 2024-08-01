import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/emotion.png";

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
              imgPath={emotion}
              isBlog={false}
              title="Online-countries Website"
              description="This is a site that provides complete information about each country. In it, the state is the capital, population, currency, area..."
              ghLink="https://github.com/theMuhammad/Country"
              demoLink="https://66ab6b9889fd280091ff3229--ornate-meerkat-3fe220.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
      <h5>*That's it for now and I'm trying to add more projects like this soon*</h5>
    </Container>
  );
}

export default Projects;
