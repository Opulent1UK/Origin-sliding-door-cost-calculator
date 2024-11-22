import React from 'react';
import Calculator from './components/Calculator';
import EmbedCode from './components/EmbedCode';
import { DoorConfigProvider } from './context/DoorConfigContext';
import { Sliders } from 'lucide-react';

export default function App() {
  return (
    <DoorConfigProvider>
      <div className="min-h-screen bg-luxury-darker">
        <header className="bg-luxury-black border-b border-luxury-gold/20">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center space-x-3">
            <Sliders className="h-8 w-8 text-luxury-gold" />
            <h1 className="text-2xl font-semibold gold-text">Origin Door Cost Calculator</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-luxury-black rounded-lg shadow-gold overflow-hidden border border-luxury-gold/20">
            <Calculator />
          </div>
        </main>

        <EmbedCode />

        <footer className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-luxury-gold/60">
          <p>© 2024 Origin Doors. All rights reserved.</p>
        </footer>
      </div>
    </DoorConfigProvider>
  );
}