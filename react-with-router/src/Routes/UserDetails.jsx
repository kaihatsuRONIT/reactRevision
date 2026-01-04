import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"

function UserDetails(){
    const userData = [
        {
            id : 1,
            name:"sam",
            email:"sam@google.com",
            followers: 72
        },
        {
            id : 2,
            name:"john",
            email:"john@zoho.com",
            followers: 93
        },
        {
            id : 3,
            name:"bob",
            email:"bob@outlook.com",
            followers: 123
        },
        {
            id : 4,
            name:"alice",
            email:"alice@microsoft.com",
            followers: 99
        },

    ] //this data can be obtained through APIs but for now i'm using static data

    const params = useParams(); //multiple param ids can be scraped too
    const [currUser,setCurrUser] = useState({});
    function userHandler(){
        const tempUser = userData.filter((item)=>(
            item.id == params.id
        ))
        setCurrUser(tempUser[0]);
    }
    useEffect(()=>{
        userHandler();
    },[])
    return (
        <>
        <h1 style={{textAlign:"center"}}>user details page</h1>
        <div style={{textAlign:"center"}}>
            <h2>Name : {currUser.name}</h2>
            <h2>Email : {currUser.email}</h2>
            <h2>Followers : {currUser.followers}</h2>
            <br />
            <Link to={"/users"}>go to user list page</Link>
        </div>
        </>
    )
}
export default UserDetails