import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div>
      <ToastContainer>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      </ToastContainer>
    </div>
  )
}

export default App