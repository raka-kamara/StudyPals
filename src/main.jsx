import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <div className='max-w-9xl mx-auto bg-gradient-to-r from-red-50 to-blue-100'>
    <StrictMode>
     <AuthProvider>
     <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    <Toaster/>
     </AuthProvider>
  </StrictMode>,
  </div>
)
