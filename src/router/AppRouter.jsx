import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/about/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/NavBar";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />   
        <Route path="*" element={<NotFound/>} />   
      </Routes>
    </Router>
  )
}

export default AppRouter
