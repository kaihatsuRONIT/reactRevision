import { useState } from "react";
import Headera, { Header2, ExportedFunc, passKey } from "./Header";
import HeaderNew from "./HeaderNew";
import One from "./One";
import CustomWrapper from "./CustomWrapper";

function App() {
  const [counter,setCounter] = useState(0);
  const [isView,setIsView] = useState(0);
  const user = {
    name:"hello",
    age:29
  }
  function sayMyName(user){
    console.log(user)
  }
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
      <br />
      <br />
      <br />
      <button onClick={()=> setIsView(isView+1)}>toggle headerNew</button>
      {
        isView == 0? <h1>Zero</h1>
        :isView == 1? <One name="ronit" user={user} univ="DTU" email="r@k.com" fruits={["apple","mango","banana"]} sayName={sayMyName}/>
        :isView == 2? <CustomWrapper/>
        :isView == 3? <HeaderNew/>
        :<h1>Outta Universe</h1>
      }
    </>
  )
}

function Comp(){
  return 10*10+10*20 //it is a component as it start with capital letter and can return anything (values or html code)
}
export default App;  //name can be anything as it sends with DEFAULT