import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/home";
import Movies from "./components/pages/Movies";
import Movie from "./components/pages/Movie";


export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/movies',
                element: <Movies/>
            },
            {
                path: '/movies/:id',
                element: <Movie/>
            },
            {
                path: '/tv',
                element: <h1>this is people page</h1>
            },
            {
                path: '/people',
                element: <h1>this is person page</h1>
            },
            {
                path: '/more',
                element: <h1>this is more page</h1>
            }
        ]
    }
])