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

import { Form } from "react-router-dom";

import { logMovies } from "../utils/fetch.ts";

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

      <div className="title">apt.run</div>
      <Form method="get" action="/search" className="header-footer">
        <input
          className="searchinput"
          placeholder="&#xF002; Search apt packages"
          style={{ fontFamily: "Arial, FontAwesome" }}
          autoComplete="on"
          autoFocus
        />
      </Form>
      <Link style={{ border: "none" }} to={"/package"}>
        <button
          style={{ margin: "1rem" }}
          autoFocus
          onClick={() => {
            console.log("Starting Request...");

            // fetch("https://sources.debian.org/patches/api/prefix/libz/")
            //   .then((response) => {
            //     if (!response.ok) {
            //       console.log(response.status);
            //       console.log(response.statusText);
            //       throw new Error("Network response was not ok");
            //     }
            //     return response.json();
            //   })
            //   .then((data) => console.log(data))
            //   .catch((error) =>
            //     console.error("Error fetching package information:", error)
            //   );
          }}
        >
          /package
        </button>
      </Link>
    </section>
  );
};
