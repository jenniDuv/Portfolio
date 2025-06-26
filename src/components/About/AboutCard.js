import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut à tous, je m'appelle <span className="purple">Jennifer DUVALES </span>
            et je vis en <span className="purple"> Île-de-France.</span>
            <br />
            Je me forme actuellement au <b>développement web</b> et je découvre le monde du code avec enthousiasme.
            <br />
            Mon objectif est de créer des projets utiles, créatifs et inspirants, notamment autour du 
  <span className="purple"> web et du jeu vidéo.</span>
            <br />
            <br />
            En dehors du code, j'aime aussi :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dessiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Créer des univers visuels (manga, BD, webtoons)
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles choses chaque jour
            </li>
          </ul>

          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
