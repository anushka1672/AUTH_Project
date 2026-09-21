import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import Signup from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
