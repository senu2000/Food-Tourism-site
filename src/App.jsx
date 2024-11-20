import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import FoodItems from "./pages/foodItems/FoodItems.jsx";
import FoodDescription from "./pages/foodDescription/FoodDescription.jsx";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/foodItems",
            element: <FoodItems/>,
        },
        {
            path: "/foodDescription",
            element: <FoodDescription/>,
        },
    ]);

  return (
      <>
          <RouterProvider router={router} />
      </>
  )
}

export default App
