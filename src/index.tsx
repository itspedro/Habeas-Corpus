import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FilterContextProvider } from '@/contexts/filter-context';
import App from './App';
import Home from '@/content/Home/Home';
import Students from '@/content/Students/Students';
import Teachers from './content/Teachers/Teachers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/alunos',
        element: <Students />
      },
      {
        path: '/instrutores',
        element: <Teachers />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <RouterProvider router={router} />
    </FilterContextProvider>
  </React.StrictMode>
);