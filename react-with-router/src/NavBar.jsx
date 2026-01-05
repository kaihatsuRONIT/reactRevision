import { Link, Navigate, NavLink, Outlet } from "react-router";
import './header.css' 
function NavBar() {
    return (
        <div>
            <div className="top">
            <div>
                <NavLink className={({isActive}) => isActive ? "custom-active link" : " link" } to={"/"}><h2>Logo</h2></NavLink>
            </div>
            <div className="header">
                <ul>
                    <li ><NavLink to="/" className="link"><h2>Home</h2></NavLink></li>
                    <li><NavLink to="/user/about" className="link"><h2>About</h2></NavLink></li>
                    <li><NavLink to="/collections" className="link"><h2>Collections</h2></NavLink></li>
                    <li><NavLink to="/contact" className="link"><h2>Contact Us</h2></NavLink></li>
                    <li><NavLink to="/college" className="link"><h2>College</h2></NavLink></li>
                    <li><NavLink to="/users" className="link"><h2>User</h2></NavLink></li>
                </ul>
            </div>
        </div>
        <Outlet/>
        </div>
    )
}
export default NavBar;