import React from 'react';
import Main from '../Layout/Main.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import AddCoffee from '../AddCoffee/AddCoffee.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addCoffee',
            element:<AddCoffee/>

        }
      ]
    },
  ]);

export default router;