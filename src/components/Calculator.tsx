import React from 'react';
import ConfigurationSelector from './ConfigurationSelector';
import PriceDisplay from './PriceDisplay';
import SpecificationDisplay from './SpecificationDisplay';
import QuoteForm from './QuoteForm';

export default function Calculator() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      <div className="lg:col-span-2 space-y-8">
        <ConfigurationSelector />
        <SpecificationDisplay />
      </div>

      <div className="space-y-6">
        <PriceDisplay />
        <QuoteForm />
      </div>
    </div>
  );
}