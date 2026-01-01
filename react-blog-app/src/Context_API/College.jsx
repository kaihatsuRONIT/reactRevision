import { useContext, useState } from "react";
import ClassComponent from "./ClassComponent";
import { SubjectContext } from "./ContextData";

function College() {
    const [subject, setSubject] = useState("")
    return (
        <>
            <div style={{ backgroundColor: "yellow", padding: 10 }}>
                <SubjectContext.Provider value={subject}>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option value="">Select a value</option>
                        <option value="English">English</option>
                        <option value="Maths">Maths</option>
                        <option value="Polity">Polity</option>
                        <option value="History">History</option>
                        <option value="Science">Science</option>
                    </select>
                    <h1>College</h1>
                    <ClassComponent />
                </SubjectContext.Provider>
            </div>
            <button onClick={() => setSubject("")}>clear</button>
        </>
    )
}
export default College;