import "./Aboutme.css";
import { useState, useEffect } from "react";
import { Fade } from "@ericcote/react-reveal";

const Aboutme = () => {
  const [red, setRed] = useState([]);

  const Redes = [
    { icono: "../../images/html5.png", name: "  Html 5", alt: "Html5" },
    { icono: "../../images/css-3.png", name: "  Css 3", alt: "Css3" },
    {
      icono: "../../images/java-script.png",
      name: "  JavaScript",
      alt: "JavaScript",
    },
    { icono: "../../images/react.png", name: "  ReactJS", alt: "ReactJs" },
    {
      icono: "../../images/bootstrap.png",
      name: " Bootstrap",
      alt: "Bootstrap",
    },
    { icono: "../../images/sass.png", name: "  Sass", alt: "Sass" },
  ];

  useEffect(() => {
    setRed(Redes);
  }, []);

  return (
    <section id="Aboutme">
      <Fade left>
        <div className="about-section">
          <div className="about-texto">
            <h1>About me</h1>
            <p>
              My name is Miguel Hilser, I am a developer who is passionate about
              developing and solving problems present on a web, I began to delve
              into the world of programming during my journey through high
              school, where I started with logic, diagrams, algorithms, the
              Management of C for structured programming and C# for
              object-oriented. Later I was acquiring knowledge in the languages
              more focused on the web and back-end such as HTML5, CSS3 and SQL
              with MySql.
            </p>
            <p>
              I worked for some companies collaborating in the development and
              maintenance of the code for web projects such as startups,
              e-commerces and banks, where in a self-taught way I was looking
              for and learning about the new updates and tools added to each
              tool I used. I am currently developing personal projects using
              languages and libraries such as JavaScript, React Js and
              bootstrap, and also finishing a degree to obtain a diploma as a
              full stack developer
            </p>
          </div>
          <div className="about-mention">
            <p>I mention the technologies that I currently use:</p>
          </div>

          <ul className="about-iconos">
            {red.map((icon) => (
              <li className="about-icono" key={icon.name}>
                <img alt={icon.alt} src={icon.icono} />
                <p> {icon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </section>
  );
};

export default Aboutme;
