import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCartShopping, 
    faUser, 
    faSearch 
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "@remix-run/react";

import karismaCoLogo from "app/assets/logo.png";
import Headliner from "./Headliner";


export default function Navigation() {
    return (
        <div className="fixed w-full z-50">
            <Headliner />
            <nav 
                className="nav-bar h-100px w-full bg-white-chalk flex items-center justify-between px-100px overflow-hidden"
            >
                <div className="flex list-none gap-30px h-5/6 items-center text-lg">
                    <img className="h-full" src={karismaCoLogo} alt="karisma.co logo" />
                    <h3 className="text-2xl text-gold-digger">Karisma.Co</h3>
                </div>
                <ul className="flex list-none gap-30px h-5/6 items-center text-xl">
                    <li><NavLink className="hover:text-gold-digger ease-in-out duration-300" to="/">Home</NavLink></li>
                    <li><NavLink className="hover:text-gold-digger ease-in-out duration-300" to="/products">Our Products</NavLink></li>
                    <li><NavLink className="hover:text-gold-digger ease-in-out duration-300" to="/contacts">Contact Us</NavLink></li>
                </ul>
                <ul className="flex list-none gap-30px h-5/6 items-center text-xl">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCartShopping} />
                </ul>
            </nav>
        </div>
    );
}