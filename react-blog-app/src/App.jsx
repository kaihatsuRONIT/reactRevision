import { useState } from "react";
import Headera, { Header2, ExportedFunc, passKey } from "./Header";
import HeaderNew from "./HeaderNew";
import One from "./One";
import CustomWrapper from "./CustomWrapper";
import CheckBoxes from "./CheckBoxes";
import RadioBox from "./RadioBox";
import Tables from "./Tables";

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
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  function showCredentials(){
    setName("")
    setPassword("")
    setEmail("")
    console.table(name,password,email);
  }
  return (
    <>
      {/* <Headera />
      <Header2/>
      <ExportedFunc/> imported withour default */}
      {/* <Comp/> */}
      {/* <h2>passkey : {passKey}</h2>  {/*as it is not a component, it does not require captial alphabet start*/}
      <button onClick={()=> setIsView(isView+1)}>toggle headerNew</button>
      {
        isView == 0? <h1>Zero</h1>
        :isView == 1? <One name="ronit" user={user} univ="DTU" email="r@k.com" fruits={["apple","mango","banana"]} sayName={sayMyName}/>
        :isView == 2? <CustomWrapper/>
        :isView == 3? <HeaderNew/>
        :<h1>Outta Universe</h1>
      }
      <hr/>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <input type="text" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <button onClick={()=>showCredentials()}>submit</button>
      {/* <h3>{name}</h3> */}
      <br />
      <hr />
      <br />
      <CheckBoxes/>
      <br/>
      <hr />
      <br />
      <RadioBox/>
      <br />
      <hr />
      <br />
      <Tables/>
    </>
  )
}

function Comp(){
  return 10*10+10*20 //it is a component as it start with capital letter and can return anything (values or html code)
}
export default App;  //name can be anything as it sends with DEFAULT