import { Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Virtual Java Lab</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/editor"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/editor'
                    ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Full Editor
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}