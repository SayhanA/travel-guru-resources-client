import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import News from "../pages/pages/News/News";
import Destination from "../pages/pages/Destination/Destination";
import Contact from "../pages/pages/Contact/Contact";
import Blog from "../pages/pages/Blog/Blog";
import Home from "../pages/pages/Home/Home";
import Error from "../pages/pages/ErrorPage/Error";
import Place from "../pages/pages/Place/Place";
import Rooms from "../pages/pages/Rooms/Rooms";
import Login from "../pages/pages/Login/Login";
import Register from "../pages/pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://travel-guru-resources-server-sayhana.vercel.app/destination')
            },
            {
                path: '/place/:id',
                element: <Place />,
                loader: ({params}) => fetch(`https://travel-guru-resources-server-sayhana.vercel.app/destination/${parseInt(params.id)}`)
            },
            {
                path: '/rooms/:category',
                element: <PrivateRouter><Rooms /></PrivateRouter> ,
                loader: ({params}) => fetch(`https://travel-guru-resources-server-sayhana.vercel.app/rooms/${params.category}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/news',
                element: <News />,
            },
            {
                path: '/destination',
                element: <Destination />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
        ]
    }
])

export default router;