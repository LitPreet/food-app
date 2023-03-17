import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './src/components/header';
import HeaderR from './pages';
import Body from './src/components/body';
import Footer from './src/components/footer';
import About from './src/components/about';
import Error from './src/components/error';
import Contact from './src/components/contact';
import RestaurantMenu from './src/components/RestaurantMenu';
import Profile from './src/components/profile'
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';


const AppLayout = ()=>{
    return(
        <>
        <HeaderR />
        <Outlet />
        <Footer />
         </>
    )
} 
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
            path: "/",
            element: <Body />, 
            },
            {
                path: "/about",
                element: <About />, 
                children: [{ // nested routing
                    path: "profile",
                    element: <Profile />,
                  }]
             },
             {
                path: "/contact",
                element: <Contact />, 
             },
             {
                path: "/restaurant/:resId",
               element: <RestaurantMenu />,
             },
            ]

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)