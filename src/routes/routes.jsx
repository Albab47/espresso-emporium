import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AddCoffeePage from "../pages/AddCoffeePage";
import ProductDetails from "../components/ProductDetails";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/coffees/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffeePage />,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
    ],
  },
]);

export default router;
