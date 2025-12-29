import { useState } from "react"

function UpdateObjs(){
    const [data,setData] = useState({
        name:"ronit",
        address:{
            city:"Jaipur",
            country:"India"
        }
    })
    const handleName = (val)=>{
        setData({...data,name:val})
    }
    const handleCity = (val)=>{
        setData({...data,address:{...data.address,city:val}})
    }

    return (
        <>
        <h3>update Objects</h3>
        <input type="text" placeholder="Update Name" onChange={(e)=>handleName(e.target.value)}/>
        <input type="text" placeholder="Update City" onChange={(e)=>handleCity(e.target.value)}/>
        <p>Name : {data.name}</p>
        <p>City: {data.address.city}</p>
        <p>Country: {data.address.country}</p>
        </>
    )
}
export default UpdateObjs