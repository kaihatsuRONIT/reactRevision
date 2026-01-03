import { Link } from "react-router";

function NavBar() {
    return (
        <div>
            <div>
                <Link className="header"><h1>Logo</h1></Link>
            </div>
            <div>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About</h1></Link>
                <Link to="/collections"><h1>Collections</h1></Link>
                <Link to="/contact"><h1>Contact Us</h1></Link>
            </div>
        </div>
    )
}
export default NavBar;