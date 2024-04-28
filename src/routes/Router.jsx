import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
import AddTourists from "../components/addTourists/AddTourists";
import AllTourists from "../components/allTourists/AllTourists";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MyList from "./myList/MyList";
import Details from "../pages/viewDetails/Details";
import UpdatePage from "../pages/updatePage/UpdatePage";
import Countries from "../components/countries/Countries";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('http://localhost:5000/tourists'),
        },
        {
          path: "/tourists/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/tourists/${params.id}`)
        },
        {
          path: "/allTourists",
          element: <AllTourists></AllTourists>,
          loader: ()=>fetch('http://localhost:5000/tourists')
        },
        {
          path: "/addTourists",
          element: <PrivateRoute><AddTourists></AddTourists></PrivateRoute>,
        },
        // {
        //   path: "/updateTourists/:id",
        //   element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        //   loader: ({params})=>fetch(`http://localhost:5000/tourists/${params.id}`)
        // },
        {
          path: "/myList",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
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

  export default router;