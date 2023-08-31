import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/home.js'
import About from './components/about.js'
import Services from './components/services';
import Requests from './components/requests/requests'
import MakeRequest from './components/requests/make-request';
import DetailedRequest from './components/requests/detailed-request';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/requests",
        element: <Requests />
      },
      {
        path: "/make-request",
        element: <MakeRequest />
      },
      {
        path: "/detailed-request",
        element: <DetailedRequest />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
