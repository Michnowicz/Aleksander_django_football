import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    

    return(
        <nav className="Navbar">
            <Link to="/backoffice">Backoffice</Link>
        </nav>
    )
}