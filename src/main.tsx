import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OneCard from './components/OneCard.tsx';
import { data } from './data/daten.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App data={data} />,
  },
  {
    path: '/blogId/:blog_id',
    element: <OneCard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
