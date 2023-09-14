import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import {    
    Home,
    Destination,
    Crew,
    Technology,
    ErrorPage
} from "../pages";
import data from "../data.json";

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
            element: <Destination data={data.destinations}/>,
        },
        {
            path: "crew",
            element: <Crew data={data.crew}/>,
        },
        {
            path: "technology",
            element: <Technology data={data.technology}/>,
        }
    ]
}])