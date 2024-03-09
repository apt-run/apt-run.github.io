import reactLogo from "../assets/react.svg";
import debianlogo from "../assets/debian2.svg";
import ubuntulogo from "../assets/ubuntu.svg";
import viteLogo from "/vite.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <section className="topbar">
        <Link className="toplink" to="/">
          home_icon
        </Link>
        <Link className="toplink" to="https://wiki.debian.org/Apt">
          Install apt
        </Link>
        <Link
          className="toplink"
          to="https://github.com/apt-run"
          target="_blank"
        >
          Github
        </Link>
        <Link
          className="toplink"
          to="https://github.com/apt-run"
          target="_blank"
        >
          Support us
        </Link>
      </section>
      <div className="header-content">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://debian.org" target="_blank">
          <img src={debianlogo} className="logo debian" alt="Debian logo" />
        </a>
        <a href="https://ubuntu.com" target="_blank">
          <img src={ubuntulogo} className="logo ubuntu" alt="Ubuntu logo" />
        </a>
      </div>
      <h1>apt.run</h1>

      <section className="header-footer">
        <div>
          <Link to="/search">search_icon</Link>
          <input />
        </div>
      </section>
    </section>
  );
};
