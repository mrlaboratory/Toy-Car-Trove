import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddToy from "../pages/AddToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, errorElement: <ErrorPage></ErrorPage> , children: [
            { path: '/', element: <Home></Home> },
            { path: '/addtoy', element: <PrivateRoute><AddToy></AddToy></PrivateRoute> },
            { path: '/mytoys', element: <PrivateRoute> <MyToys></MyToys> </PrivateRoute> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/alltoys', element: <AllToys></AllToys> , loader: () => fetch(`http://localhost:3000/allToys`)},
            { path: '/toy/:id', element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> , loader: ({params}) => fetch(`http://localhost:3000/toy/${params.id}`)},



        ]
    },
])


export default router