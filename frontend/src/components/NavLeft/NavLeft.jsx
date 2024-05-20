import "./NavLeft.css"
import { Link } from "react-router-dom"
import logo from "../../assets/coat.png"

export default function NavLeft() {
    

    return(
        <nav className="NavLeft">
            <div className="navLogo">
                <img src={logo} alt="" />
            </div>
            <div className="nl-link">
                <Link to="../">Home</Link>
            </div>
            <div className="nl-link">
                <Link to="../backoffice/players">Players</Link>
            </div>
            <div className="nl-link">
                <Link to="../backoffice/teams">Teams</Link>
            </div>

        </nav>
    )
}