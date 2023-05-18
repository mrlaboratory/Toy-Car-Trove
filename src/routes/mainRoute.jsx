import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddCars from "../pages/AddCars";



const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, errorElement: <div>Page not found </div>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/addcars', element: <AddCars></AddCars> },



        ]
    },
])


export default router