import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from './routes';
import './index.css';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { BottleSpinGame } from './pages/games/BottleSpinGame';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='MiniProjects'>
        <div className="mx-auto">
          <Routes>
          <Route path='/' element={<HomePage />} index/>
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/games/bottle' element={<BottleSpinGame />} />
          </Routes>
        </div>
        </BrowserRouter>
   </StrictMode>
);