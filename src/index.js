import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Bookmarks from './components/Bookmarks';
import List from './components/List';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <List />
            },
            {
                path: "/bookmarks",
                element: <Bookmarks />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
