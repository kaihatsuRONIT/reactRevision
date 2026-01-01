import { useContext } from "react";
import ClassComponent from "./ClassComponent";
import { SubjectContext } from "./ContextData";

function College(){
    return (
        <div style={{backgroundColor: "yellow", padding:10}}>
            <SubjectContext.Provider value="Science">
                <h1>College</h1>
                <ClassComponent/>
            </SubjectContext.Provider>
        </div>
    )
}
export default College;