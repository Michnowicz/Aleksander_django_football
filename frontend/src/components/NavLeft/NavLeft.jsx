import "./NavLeft.css"
import { Link } from "react-router-dom"

export default function NavLeft() {
    

    return(
        <nav className="NavLeft">
            <div className="nl-link">
                <Link to="backoffice/players">Players</Link>
            </div>
            <div className="nl-link">
                <Link to="backoffice/teams">Teams</Link>
            </div>

        </nav>
    )
}