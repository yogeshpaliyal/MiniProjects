import React from 'react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Project Showcase
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my small projects, experiments, and learning adventures in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <section id="about" className="mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">About This Collection</h2>
            <p className="mt-4 text-lg text-gray-600">
              This showcase represents my journey in web development, featuring various small projects 
              that I've built to learn and experiment with different technologies and concepts.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>Built with React and TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;