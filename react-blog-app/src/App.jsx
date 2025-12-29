import { useEffect, useState } from "react";
import Headera, { Header2, ExportedFunc, passKey } from "./Header";
import HeaderNew from "./HeaderNew";
import One from "./One";
import CustomWrapper from "./CustomWrapper";
import CheckBoxes from "./CheckBoxes";
import RadioBox from "./RadioBox";
import Tables from "./Tables";
import User from "./User";
import Clock from "./Clock";
import Counter from "./Counter";
import DerivedState from "./DerivedState";

function App() {
  const [counter, setCounter] = useState(0);
  const [data,setData] = useState(0);
  const [isView, setIsView] = useState(0);
  const [display, setDisplay] = useState(false);
  function sayMyName(user) {
    console.log(user)
  }
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function showCredentials() {
    setName("")
    setPassword("")
    setEmail("")
    console.table(name, password, email);
  }
  const userData = [
    {
      id: "1",
      name: "rk",
      email: "rk@google.com",
      isLoggedIn: true
    },
    {
      id: "2",
      name: "sk",
      email: "sk@google.com",
      isLoggedIn: true
    },
    {
      id: "3",
      name: "ak",
      email: "ak@google.com",
      isLoggedIn: false
    },
    {
      id: "4",
      name: "github",
      email: "gt@google.com",
      isLoggedIn: false
    }
  ]
  const color = ["red", "green", "blue", "orange"]
  return (
    <>
      {/* <Headera />
      <Header2/>
      <ExportedFunc/> imported withour default */}
      {/* <Comp/> */}
      {/* <h2>passkey : {passKey}</h2>  {/*as it is not a component, it does not require captial alphabet start*/}
      <button onClick={() => setIsView(isView + 1)}>toggle headerNew</button>
      {
        isView == 0 ? <h1>Zero</h1>
          : isView == 1 ? <One name="ronit" univ="DTU" email="r@k.com" fruits={["apple", "mango", "banana"]} sayName={sayMyName} />
            : isView == 2 ? <CustomWrapper />
              : isView == 3 ? <HeaderNew />
                : <h1>Outta Universe</h1>
      }
      <hr />
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => showCredentials()}>submit</button>
      {/* <h3>{name}</h3> */}
      <br />
      <hr />
      <br />
      <CheckBoxes />
      <br />
      <hr />
      <br />
      <RadioBox />
      <br />
      <hr />
      <br />
      <Tables userData={userData} />
      <br />
      <hr />
      <br />
      {
        userData.map((currUser) => (
          <div key={currUser.id}>
            <User user={currUser} color={color[currUser.id - 1]} />
          </div>
        ))
      }
      <br />
      <hr />
      <br />
      <Clock />
      <br />
      {
        display ? <Counter counter={counter} data={data} /> : null
      }
      <button onClick={()=> setCounter(counter+1)}>update Counter</button>
      <button onClick={()=> setData(data+1)}>update Data</button>
      <button onClick={()=> setDisplay(!display)}>toggle</button>
      <br />
      <br />
      <hr />
      <br />
      <DerivedState/>
    </>
  )
}

function Comp() {
  return 10 * 10 + 10 * 20 //it is a component as it start with capital letter and can return anything (values or html code)
}
export default App;  //name can be anything as it sends with DEFAULT