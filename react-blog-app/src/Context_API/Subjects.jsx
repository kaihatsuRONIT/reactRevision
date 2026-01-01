import { useContext } from "react"
import { SubjectContext } from "./ContextData"

function Subjects(){
    const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:"brown",padding:10}}>
        <h1 >Subjects : {subject}</h1>
        </div>
    )
}
export default Subjects