import { use, useState } from "react";

function DerivedState(){
    //here i used the concept of derived states, where creating uneccessary states can cause performance issues so i used variables which stores changed states
    const [user,setUser] = useState("");
    const [userList,setUserList] = useState([]);
    const handleUser = ()=>{
        setUserList([...userList,user]);
        setUser("")

    }
    const unique = [...new Set(userList)];
    const total = userList.length
    const lastUser = userList[userList.length-1]
    const lastUniqueUser = unique[unique.length-1]
    const uniqueUsers = unique.length
    return(
        <>
        <h3>Total Users : {total}</h3>
        <h3>Last User: {lastUser}</h3>
        <h3>Last unique user : {lastUniqueUser}</h3>
        <h3>unique Users: {uniqueUsers}</h3>
        <input value={user} onChange={(event)=>setUser(event.target.value)} type="text" placeholder="Enter your name"/>
        <button onClick={handleUser}>add</button>
        {
            userList.map((user,index)=>(
                <div key={index}>
                    <p>{user}</p>
                </div>
            ))
        }
        </>
    )
}
export default DerivedState;