import { Link, Outlet, Route, Routes } from "react-router"
function College() {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>College Details</h1>
            <Link className="collgeLink" to={"student"}>student</Link>
            <Link className="collegeLink" to={"department"}>department</Link>
            <Link className="collegeLink" to={"details"}>details</Link>
            <Outlet />
        </div>
    )
}
export default College