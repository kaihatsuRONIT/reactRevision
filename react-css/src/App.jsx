import User from "./User";

function App() {
  const users = [1, 2, 3, 4]
  return (
    <>
      <h1>Inline css with ReactJs</h1>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {
        users.map((item) => {
          return(
            <div key={item}>
              <User />
            </div>
          )
        })
      }
      </div>
    </>
  )
}
export default App;
