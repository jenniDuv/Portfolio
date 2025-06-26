import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ici vous trouverez les projets que j'ai réalisée
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The Hyrule Castle"
              description="Conception et développement d'un jeu de rôle (RPG) avec des fonctionnalités de base comme des combats au tour par tour."
              ghLink="https://github.com/jenniDuv/TheHyruleCastle"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jeu pierre papier ciseaux !"
              description='Un jeu "Pierre-Papier-Ciseaux" codé en Python dans le terminal. L’utilisateur joue contre l’ordinateur, qui choisit son coup au hasard. Ce projet m’a permis de m’exercer à l’utilisation des conditions, des boucles et des fonctions en Python.'
              ghLink="https://github.com/jenniDuv/Pierre-Papier-Ciseaux"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Médiathèque documents"
              description="InfoTech Services 86 (ITS 86), est une Entreprise de Services Numériques (ESN) spécialisée dans le développement informatique (applications de bureau, web, mobile), l’hébergement de site web, l’infogérance, la gestion de parc informatique et l’ingénierie système et réseau. Elle répond régulièrement à des appels d’offres en tant que société d’infogérance et prestataire de services informatiques."
              ghLink="https://github.com/jenniDuv/mediatheque_86"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="API rest mediathèque documents"
              description="Cette API est utilisée par l'application MediatekDocuments écrite en C# et récupérable dans le dépôt suivant :
              https://github.com/jenniDuv/mediatheque_86"
              ghLink="https://github.com/jenniDuv/api_rest_mediatek"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Médiatèque formation"
              description="C'est une application web en ligne qui permet de faire des formations en ligne pour apprendre à coder."
              ghLink="https://github.com/jenniDuv/Mediatek_formation"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="To-Do List"
              description="Une application To-Do List simple qui permet d’ajouter, supprimer et cocher des tâches. Elle m’a permis de pratiquer les bases du développement web avec React (ou HTML/CSS/JS si tu ne l’as pas faite en React)."
              ghLink="https://github.com/jenniDuv/To-Do-List"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
