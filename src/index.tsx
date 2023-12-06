import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FilterContextProvider } from '@/contexts/filter-context';
import App from './App';
import Home from '@/content/Home/Home';
import Students from '@/content/Students/Students';
import Teachers from './content/Teachers/Teachers';
import Activities from './content/Activities/Activities';
import Classes from './content/Classes/Classes';

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
        path: '/turmas',
        element: <Classes />
      },
      {
        path: '/instrutores',
        element: <Teachers />
      },
      {
        path: '/atividades',
        element: <Activities />
      },
      {
        path: '/unidade',
        element: <div>Unidade</div>
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