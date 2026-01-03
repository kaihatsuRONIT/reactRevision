import { Link, Navigate } from "react-router";
import './header.css' 
function NavBar() {
    return (
        <div className="top">
            <div>
                <Link className="link" to={"/"}><h2>Logo</h2></Link>
            </div>
            <div className="header">
                <ul>
                    <li ><Link to="/" className="link"><h2>Home</h2></Link></li>
                    <li><Link to="/about" className="link"><h2>About</h2></Link></li>
                    <li><Link to="/collections" className="link"><h2>Collections</h2></Link></li>
                    <li><Link to="/contact" className="link"><h2>Contact Us</h2></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;