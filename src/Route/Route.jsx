import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Room from "../Pages/Room/Room";
import MyRooms from "../Pages/MyRooms.jsx/MyRooms";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Room></Room>,
      },
      {
        path: "/myRooms",
        element: <PrivateRoute><MyRooms></MyRooms></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
