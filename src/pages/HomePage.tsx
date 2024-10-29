import React from 'react';
import { CodeEditor } from '../components/CodeEditor';
import { ExecutionPanel } from '../components/ExecutionPanel';

const initialJavaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Example of a simple calculation
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        System.out.println("Sum of numbers 1 to 10: " + sum);
    }
}`;

export default function HomePage() {
  const [currentCode, setCurrentCode] = React.useState(initialJavaCode);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden transition-colors">
        <div className="border-b border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Quick Java Editor</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Write and run simple Java programs instantly
          </p>
        </div>
        <div className="p-4">
          <CodeEditor 
            initialCode={initialJavaCode} 
            onChange={setCurrentCode}
          />
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 p-4">
          <ExecutionPanel code={currentCode} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Real-Time Editing"
          description="Advanced code editor with Java syntax highlighting and auto-completion."
        />
        <FeatureCard 
          title="Code Execution"
          description="Run your Java code directly in the browser with instant feedback."
        />
        <FeatureCard 
          title="Full Editor"
          description="Switch to the full editor for a more comprehensive development environment."
        />
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-dark-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}