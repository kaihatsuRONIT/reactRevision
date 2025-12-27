import { useRef, useState } from "react";

function Uncontrolled() {
    const inputRef = useRef(null)
    const h3Ref = useRef(null)
    function inputRefHandler(e) {
        e.preventDefault();
        inputRef.current.focus()
        inputRef.current.style.color = "red"
        h3Ref.current.style.color = "blue"
        console.log(inputRef.current.value)
    }
    function tempHandler() {
        const elem = document.querySelector(".inpt")
        document.querySelector(".ech3").style.color = "green"
        elem.style.color = "red"
        elem.focus()
    }
    return (
        <>
            <h1>Using useRef hook</h1>
            <form action="" method="POST" onSubmit={(e) => inputRefHandler(e)}>
                <h3 ref={h3Ref}>Temporary h3</h3>
                <input ref={inputRef} type="text" placeholder="Enter your name" />
                <button>submit</button>
            </form>
            <br />
            <br />
            <div>
                <h1>Using querySelector or any method</h1>
                <input className="inpt" placeholder="Enter your name" type="text" />
                <h3 className="ech3">Temporary h3</h3>
                <button onClick={tempHandler}>toggle changes </button>
            </div>
        </>
    )
}
export default Uncontrolled;