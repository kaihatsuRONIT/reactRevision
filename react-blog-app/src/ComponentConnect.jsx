import { useState } from "react";
import Setter from "./Setter";
import Shower from "./Shower";

function ComponentConnect(){
    const [counter,setCounter] = useState(0);
    const [currUser,setCurrUser] = useState("")
    return(
        <>
        <h2>Used Two Comps to change a state</h2>
        <Setter changeCounter={setCounter} counter={counter} setUser={setCurrUser}/>
        <Shower counter={counter} user={currUser}/>
        </>
    )
}
export default ComponentConnect;