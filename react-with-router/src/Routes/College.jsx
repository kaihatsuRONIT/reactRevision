import { Link, Outlet, Route, Routes } from "react-router"
function College() {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>College Page</h1>
            <div  style={{marginBottom:"15px"}}>
                <Link to={"/"}>go to home page</Link>
            </div>
            <Link className="collegeLink" to={""}>student</Link>
            <Link className="collegeLink" to={"department"}>department</Link>
            <Link className="collegeLink" to={"details"}>details</Link>
            <Outlet />
        </div>
    )
}
export default College