import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <section className="topbar">
        <Link to="/">home_icon</Link>
        <Link to="https://wiki.debian.org/Apt">Install apt</Link>
        <Link to="https://github.com/apt-run" target="_blank">
          Support us
        </Link>
        <Link to="https://github.com/apt-run" target="_blank">
          Github
        </Link>
      </section>
      <div className="header-content">
        <h1>apt.run</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <section className="header-footer">
        <div>
          <Link to="/search">search_icon</Link>
          <input />
        </div>
      </section>
    </section>
  );
};
