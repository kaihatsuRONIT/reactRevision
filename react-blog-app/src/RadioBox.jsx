import { useState } from "react"

function RadioBox(){
    const [gender,setGender] = useState("Male")
    const [city,setCity] = useState("");
    function radioBoxHandler(event){
        setGender(event.target.value)
    }
    function cityHandler(event){
        console.log(event.target.value)
        setCity(event.target.value)
    }
    return(
        <>
        <h1>RadioBox Exercise</h1>
        <p>select your gender</p>
        <input id="male" type="radio" name="gender" value={"Male"} onChange={radioBoxHandler} checked={gender=="Male"}/><label htmlFor="male">Male</label>
        <input id="female" type="radio" name="gender" value={"Female"} onChange={radioBoxHandler} checked={gender=="Female"}/><label htmlFor="female">Female</label>
        <h2>selected gender : {gender}</h2>
        <br />
        <select  onChange={cityHandler} defaultValue={"delhi"}>
            <option value="delhi">Delhi</option>
            <option value="gurgaon">Gurugaon</option>
            <option value="noida">Noida</option>
        </select>
        <h2>Selected City : {city}</h2>
        </>
    )
}
export default RadioBox