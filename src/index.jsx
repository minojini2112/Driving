import React from "react" 
import ReactDOM from "react-dom"
import {Outlet,HashRouter,Route,Routes} from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Book from "./Components/Book/Book"
import Courses from "./Components/Courses/Courses"
import Contact from "./Components/Contact/Contact"
import Gallery from "./Components/Gallery/Gallery"
import Login from "./Components/Login/Login"
import Instructors from "./Components/Instructors/Instructors"


const root=ReactDOM.createRoot(document.getElementById("root"))

const App=()=>{
  return(
    <>
    <Header/>
     <Outlet/>
     <Footer/>
    </>
  );
}

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="book" element={<Book />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="courses" element={<Courses/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="instructors" element={<Instructors/>} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  </HashRouter>
);
