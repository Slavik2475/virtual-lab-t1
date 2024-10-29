import { Play, Copy } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ExecutionPanelProps {
  code: string;
}

export function ExecutionPanel({ code }: ExecutionPanelProps) {
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const navigate = useNavigate();

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      try {
        // Simple Java output simulation
        const lines = code.split('\n');
        const printLines = lines
          .filter(line => line.includes('System.out.println'))
          .map(line => {
            const match = line.match(/println\("(.+?)"\)/);
            return match ? match[1] : '';
          })
          .filter(Boolean);

        setOutput(printLines.join('\n'));
      } catch (error) {
        setOutput('Error executing code');
      }
      setIsExecuting(false);
    }, 1000);
  };

  const openFullEditor = () => {
    navigate('/editor', { state: { code } });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleExecute}
          disabled={isExecuting}
          className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${
            isExecuting 
              ? 'bg-primary-400 dark:bg-primary-500 cursor-not-allowed' 
              : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
          }`}
        >
          <Play size={16} />
          {isExecuting ? 'Running...' : 'Run Code'}
        </button>
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <Copy size={16} /> Copy Code
        </button>
        <button
          onClick={openFullEditor}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
        >
          Open Full Editor
        </button>
      </div>

      {output && (
        <div className="bg-dark-900 text-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-400">Output</h3>
            <button
              onClick={() => setOutput('')}
              className="text-gray-400 hover:text-gray-200 text-sm"
            >
              Clear
            </button>
          </div>
          <pre className="font-mono text-sm whitespace-pre-wrap overflow-x-auto max-h-[400px]">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}