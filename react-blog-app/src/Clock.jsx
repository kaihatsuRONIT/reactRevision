import { use, useEffect, useState } from "react";

function Clock(){
    const [color,setColor] = useState("Yellow");
    const[time,setTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)
    },[])
    return (
        <>
        <div>
            <h2>choose color</h2>
            <select defaultValue={"yellow"} onChange={(event)=>(setColor(event.target.value))}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </div>
        <div style={{margin:"20px", backgroundColor:"black",color:"white",padding:"30px",width:"100px",borderRadius:"10px"}}>
            <h3 style={{color:`${color}`}}>{time}</h3>
        </div>
        </>
    )
}
export default Clock;