import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackToTop from './components/common/BackToTop';
import NavBar from './components/common/NavBar';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Serverices from './components/pages/Serverices';
import Service from './components/Service';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/common/Contact';
import HomePage from './components/pages/HomePage';

const abc = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/services",
        element: <Service />,
        
      },
      {
        path: "/projects",
        element: <Project />,
        
      },
      {
        path: "/educations",
        element: <Education />,
        
      },
      {
        path: "/contact",
        element: <Contact/>,
        
      },

    ]

  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={abc} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
