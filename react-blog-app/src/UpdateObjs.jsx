import { useState } from "react"

function UpdateObjs(){
    const [index,setIndex] = useState("");
    const [nameValue,setNameValue] = useState("");
    const [dataDetails,setDataDetails] = useState([]);
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
    const handleArrayValue = (val,idx)=>{
        const newArr = [...dataDetails]
        newArr[idx] = val;
        setDataDetails(newArr);
    }
    console.log(dataDetails)
    return (
        <>
        <h3>update Objects</h3>
        <input type="text" placeholder="Update Name" onChange={(e)=>handleName(e.target.value)}/>
        <input type="text" placeholder="Update City" onChange={(e)=>handleCity(e.target.value)}/>
        <p>Name : {data.name}</p>
        <p>City: {data.address.city}</p>
        <p>Country: {data.address.country}</p>
        <br />
        <br />
        <hr />
        <h3>update arrays</h3>
        <input type="text" placeholder="Update name at given index" value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
        <input type="text" placeholder="enter index" value={index} onChange={(e)=>setIndex(e.target.value)}/>
        <button onClick={()=>handleArrayValue(nameValue,index)}>set</button>
        {
            dataDetails.map((item,index)=>(
                <p key={index}>{item}</p>
            ))
        }
        </>
    )
}
export default UpdateObjs