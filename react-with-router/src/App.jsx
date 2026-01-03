import { Link, Route, Routes } from "react-router"
import NavBar from "./NavBar"
import Home from "./Routes/Home"
import About from "./Routes/About"
import Collections from "./Routes/Collections"
import Contact from "./Routes/Contact"

function App(){
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/collections" element={<Collections/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}
export default App