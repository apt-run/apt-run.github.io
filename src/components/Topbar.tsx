import { Link } from "react-router-dom"
import aptlogo from "/apttest.png"
import './Topbar.css'

export default function Topbar() {
  return (
	<section className="topbar">
	<Link className="toplink apt" to="/">
	  <img src={aptlogo} alt="" style={{ width: "3rem", height: "3rem" }} />
	</Link>
	<Link 
	  className="toplink" 
	  to="https://wiki.debian.org/Apt" 
 	  target="_blank">
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
  )
}
