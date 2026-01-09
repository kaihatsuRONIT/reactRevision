import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterReducer";
import { useState } from "react";
function App(){
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()
  const [amt,setAmt] = useState(0);
  return (
    <>
    <h1>{count}</h1>

    <button onClick={()=>{
      dispatch(increment())
    }}>Increment</button>

    <button onClick={()=>{
      dispatch(decrement())
    }}>decrement</button>

    <input type="number" onChange={(e)=> setAmt(e.target.value)}/>
    <button onClick={()=>{
      dispatch(incrementByAmount(Number (amt)))
    }}>increment by amount</button>
    </>
  )
}
export default App