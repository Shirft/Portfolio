import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [project, setProject] = useState([]);
  const Projects = [
    {
      id: 1,
      name: "Dessins-art(Static page)",
      image: "",
      github: "https://github.com/Shirft/DessinsArt",
      web: "https://dessins-art.000webhostapp.com/",
    },
    {
      id: 2,
      name: "Dessins-art(Dynamic page)",
      image: "",
      github: "https://github.com/Shirft/ProjectJS",
      web: "https://shirft.github.io/ProjectJS/",
    },
    {
      id: 3,
      name: "Dessins-art(with JSX)",
      image: "",
      github: "https://github.com/Shirft/ReactJS-Dessins-Art",
      web: "https://react-js-dessins-art.vercel.app/",
    },
  ];

  useEffect(() => {
    setProject(Projects);
  }, []);

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {project.map((pro) => (
          <div key={pro.id} className="projects-project">
            <h3>{pro.name}</h3>
            <img alt={pro.name} src="" />
            <Link to={pro.github}>Git-Hub</Link>
            <Link to={pro.web}>Web Page</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
