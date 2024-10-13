import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";import './App.css';
import Home from './Pages/Home.tsx';
import Register from './Pages/Register.tsx';
import Login from './Pages/Login.tsx';
import Write from './Pages/Write.tsx';
import Single from "./Pages/Single.tsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
