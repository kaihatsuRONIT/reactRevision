import { useEffect } from "react";

function User({ user, color }) {
    return (
        <>
            <div style={{ height: "200px", width: "300px", border: `2px solid ${color}`, color:`${color}`, margin:"10px",padding:"20px"}}>
                <h3>name : {user.name}</h3>
                <h3>email : {user.email}</h3>
                <h3>loggedInStatus : {user.isLoggedIn === true ? "true" : "false"}</h3>
            </div>
        </>
    )
}
export default User;