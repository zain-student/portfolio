import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Zain Ul Abideen</span>{" "}
            from <span className="purple">Punjab, Pakistan</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">React Native Developer</span> at{" "}
            <span className="purple">Outscalers</span>.
            <br />I hold an Integrated BS in{" "}
            <span className="purple">Software Engineering.</span>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Scrolling through tech blogs 📰
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zain Ul Abideen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
