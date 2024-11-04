import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  debugger
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    // Get current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].url) {
        setUrl(tabs[0].url);
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chrome Extension</h1>
      <p className="text-gray-600">Current URL: {url}</p>
    </div>
  );
};

export default App;