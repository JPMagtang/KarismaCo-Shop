import { NavLink } from "@remix-run/react";
import karismaCoLogo from "app/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Navigation() {
    return (
        <nav className="nav-bar">
        <div>
            <img src={karismaCoLogo} alt="karisma.co-logo" />
            <h3>Karisma.Co</h3>
        </div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Our Products</NavLink></li>
            <li><NavLink to="/contacts">Contact Us</NavLink></li>
        </ul>
        <ul>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />
        </ul>
      </nav>
    );
}