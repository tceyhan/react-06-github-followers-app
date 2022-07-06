import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />   
      </Routes>
    </Router>
  )
}

export default AppRouter
