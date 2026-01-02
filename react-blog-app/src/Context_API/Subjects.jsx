import { useContext } from "react"
import { ScoreContext, SubjectContext } from "./ContextData"

function Subjects(){
    const subject = useContext(SubjectContext);
    const score = useContext(ScoreContext);
    return (
        <div style={{backgroundColor:"brown",padding:10}}>
        <h1 >Subjects : {subject}</h1>
        <h2>Target Score : {score}</h2>
        </div>
    )
}
export default Subjects