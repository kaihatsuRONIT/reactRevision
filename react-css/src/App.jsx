import { useRef, useState } from "react";
import User from "./User";
import './css/user.css' //any css file once imported, can be used literally anywhere
import Uncontrolled from "./Uncontrolled";
import ForwardRef from "./ForwardRef";
import FormComponent from "./FormComponent";
import Loading from "./Loading";

function App() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [cardStyle, setCardStyle] = useState({
    width: "200px",
    border: "1px solid #828282",
    boxShadow: "2px 2px 3px 4px #dedede",
    margin: "10px"
  });
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor })
  }
  const inputRef = useRef(null);
  const inputRefHandler = ()=>{
    inputRef.current.focus()
    inputRef.current.value = "YOU'RE DEADDDD!!!"
    inputRef.current.style.color= "red"
  }
  return (
    <>
      <h1 className="myheading">Inline css with ReactJs</h1>
      <button onClick={() => updateTheme("#2f2e2e", "yellow")}>gray</button>
      <button onClick={() => updateTheme("white", "black")}>default</button>
      <div className="userHead">
        {
          users.map((item) => {
            return (
              <div key={item}>
                <User cardStyle={cardStyle} />
              </div>
            )
          })
        }
      </div>
      <br />
      <br />
      <hr />
      <br />
      <Uncontrolled />
      <br />
      <hr />
      <h3>implementing forward ref</h3>
      <ForwardRef ref={inputRef} />
      <button onClick={()=>inputRefHandler()}>use above component</button>
      <br />
      <br />
      <hr />
      <FormComponent/>
      <Loading/>
    </>
  )
}
export default App;
