import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "./counterReducer";
function App(){
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()
  return (
    <>
    <h1>{count}</h1>

    <button onClick={()=>{
      dispatch(increment())
    }}>Increment</button>

    <button onClick={()=>{
      dispatch(decrement())
    }}>decrement</button>
    </>
  )
}
export default App