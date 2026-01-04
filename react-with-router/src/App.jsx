import { Route, Routes } from "react-router"
import NavBar from "./NavBar"
import Home from "./Routes/Home"
import About from "./Routes/About"
import Collections from "./Routes/Collections"
import Contact from "./Routes/Contact"
import PageNotFound from "./PageNotFound"
import College from "./Routes/College"
import UserList from "./Routes/UserList"
import UserDetails from "./Routes/UserDetails"

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="user">
            <Route path="about" element={<About />} />
          </Route>
          <Route path="collections" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/users" element={<UserList/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
        </Route>
        <Route path="college" element={<College />}>
          <Route index element={<h1>Student Details</h1>} />
          <Route path="department" element={<h1>Department Details</h1>} />
          <Route path="details" element={<h1>College Details</h1>} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
export default App