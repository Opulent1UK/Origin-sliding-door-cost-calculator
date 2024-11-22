import React, { createContext, useContext, useState } from 'react';
import { DoorConfig, DoorRange, PanelConfig, TrackOption } from '../types/door';

interface DoorConfigContextType {
  config: DoorConfig;
  updateConfig: (updates: Partial<DoorConfig>) => void;
  totalPrice: number;
}

const DoorConfigContext = createContext<DoorConfigContextType | undefined>(undefined);

const calculateBasePrice = (doorRange: DoorRange): number => {
  const prices: Record<DoorRange, number> = {
    'OS-20': 2000,
    'OS-29': 1960,
    'OS-44': 1750,
    'OS-77': 1500,
  };
  return prices[doorRange];
};

const getPanelCount = (config: PanelConfig): { fixed: number; sliding: number } => {
  const panelCounts: Record<PanelConfig, { fixed: number; sliding: number }> = {
    'OX': { fixed: 1, sliding: 1 },
    'XX': { fixed: 0, sliding: 2 },
    'OXX': { fixed: 1, sliding: 2 },
    'OXXO': { fixed: 2, sliding: 2 },
    'OXXXXO': { fixed: 2, sliding: 4 }
  };
  return panelCounts[config];
};

const calculateTotalPrice = (config: DoorConfig): number => {
  const panelCount = getPanelCount(config.panelConfig);
  const totalPanels = panelCount.fixed + panelCount.sliding;
  
  // Base price for all panels
  let total = config.basePrice * totalPanels;

  // Track options
  if (config.trackOption === 'double') total += 350;
  if (config.trackOption === 'triple') total += 650;

  // Installation
  if (config.installation === 'flush') total += 500;

  // Handle
  if (config.handle === 'stainless') total += 120;
  if (config.handle === 'premium') total += 250;

  // Per-panel options
  if (config.glazing === 'triple') total += 350 * totalPanels;
  if (config.color === 'custom') total += 250 * totalPanels;

  // Upgrades
  if (config.upgrades.includes('roller')) total += 200;
  if (config.upgrades.includes('security')) total += 350;
  if (config.upgrades.includes('guarantee')) total += 450;

  return total;
};

export const DoorConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<DoorConfig>({
    doorRange: 'OS-20',
    panelConfig: 'OX',
    trackOption: 'single',
    glazing: 'double',
    installation: 'standard',
    color: 'standard',
    handle: 'stainless',
    upgrades: [],
    basePrice: 2000,
    configPrice: 0,
  });

  const [totalPrice, setTotalPrice] = useState<number>(4000); // Initial total price (2000 * 2 panels)

  const updateConfig = (updates: Partial<DoorConfig>) => {
    setConfig(prev => {
      const newConfig = { ...prev, ...updates };
      
      // Calculate new base price if door range is updated
      if (updates.doorRange) {
        newConfig.basePrice = calculateBasePrice(newConfig.doorRange);
      }

      // Update total price
      setTotalPrice(calculateTotalPrice(newConfig));
      
      return newConfig;
    });
  };

  return (
    <DoorConfigContext.Provider value={{ config, updateConfig, totalPrice }}>
      {children}
    </DoorConfigContext.Provider>
  );
};

export const useDoorConfig = () => {
  const context = useContext(DoorConfigContext);
  if (context === undefined) {
    throw new Error('useDoorConfig must be used within a DoorConfigProvider');
  }
  return context;
};