import { Component, useState } from "react";
import Header from "./Header";

function App() {
  const [counter,setCounter] = useState(0);
  return (
    <>
      <Header />
      <Comp/>
      <h1>Hello world</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={()=> setCounter(counter+1)}>increase counter</button> 
    </>
  )
}

function Comp(){
  return 10*10+10*20 //it is a component as it start with capital letter and can return anything (values or html code)
}
export default App;  //name can be anything as it sends with DEFAULT