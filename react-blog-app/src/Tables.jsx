function Tables(){
    const userData = [
        {
            id:"1",
            name:"rk",
            email:"rk@google.com",
            isLoggedIn:true
        },
        {
            id:"2",
            name:"sk",
            email:"sk@google.com",
            isLoggedIn:true
        },
        {
            id:"3",
            name:"ak",
            email:"ak@google.com",
            isLoggedIn:false
        },
        {
            id:"4",
            name:"github",
            email:"gt@google.com",
            isLoggedIn:false
        }
    ]
    return (
        <>
        <div>
            <h1>created with loop over jsx</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>IsLoggedIn</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=> (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isLoggedIn === true ? "true" : "false"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br />
            <hr />
            <br />
            <h1>created manually </h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Emaik</td>
                        <td>IsLoggedIn</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>rk</td>
                        <td>rk@google.com</td>
                        <td>true</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>github</td>
                        <td>github@google.com</td>
                        <td>false</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>fb</td>
                        <td>fb@google.com</td>
                        <td>false</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>sk</td>
                        <td>sk@google.com</td>
                        <td>true</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Tables;