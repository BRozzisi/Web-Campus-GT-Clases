import { NavLink } from "react-router-dom"
import './NavBar.css'

export function NavBar() {
    return (
        <nav>
            <NavLink className="NavLink" to="/">Principal</NavLink>
            <NavLink className="NavLink" to="/calendario/">Calendario</NavLink>
            <NavLink className="NavLink" to="/about/">Sobre Nosotros</NavLink>
        </nav>
    )
}