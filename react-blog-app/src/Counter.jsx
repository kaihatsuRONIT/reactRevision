import { useEffect } from "react";

function Counter({counter,data}){
    useEffect(()=>{
        console.log("mount phase")
    },[])
    useEffect(()=>{
        console.log("update phase")
    },[counter])
    useEffect(()=>{
        return ()=>{
            console.log("unmount phase")
        }
    },[])
    return (
        <>
          <h3>counter: {counter}</h3>
          <h3>Data : {data}</h3>
        </>
    )
}
export default Counter;