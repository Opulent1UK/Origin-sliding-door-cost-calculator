import React from 'react';
import { useDoorConfig } from '../context/DoorConfigContext';
import { PoundSterling } from 'lucide-react';

const PriceDisplay: React.FC = () => {
  const { totalPrice, config } = useDoorConfig();
  const vat = totalPrice * 0.2;
  const totalWithVat = totalPrice + vat;

  return (
    <div className="bg-luxury-black rounded-lg border border-luxury-gold/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold gold-text">Price Summary</h2>
        <PoundSterling className="h-6 w-6 text-luxury-gold" />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-3xl font-bold gold-text">
            £{totalPrice.toLocaleString()}
          </div>
          <div className="text-sm text-luxury-gold/60">Excluding VAT</div>
        </div>

        <div className="border-t border-luxury-gold/10 pt-4">
          <div className="text-4xl font-bold gold-text">
            £{totalWithVat.toLocaleString()}
          </div>
          <div className="text-sm text-luxury-gold/60">Including VAT (20%)</div>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-luxury-gold/60">
        <div className="flex justify-between">
          <span>Base Price ({config.doorRange})</span>
          <span>£{config.basePrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Configuration ({config.panelConfig})</span>
          <span>£{config.configPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Options & Upgrades</span>
          <span>£{(totalPrice - config.basePrice - config.configPrice).toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-t border-luxury-gold/10 pt-2">
          <span>VAT (20%)</span>
          <span>£{vat.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;