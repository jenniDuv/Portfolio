import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> PRÉSENTATION </span>
            </h1>
            <p className="home-about-body">
              Je m'intéresse à la création de sites interactifs et à l'univers du 
              <br />
              <i>
                <b className="purple"> design numérique, des jeux vidéo et de l'animation. </b>
              </i>
              <br />
              <br />
              Je suis en train d'apprendre 
              <i>
                <b className="purple"> HTML, CSS, Javascript </b>
              </i>
              et des outils modernes comme 
              <i>
                <b className="purple"> React.js.</b>
              </i>
              <br />
              <br />
              Ce portfolio est un espace où je partage mon évolution, mes projets et ma créativité.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jenniDuv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jennifer-duvales-a69685256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
