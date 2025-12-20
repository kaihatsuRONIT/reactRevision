import { useState } from "react";

function CheckBoxes(){
    
    const [choices,setChoices] = useState([]);

    function choiceHandler(event){
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setChoices([...choices,event.target.value]);
        }
        else{
            setChoices(choices.filter((item)=>item!=event.target.value))
        }
        
    }
    console.log(choices)
    return (
        <>
        <h1> Handle checkboxes</h1>
        <p>select your skills</p>
        <div>
            <input id="ip1" type="checkbox" value="PHP" onChange={choiceHandler}/><label htmlFor="ip1">PHP</label>
            <br />
            <input id="ip2" type="checkbox" value="JS" onChange={choiceHandler}/><label htmlFor="ip2">JS</label>
            <br />
            <input id="ip3" type="checkbox" value="JAVA" onChange={choiceHandler}/><label htmlFor="ip3">JAVA</label>
        </div>
        <h1>{choices.toString()}</h1>
        </>
    )
}
export default CheckBoxes;