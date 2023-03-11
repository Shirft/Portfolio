import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Aboutme from "../Aboutme/Aboutme";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";
import { Fade } from "@ericcote/react-reveal";

const Home = () => {
  const [state] = useState({
    name: "Hi there, I'm Miguel",
    cargo: "Developer",
    description:
      "I'm front-end developer passionate about maintenance and development of new technologies",
  });

  const scrol = () => {
    window.scroll({
      //top: 962,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <Fade right>
      <div className="home-all" id="Home">
        <div className="home-container">
          <div className="home-dev">
            <div className="home-name">{state.name}</div>
            <div className="home-cargo">{state.cargo}</div>
            <TypeWriterEffect
              startDelay={1}
              cursorColor="white"
              multiText={[`${state.description}`]}
              typeSpeed={40}
            />
          </div>
          <div className="home-redes">
          <Link
            to="https://www.linkedin.com/in/miguel-hilser-39b106122"
            target="_blank"
            title="Linkdin"
          >
            <img alt="linkdin" src="./images/linkedin.png" />
          </Link>
          <Link to="https://github.com/Shirft" target="_blank" title="Git-hub">
            <img alt="Git-hub" src="./images/github.png" />
          </Link>
          <Link to="https://wa.me/1132933986" target="_blank" title="Whatsapp">
            <img alt="whatsapp" src="./images/whatsapp.png" />
          </Link>
          <Link to="https://t.me/MiguelHilser" target="_blank" title="Telegram">
            <img alt="Telegram" src="./images/telegrama.png" />
          </Link>
          </div>
        </div>
        <div className="home-code">
          <div className="home-img">
            <img alt="Miguel Hilser" src="./images/Imagen1.png" />
          </div>
          <div className="home-writer">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: ["Front-end Developer", "Student"],
              }}
            />
          </div>
        </div>
      </div>
      </Fade>
      <Aboutme />
      <Projects />
      <Contact />
      <div className="home-flecha">
        <Link to="/" onClick={scrol}>
          <img alt="volver al inicio" src="./images/flecha-hacia-arriba.png" />
        </Link>
      </div>
      <div className="home-footer">
        <div className="home-footer-redes">
          <Link
            to="https://www.linkedin.com/in/miguel-hilser-39b106122"
            target="_blank"
            title="Linkdin"
          >
            <img alt="linkdin" src="./images/linkedin.png" />
          </Link>
          <Link to="https://github.com/Shirft" target="_blank" title="Git-hub">
            <img alt="Git-hub" src="./images/github.png" />
          </Link>
          <Link to="https://wa.me/1132933986" target="_blank" title="Whatsapp">
            <img alt="whatsapp" src="./images/whatsapp.png" />
          </Link>
          <Link to="https://t.me/MiguelHilser" target="_blank" title="Telegram">
            <img alt="Telegram" src="./images/telegrama.png" />
          </Link>
        </div>
        <div className="home-footer-text" >
          <Link to="https://github.com/Shirft/Portfolio" target="_blank"><p>Made by Miguel Hilser</p> </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
