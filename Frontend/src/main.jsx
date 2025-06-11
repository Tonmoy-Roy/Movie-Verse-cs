import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Movies from './Components/Movies/Movies.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AllMovies from './Components/Movies/AllMovies.jsx';
import CategoryMovies from './Components/Movies/CategoryMovies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <Movies></Movies>,
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/categorymovies",
        element: <CategoryMovies></CategoryMovies>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
