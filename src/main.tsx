import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { BottleSpinGame } from './pages/games/BottleSpinGame';
import { Layout } from './components/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='MiniProjects'>
        <div className="mx-auto">
          <Routes >
          <Route path='/' element={<Layout />}>
          <Route element={<HomePage />} index/>
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/games/bottle' element={<BottleSpinGame />} />
          </Route>
          </Routes>
        </div>
        </BrowserRouter>
   </StrictMode>
);