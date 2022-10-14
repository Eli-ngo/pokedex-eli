import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Bookmarks from './containers/Bookmarks';
import Types from './containers/Types';
import List from './components/List';
import Pokemon from './containers/Pokemon';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <List />
            },
            {
                path: "/:slug",
                element: <Pokemon />
            },
            {
                path: "/types",
                element: <Types />
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
