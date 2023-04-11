import React , { lazy ,Suspense } from 'react';
import ReactDOM  from 'react-dom/client';
import HeaderR from './pages';
import Body from './src/components/body';
import Footer from './src/components/footer';
import About from './src/components/about';
import Error from './src/components/error';
import RestaurantMenu from './src/components/RestaurantMenu';
import Profile from './src/components/profile'
import Cart from './src/components/Cart'
import Shimmer from './src/components/shimmer'
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './src/components/utils/store';
import { Provider } from "react-redux";

//chunking
//lazy loading
//code splitting
//dynamic bundling
//on demand loading
//Dynamic import
const Instamart = lazy(() => import('./src/components/Instamart'))

const AppLayout = ()=>{
    return(
        <>
        <Provider store={store}>
        <HeaderR />
        <Outlet />
        <Footer />
        </Provider>
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
                path: "/instamart",
                element: ( <Suspense fallback = {<Shimmer/>}><Instamart /></Suspense> ), 
             },
             {
                path: "/restaurant/:resId",
               element: <RestaurantMenu />,
             },
             {
                path: "/cart",
               element: <Cart />,
             },
            ]

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Auth0Provider
    domain="dev-dif2pmhvqal1mke2.us.auth0.com"
    clientId="ew5ke75Xn6HTA4ypEYDk8l2ulZkoeDdk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><RouterProvider router={appRouter} /> </Auth0Provider>)