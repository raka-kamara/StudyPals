import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CreateAssignment from "../pages/CreateAssignment";
import ErrorPage from "../pages/ErrorPage";
import Assignments from "../pages/Assignments";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/assignments",
        element: <Assignments/>,
      },
      {
        path: "/create-assignments",
        element: <PrivateRoute><CreateAssignment/></PrivateRoute> ,
      },
    ],
  },
]);

export default router;
