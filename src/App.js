import React, {lazy, Suspense, useEffect, useState} from 'react';
import  ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import UserOnlineContext from './Utils/UserOnlineContext';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Cart from './components/Cart';
import Footer from './components/Footer';
//import Grocery from './components/Grocery';
//const heading =  React.createElement("h1", {}, "Hello Worl from Reactggggggg !");
//const jsxHeading =<h1 className='head'>welcome to react</h1>;
const Title = () =>{
    return ( <h2 className="heading-title">React Web App</h2>)

};


// lazyloading feature-- optimizing the app (we need to cover the lazy route with suspense component in the routing funtion below)
const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(() =>import('./components/About'));
// const Cart = lazy(() =>import('./components/Cart'));
const AppLayout = () => {
    // user context service

const [userName, setUserName] = useState();

useEffect(()=>{
/** MAKE AN API CALL TO FETCH USER NAME N PASS */
const data =  {
    name: "Amrinder Kaur"
}
setUserName(data.name)


}, [])
    return (
    <Provider store={appStore}>
    <UserOnlineContext.Provider value= {{userLogged:userName, setUserName}}>
    <div className='app'>
    {/* <UserOnlineContext.Provider value= {{userLogged:'Amy Kaur', setUserName }}> */}
        <Header />
        {/* </UserOnlineContext.Provider> */}
       
       <Outlet />
       <Footer/>
    </div>
    </UserOnlineContext.Provider>
    </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: 'about',
                element: <Suspense fallback='<h1>Loading..</h1>'><About /></Suspense>
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'grocery',
                element: <Suspense fallback='<h1>Loading..</h1>'><Grocery /></Suspense>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'restaurants/:resId',
                element: <RestaurantMenu />
            }
        
        ],

        errorElement: <Error/>
    },
    
])
const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router = {appRouter} />);