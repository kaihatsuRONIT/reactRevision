import { useState } from "react";
import Header from "./Header";

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> setCounter(counter+1)}>increase counter</button> 
    </>
  )
}
export default App;  //name can be anything as it sends with DEFAULT