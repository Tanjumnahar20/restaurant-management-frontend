import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/home' ,
          element:<Home></Home> ,
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ],
    },
  ]);


export default router;