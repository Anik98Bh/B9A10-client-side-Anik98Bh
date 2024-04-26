import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
import AddTourists from "../components/addTourists/AddTourists";
import AllTourists from "../components/allTourists/AllTourists";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/allTourists",
          element: <AllTourists></AllTourists>,
        },
        {
          path: "/addTourists",
          element: <AddTourists></AddTourists>,
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