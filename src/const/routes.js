import { createBrowserRouter } from 'react-router-dom';
import {    
    Home,
    Destination,
    Crew,
    Technology,
    ErrorPage
} from "../pages"
import App from '../App'

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "",
            element: <Home/>,
        },
        {
            path: "destination",
            element: <Destination/>,
        },
        {
            path: "crew",
            element: <Crew/>,
        },
        {
            path: "technology",
            element: <Technology/>,
        }
    ]
}])