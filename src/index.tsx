import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import ErrorPage from "./layout/errors/ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage />,

        children: [
            {
                index: true, element:<UsersPage/>,
            },
            {
                path:'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            }
        ]

    }
])

root.render(
    <RouterProvider router={router}/>
);

