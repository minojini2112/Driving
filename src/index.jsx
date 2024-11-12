import React from "react" 
import ReactDOM from "react-dom"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
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

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    Children:[
      {
      element:<Home/>,
      path:"/",
      },
      {
        element:<About/>,
        path:"/about",
      },
      {
        element:<Contact/>,
        path:"/contact",
      },
      {
        element:<Gallery/>,
        path:"/Gallery",
      },
      {
        element:<Courses/>,
        path:"/courses",
      },
      {
        element:<Instructors/>,
        path:"/instructors",
      },
      {
        element:<Login/>,
        path:"/login",
      },
      {
        element:<Book/>,
        path:"/book",
      },    
  ]
  }
])

root.render(<RouterProvider router={router}/>)