import { Navbar } from "flowbite-react";
import { Link} from "react-router-dom";
import "./navbar.scss"

export function CommenNavbar() {
    return (
        <Navbar fluid rounded className="navbar">
            <Navbar.Brand>
                <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link className="link font-bold" to="/">Home</Link>
                <Link className="link font-bold" to="/foodItems">Food Items</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
