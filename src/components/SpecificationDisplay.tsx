import React from 'react';
import { useDoorConfig } from '../context/DoorConfigContext';
import { Info } from 'lucide-react';

const SpecificationDisplay: React.FC = () => {
  const { config } = useDoorConfig();

  const calculateUValue = () => {
    return config.glazing === 'triple' ? 1.2 : 1.6;
  };

  const getMaxDimensions = () => {
    switch (config.doorRange) {
      case 'OS-20':
        return { width: 13.2, height: 3.0 };
      case 'OS-29':
        return { width: 12.0, height: 3.0 };
      case 'OS-44':
        return { width: 11.0, height: 3.0 };
      case 'OS-77':
        return { width: 10.0, height: 3.0 };
      default:
        return { width: 0, height: 0 };
    }
  };

  const dimensions = getMaxDimensions();

  return (
    <div className="bg-luxury-black p-6 rounded-lg border border-luxury-gold/20">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="h-5 w-5 text-luxury-gold" />
        <h2 className="text-xl font-semibold gold-text">Technical Specifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-luxury-gold/80">Thermal Performance</h3>
          <p className="text-sm text-luxury-gold/60">U-Value: {calculateUValue()} W/m²K</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-luxury-gold/60">Energy Rating:</span>
            <span className="px-2 py-1 bg-luxury-gold/10 text-luxury-gold text-xs font-medium rounded border border-luxury-gold/20">
              A+
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-luxury-gold/80">Maximum Dimensions</h3>
          <p className="text-sm text-luxury-gold/60">Width: {dimensions.width}m</p>
          <p className="text-sm text-luxury-gold/60">Height: {dimensions.height}m</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-luxury-gold/80">Security Features</h3>
          <ul className="text-sm text-luxury-gold/60 list-disc list-inside">
            <li>Multi-point locking system</li>
            <li>Toughened safety glass</li>
            {config.upgrades.includes('security') && (
              <li className="text-luxury-gold">Secured by Design upgrade</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecificationDisplay;