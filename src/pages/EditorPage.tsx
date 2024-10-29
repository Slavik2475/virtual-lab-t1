import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CodeEditor } from '../components/CodeEditor';
import { ExecutionPanel } from '../components/ExecutionPanel';
import { ArrowLeft } from 'lucide-react';

export default function EditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCode = location.state?.code || `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from the full editor!");
        
        // Add your code here
        int x = 10;
        int y = 20;
        System.out.println("Sum: " + (x + y));
    }
}`;

  const [currentCode, setCurrentCode] = React.useState(initialCode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden transition-colors">
          <div className="border-b border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Full Editor</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Edit and run your Java code with enhanced features
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Editor</h3>
              <div className="h-[calc(100vh-300px)] min-h-[500px] border dark:border-dark-700 rounded-lg overflow-hidden">
                <CodeEditor 
                  initialCode={currentCode}
                  onChange={setCurrentCode}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Execution Panel</h3>
              <div className="bg-gray-50 dark:bg-dark-900/50 rounded-lg p-4">
                <ExecutionPanel code={currentCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}