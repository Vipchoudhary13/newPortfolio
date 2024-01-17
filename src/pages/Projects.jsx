import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import shopperstop from "../assets/projects/Shopperstop.png";
import swiggy from "../assets/projects/Swiggy.png";
import discovery from "../assets/projects/discovery.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discovery}
              isBlog={false}
              title="Discovery+ Clone"
              description="Discovery+ is a online video watching plateform. This platform has different diffrent videos for diffrent type of users like kids zone and features a responsive interface built with Reactjs | Redux | Firebase | HTML | CSS | Javascript, Features: Shorting, Google OAuth, User-Authentication. The backend is powered by Firebase server, while Firebase is utilized as the database. This is a Collaborative Project built by a team of 4 executed in 6 days."
              ghLink="https://github.com/RoushanFW196/discovery_clone"
              demoLink="https://discovery-clone.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy Clone"
              description="Swiggy is a online food booking plateform. This platform has utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations for food products. The user interface is designed for efficient product management and includes a complete purchase process. and also accessible for CRUD on users and products, includes a chart for statistics display. The website uses MongoDB as the database. Tech Stack: React | Redux | Hooks | Nodejs | HTML and CSS | MongoDB | Express. This is a Collaborative Project built by a team of 5 executed in 6 days."
              ghLink="https://github.com/Ankit-Mishra07/Swiggy-Clone"
              demoLink="https://swiggy-clone-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopperstop}
              isBlog={false}
              title="Shopper Stop Clone"
              description="Shopper Stop is a online shopping plateform. This online shopping platform boasts a responsive front-end design using HTML and ejs, complete utilizes a REST API built with Node Express. The user interface is designed for efficient product management and includes a complete purchase process. The platform allows for full CURD functionality on profiles and posts, Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management. Tech Stack: HTML | CSS | JavaScript | ExpressJs | MongoDB"
              ghLink="https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public"
              demoLink="https://shopper-stop-clone.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects