import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container">
        <ul>
        <li>
            <Link to={`/`}>
              <p className="neon1">Home</p>
            </Link>
          </li>
          <li>
            <Link to={`/about-me`}>
              <p >About me</p>
            </Link>
          </li>
          <li>
            <Link to={`/projects`}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link to={`/contact`}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
        <div className="img">
          <div className="loader"></div>
          <div className="nombre">Miguel Hilser</div>
        </div>
    </nav>
  );
};

export default Navbar;
