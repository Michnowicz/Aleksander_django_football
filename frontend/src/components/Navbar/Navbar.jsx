import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/coat.png"

export default function Navbar() {
    

    return(
        <nav className="Navbar">
            <div className="navLogo">
                <img src={logo} alt="" />
                <h2>BIF</h2>
            </div>
            <div className="navLinks">
                <div className="navLink">
                    <Link to="../">Home</Link>
                    <Link to="../teams">Teams</Link>
                    <Link to="../players">Players</Link>
                    <Link to="../backoffice/players">Dashboard</Link>
                </div>

            </div>
            <div className="search">

            </div>
        </nav>
    )
}