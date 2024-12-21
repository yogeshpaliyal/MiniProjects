import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Weather Dashboard',
    description: 'A real-time weather application with beautiful visualizations',
    tags: ['React', 'TypeScript', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '2',
    title: 'Task Manager',
    description: 'A minimalist todo application with drag-and-drop functionality',
    tags: ['React', 'TypeScript', 'Local Storage'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '3',
    title: 'Bottle Spinning Game',
    description: 'Interactive bottle spinning game with customizable player count',
    tags: ['React', 'TypeScript', 'Animation'],
    imageUrl: 'https://images.unsplash.com/photo-1630396592772-246c7863c40c?auto=format&fit=crop&q=80&w=1000',
    demoUrl: '/games/bottle',
  },
];