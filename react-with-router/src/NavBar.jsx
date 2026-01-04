import { Link, Navigate, Outlet } from "react-router";
import './header.css' 
function NavBar() {
    return (
        <div>
            <div className="top">
            <div>
                <Link className="link" to={"/"}><h2>Logo</h2></Link>
            </div>
            <div className="header">
                <ul>
                    <li ><Link to="/" className="link"><h2>Home</h2></Link></li>
                    <li><Link to="/user/about" className="link"><h2>About</h2></Link></li>
                    <li><Link to="/collections" className="link"><h2>Collections</h2></Link></li>
                    <li><Link to="/contact" className="link"><h2>Contact Us</h2></Link></li>
                    <li><Link to="/college" className="link"><h2>College</h2></Link></li>
                    <li><Link to="/users" className="link"><h2>User</h2></Link></li>
                </ul>
            </div>
        </div>
        <Outlet/>
        </div>
    )
}
export default NavBar;