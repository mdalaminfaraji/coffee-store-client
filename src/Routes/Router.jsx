import React from 'react';
import Main from '../Layout/Main.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import AddCoffee from '../AddCoffee/AddCoffee.jsx';
import UpdateCoffee from '../UpdateCoffee/UpdateCoffee.jsx';
import ErrorPage from '../Errorpage/Errorpage.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addCoffee',
            element:<AddCoffee/>

        },
        {
          path:'/update/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
        }
      ]
    },
  ]);

export default router;