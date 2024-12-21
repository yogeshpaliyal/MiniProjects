import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { ProjectPage } from '../pages/ProjectPage';
import { BottleSpinGame } from '../pages/games/BottleSpinGame';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'project/:id',
        element: <ProjectPage />,
      },
      {
        path: 'games/bottle',
        element: <BottleSpinGame />,
      },
    ],
  },
], {future: {v7_relativeSplatPath: true}});
