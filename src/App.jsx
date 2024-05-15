import React from "react"
import './App.css'
import Home from "./Pages/Home/Home"
import { Outlet, Route, Routes } from "react-router-dom"
import Tv from "./Pages/Tv/Tv"
import Movies from "./Pages/Movies/Movies"
import Latest from "./Pages/Latest/Latest"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import NotFound from "./Components/NotFound/NotFound"
import SignUp from "./Components/LogIn/SignUp/SignUp"
import SignIn from "./Components/LogIn/SignIn/SignIn"

// import { createBrowserRouter,RouterProvider } from "react-router-dom"
// import { Protected } from "./Pages/Home/Protected"
// import { AuthContext } from "./Components/auth/Context/AuthContext"

function App() {


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<Protected> <Header /> <Outlet /> <Footer /></Protected>,
  //     errorElement:<NotFound />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home/>,
  //       },
  //       {
  //         path: "tv-shows",
  //         element: <Tv />,
  //       },
  //       {
  //         path: "movies",
  //         element: <Movies />,
  //       },
  //       {
  //         path: "latest",
  //         element: <Latest />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/signin",
  //     element: <SignIn />
  //   }, 
  //    {
  //     path: "/signup",
  //     element: <SignUp />
  //   },
  // ]);
  
  return (
  


    
  <Routes>
     
        <Route path="/" element={<><Header /> <Outlet /> <Footer /> </>}>
                
                <Route path="/"  element={ <Home />} />
                <Route path='tv-shows'  element={<Tv />} />
                <Route path='movies'  element={<Movies />} />
                <Route path='latest' element={<Latest />} />
                <Route path='tv-shows'element={<Tv />} />
          
        </Route>

        <Route path='*' element={<NotFound />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
        
       


    
   </Routes>
      
    
   
  )
}

export default App
