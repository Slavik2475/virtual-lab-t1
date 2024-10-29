import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

interface CodeEditorProps {
  initialCode: string;
  onChange?: (value: string) => void;
}

export function CodeEditor({ initialCode, onChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
    onChange?.(value);
  };

  return (
    <Editor
      height="60vh"
      defaultLanguage="java"
      theme="vs-dark"
      value={code}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}