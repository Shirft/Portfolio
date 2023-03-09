import "./Home.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import Aboutme from "../../components/Aboutme/Aboutme";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Typewriter from "typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";

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
/*
  const none = () => {
    const diplayBlock={
      display: 'block';
    };
    if(document.documentElement.scrollTop>961){

    } 
  };
*/
  return (
    <div className="home">
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
            >
              <img alt="linkdin" src="./images/linkedin.png" />
            </Link>
            <Link to="https://github.com/Shirft" target="_blank">
              <img alt="git-hub" src="./images/github.png" />
            </Link>
            <Link to="https://wa.me/1132933986" target="_blank">
              <img alt="whatsapp" src="./images/whatsapp.png" />
            </Link>
            <Link to="https://t.me/MiguelHilser" target="_blank">
              <img alt="telegram" src="./images/telegrama.png" />
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
      <Aboutme />
      <Projects />
      <Contact />
      <div className="home-flecha" >
        <Link to="/" onClick={scrol}>
          <img alt="volver al inicio" src="./images/flecha-hacia-arriba.png" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
