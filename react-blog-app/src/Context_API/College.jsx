import { useContext, useState } from "react";
import ClassComponent from "./ClassComponent";
import { ScoreContext, SubjectContext } from "./ContextData";

function College() {
    const [subject, setSubject] = useState("")
    const [score, setScore] = useState(0)

    return (
        <>
            <div style={{ backgroundColor: "yellow", padding: 10 }}>
                <SubjectContext.Provider value={subject}>
                    <ScoreContext.Provider value={score}>
                        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                            <option value="">Select a value</option>
                            <option value="English">English</option>
                            <option value="Maths">Maths</option>
                            <option value="Polity">Polity</option>
                            <option value="History">History</option>
                            <option value="Science">Science</option>
                        </select>
                        <br />
                        <input type="text" value={score} onChange={(e)=>setScore(e.target.value)}/>
                        <h1>College</h1>
                        <ClassComponent />
                    </ScoreContext.Provider>
                </SubjectContext.Provider>
            </div>
            <button onClick={() => {
                setSubject("")
                setScore(0)
            }}>clear</button>
        </>
    )
}
export default College;