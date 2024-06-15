
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/Signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />


    </>
  )
}

export default App
