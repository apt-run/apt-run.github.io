import "./Header.css"
import reactLogo from "/react.svg"
import debianlogo from "/debian2.svg"
import ubuntulogo from "/ubuntu.svg"
import mintlogo from "/mint.svg"
import viteLogo from "/vite.svg"
// import gopher from "/gopher.svg"

import { Form } from "react-router-dom"
// import { IoIosSearch } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <section className="header">
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

      <Form method="get" action="search" className="header-footer">
        <input
          type="text"
          name="name"
          className="searchinput"
          placeholder="&#xF002; Search apt packages"
          style={{ fontFamily: "Arial, FontAwesome" }}
          autoComplete="on"
        />

        <button style={{ margin: "1rem" }} type="submit">
          Search
        </button>
      </Form>

      {/* <a
        href="https://go.dev"
        target="_blank"
        className="logolink react"
        style={{
          animation: "none",
          padding: "0",
        }}
      >
        <img
          src={gopher}
          className="logo react"
          alt="React logo"
          style={{
            animation: "none",
            padding: "0",
          }}
        />
      </a> */}
    </section>
  )
}
