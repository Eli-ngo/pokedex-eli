import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Bookmarks from './containers/Bookmarks';
import Types from './containers/Types';
import Pokemons from './containers/Pokemons';
import Pokemon from './containers/Pokemon';
import { MainProvider } from 'contexts/Main'


const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Pokemons />
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
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainProvider>
        <RouterProvider router={router} />
    </MainProvider>
);

reportWebVitals();
