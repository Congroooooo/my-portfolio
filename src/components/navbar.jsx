
import "./navbar.css";
import mylogo from "../assets/mylogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={mylogo} alt="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#techstack">Tech Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
      </ul>

      <a href="/Nicko_CV.pdf" download className="download-btn">
        Download CV <span>⬇️</span>
      </a>
    </nav>
  );
};

export default Navbar;
