import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import FolderIcon from "@mui/icons-material/Folder";
import { Fade } from "@ericcote/react-reveal";

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
    <Fade bottom cascade>
      <div id="Projects">
        <h1>Projects</h1>
        <div className="projects-list">
          {project.map((pro) => (
            <Fade bottom cascade key={pro.id}>
              <div className="projects-project">
                <h3>{pro.name}</h3>
                <FolderIcon
                  sx={{ fontSize: 120, color: "red", paddingLeft: 0 }}
                />
                <Link to={pro.github} target="_blank">
                  Git-Hub
                </Link>
                <Link to={pro.web} target="_blank">
                  Website
                </Link>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
