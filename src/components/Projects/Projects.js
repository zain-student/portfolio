import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg";
import investment from "../../Assets/Projects/investment.jpg";
import PrimeFind from "../../Assets/Projects/primefind.jpg";
import medical from "../../Assets/Projects/medical.jpg";
import quotes from "../../Assets/Projects/quotes.jpg";
import quiz from "../../Assets/Projects/quiz.jpg";

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
              imgPath={investment}
              isBlog={false}
              title="Invstrhub"
              description="InvstrHub is a React Native-based investment tracking app that enables users to monitor portfolios, view financial insights, and manage assets through a clean and performant mobile interface, with real-time data integration and scalable app architecture."
              ghLink="https://github.com/zain-student/flowvestApp"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Medical Suit Apps"
              description="A React Native-based healthcare application designed to manage patient data and medical workflows, featuring API-driven data handling, secure authentication, and a responsive, user-friendly interface."
              ghLink="https://github.com/zain-student/Receptionist_App"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PrimeFind}
              isBlog={false}
              title="PrimeFind"
              description="PrimeFind is a React Native-based product discovery app that allows users to search and explore listings through an optimized, API-driven, and user-friendly mobile experience."
              ghLink="https://github.com/zain-student/PrimeFind/tree/main/PrimeFind"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Sphere"
              description="An interactive React Native quiz app featuring dynamic questions, score tracking, and optimized UI for an engaging learning experience."
              ghLink="https://github.com/zain-student/BlogSphere/tree/main/BlogSphere"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quotes}
              isBlog={false}
              title="Quotes Generator App"
              description="A React Native-based quotes app that dynamically displays inspirational content with a clean, responsive, and lightweight user interface."
              ghLink="https://github.com/zain-student/CodeAlpha_RandomQuoteGenerator/tree/main/QuotesGenerator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="QuizyCards "
              description="Developed a Quiz app where u can make and take Quiz from someone else using React Native and local
storage"
              ghLink="https://github.com/zain-student/codeAlpha_FlashcardQuizApp/tree/main/QuizzyCards"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
