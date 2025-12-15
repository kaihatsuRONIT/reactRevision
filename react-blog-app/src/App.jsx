import { useState } from "react";
import Headera, { Header2, ExportedFunc, passKey } from "./Header";

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <>
      <Headera />
      <Header2/>
      <ExportedFunc/> {/*imported withour default*/}
      <Comp/>
      <h1>Hello world</h1>
      <h2>Counter : {counter}</h2>
      <h2>passkey : {passKey}</h2>  {/*as it is not a component, it does not require captial alphabet start*/}
      <button onClick={()=> setCounter(counter+1)}>increase counter</button> 
    </>
  )
}

function Comp(){
  return 10*10+10*20 //it is a component as it start with capital letter and can return anything (values or html code)
}
export default App;  //name can be anything as it sends with DEFAULT