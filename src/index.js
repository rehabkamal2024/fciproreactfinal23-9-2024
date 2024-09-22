import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Studentportal from './pages/studentportal';
import Admin from './pages/Admin';
import StudentportalEmail from './pages/studentportalEmail';
// import Studentportalhtml from './pages/studentportal.html';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,

  },
  
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/studentportalEmail",
    element: <StudentportalEmail/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/admin",
    element: <Admin/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/studentportal",
    element: <Studentportal/>,
    errorElement: <ErrorPage />,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);

