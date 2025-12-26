import { useRef, useState } from "react";

function Uncontrolled(){
    const inputRef = useRef(null)
    const h1Ref = useRef(null)
    function inputRefHandler(){
        inputRef.current.focus()
        inputRef.current.style.color = "red"
        h1Ref.current.style.color = "blue"
    }
    return (
        <>
        <input ref={inputRef} placeholder="Enter your name" type="text"/>
        <h1 ref={h1Ref}>Temporary Project</h1>
        <button onClick={inputRefHandler}>toggle inputRef </button>
        </>
    )
}
export default Uncontrolled;