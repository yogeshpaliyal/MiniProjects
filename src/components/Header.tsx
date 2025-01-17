import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900"><a href='/'>MiniProjects</a></h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}