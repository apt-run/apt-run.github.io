import reactLogo from "/react.svg";
import debianlogo from "/debian2.svg";
import ubuntulogo from "/ubuntu.svg";
import mintlogo from "/mint.svg";
import aptlogo from "/apttest.png";
import viteLogo from "/vite.svg";

import "./Header.css";
import { Link } from "react-router-dom";

// import { IoIosSearch } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";

export const Header = () => {
  return (
    <section className="header">
      <section className="topbar">
        <Link className="toplink apt" to="/">
          <img src={aptlogo} alt="" style={{ width: "3rem", height: "3rem" }} />
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
        <a href="https://vitejs.dev" target="_blank" className="logolink">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="logolink react">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://debian.org"
          target="_blank"
          className="logolink debian"
        >
          <img src={debianlogo} className="logo debian" alt="Debian logo" />
        </a>
        <a
          href="https://ubuntu.com"
          target="_blank"
          className="logolink ubuntu"
        >
          <img src={ubuntulogo} className="logo ubuntu" alt="Ubuntu logo" />
        </a>
        <a
          href="https://linuxmint.com"
          target="_blank"
          className="logolink mint"
        >
          <img src={mintlogo} className="logo mint" alt="Mint logo" />
        </a>
      </div>

      <h1>apt.run</h1>
      <form className="header-footer" action="/search" method="get">
        <input
          className="searchinput"
          placeholder="&#xF002; Search apt pacckages"
          style={{ fontFamily: "Arial, FontAwesome" }}
          autoComplete="on"
          autoFocus
          // autoFocus
        />
      </form>

      <form action="/package" method="get">
        <input
          type="submit"
          value="Go to /package"
          name="Submit"
          id="frm1_submit"
        />
      </form>
    </section>
  );
};
