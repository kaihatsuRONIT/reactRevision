import { useState } from "react";
import User from "./User";

function App() {
  const users = [1, 2, 3, 4]
  const [cardStyle,setCardStyle] = useState({
        width: "200px",
        border: "1px solid #828282",
        boxShadow: "2px 2px 3px 4px #dedede",
        margin:"10px"
    });
    const updateTheme = (bgColor,textColor)=>{
        setCardStyle({...cardStyle,backgroundColor:bgColor,color:textColor})
    }
  return (
    <>
      <h1>Inline css with ReactJs</h1>
      <button onClick={()=> updateTheme("#2f2e2e","yellow")}>gray</button>
      <button onClick={()=> updateTheme("white","black")}>default</button>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {
        users.map((item) => {
          return(
            <div key={item}>
              <User cardStyle={cardStyle}/>
            </div>
          )
        })
      }
      </div>
    </>
  )
}
export default App;
