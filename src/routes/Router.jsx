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
import CountryData from "../components/singleCountries/CountryData";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('https://b9a10-server-side-anik98-bh.vercel.app/tourists'),
        },
        {
          path: "/tourists/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=>fetch(`https://b9a10-server-side-anik98-bh.vercel.app/tourists/${params.id}`)
        },
        {
          path: "/allTourists",
          element: <AllTourists></AllTourists>,
          loader: ()=>fetch('https://b9a10-server-side-anik98-bh.vercel.app/tourists')
        },
        {
          path: "/addTourists",
          element: <PrivateRoute><AddTourists></AddTourists></PrivateRoute>,
        },
        {
          path: "/updateTourists/:id",
          element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
          loader: ({params})=>fetch(`https://b9a10-server-side-anik98-bh.vercel.app/tourists/${params.id}`)
        },
        {
          path: "/myList",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        },
        {
          path: "/allTourists/:country",
          element: <CountryData></CountryData>,
          loader: ({params})=>fetch(`https://b9a10-server-side-anik98-bh.vercel.app/allTourists/${params.country}`)
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