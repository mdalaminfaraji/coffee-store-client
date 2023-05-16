import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';
import AuthProviders from './AuthProviders/AuthProviders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1600px] mx-auto'>
        <AuthProviders>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
        </AuthProviders>
  </div>
 
)
