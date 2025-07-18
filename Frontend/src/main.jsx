import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Movies from './Components/Movies/Movies.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AllMovies from './Components/Movies/AllMovies.jsx';
import CategoryMovies from './Components/Movies/CategoryMovies.jsx';
import Register from './Components/Login/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import { Toaster } from 'react-hot-toast';
import MovieDetails from './Components/Movies/MovieDetails.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Watchlist from './Components/Dashboard/Watchlist.jsx';

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/moviedetails/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) => fetch(`https://movieverse-tan.vercel.app/movielist/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "bookmark",
            element: <Watchlist></Watchlist>
          },
        ]
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
