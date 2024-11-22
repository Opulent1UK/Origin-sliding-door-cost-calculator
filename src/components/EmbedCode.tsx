import React from 'react';
import { Code } from 'lucide-react';

const EmbedCode: React.FC = () => {
  const embedCode = `<iframe src="https://enchanting-platypus-200384.netlify.app" width="100%" height="800" style="border: none; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"></iframe>`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-luxury-black rounded-lg border border-luxury-gold/20 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Code className="h-5 w-5 text-luxury-gold" />
          <h3 className="text-lg font-medium gold-text">Embed Calculator</h3>
        </div>
        <div className="bg-luxury-darker p-3 rounded-md border border-luxury-gold/10">
          <code className="text-sm text-luxury-gold/80 break-all">
            {embedCode}
          </code>
        </div>
      </div>
    </div>
  );
};

export default EmbedCode;