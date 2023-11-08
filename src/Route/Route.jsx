import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Room from "../Pages/Room/Room";
import MyRooms from "../Pages/MyRooms.jsx/MyRooms";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Room/Details";
import About from "../Pages/About/About";
import Faq from "../Pages/Faq/Faq";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Room></Room>,
        loader: ()=> fetch('http://localhost:5000/hotels')
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
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)
      },
    ],
  },
]);

export default Route;
