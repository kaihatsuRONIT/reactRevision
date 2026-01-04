import { Link, Outlet } from "react-router"

function UserList(){
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

    ]
    return (
        <>
        <h1>User List Page</h1>
            {
                userData.map((item)=>(
                    <div key={item.id} style={{margin:"20px"}}>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
            {
                userData.map((item)=>(
                    <div key={item.id} style={{margin:"20px"}}>
                        <Link to={`/users/${item.id}/${item.name}`}>{item.name}</Link>
                    </div>
                ))
            }
        </>
    )
}
export default UserList