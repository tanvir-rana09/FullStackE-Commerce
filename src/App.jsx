
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
]);
function App() {

  return (
    <>
       <RouterProvider router={router} />


    </>
  )
}

export default App
