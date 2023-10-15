import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tejas Bachute </span>
            from <span className="purple"> Solapur, India.</span>
            <br /> Hey. I'am Tejas. 22 years young self-taught frongend developer
            UI/UX Designer, From Solapur,Maharashtra.
            <br />
            I enjoy creating & building clean Modern & user-friendly Website
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tejas Bachute</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
