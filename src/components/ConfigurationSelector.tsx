import React from 'react';
import { useDoorConfig } from '../context/DoorConfigContext';
import { DoorRange, PanelConfig, TrackOption } from '../types/door';

const ConfigurationSelector: React.FC = () => {
  const { config, updateConfig } = useDoorConfig();

  const selectClass = "mt-1 block w-full rounded-md border-luxury-gold/20 bg-luxury-darker text-white shadow-sm focus:border-luxury-gold focus:ring-luxury-gold";
  const checkboxClass = "rounded border-luxury-gold/30 bg-luxury-darker text-luxury-gold shadow-sm focus:border-luxury-gold focus:ring focus:ring-luxury-gold/20";

  const getPanelDescription = (config: PanelConfig) => {
    switch (config) {
      case 'OX':
        return '1 Fixed, 1 Sliding';
      case 'XX':
        return '2 Sliding';
      case 'OXX':
        return '1 Fixed, 2 Sliding';
      case 'OXXO':
        return '2 Fixed, 2 Sliding';
      case 'OXXXXO':
        return '2 Fixed, 4 Sliding';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-luxury-black p-6 rounded-lg border border-luxury-gold/20">
        <h2 className="text-xl font-semibold gold-text mb-4">Door Configuration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Door Range */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Door Range</label>
            <select
              value={config.doorRange}
              onChange={(e) => updateConfig({ doorRange: e.target.value as DoorRange })}
              className={selectClass}
            >
              <option value="OS-20">OS-20 Artisan Slider (£2,000 per panel)</option>
              <option value="OS-29">OS-29 Patio Slider (£1,960 per panel)</option>
              <option value="OS-44">OS-44 Patio Slider (£1,750 per panel)</option>
              <option value="OS-77">OS-77 Patio Slider (£1,500 per panel)</option>
            </select>
          </div>

          {/* Panel Configuration */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Panel Configuration</label>
            <select
              value={config.panelConfig}
              onChange={(e) => updateConfig({ panelConfig: e.target.value as PanelConfig })}
              className={selectClass}
            >
              <option value="OX">{`OX - ${getPanelDescription('OX')}`}</option>
              <option value="XX">{`XX - ${getPanelDescription('XX')}`}</option>
              <option value="OXX">{`OXX - ${getPanelDescription('OXX')}`}</option>
              <option value="OXXO">{`OXXO - ${getPanelDescription('OXXO')}`}</option>
              <option value="OXXXXO">{`OXXXXO - ${getPanelDescription('OXXXXO')}`}</option>
            </select>
          </div>

          {/* Track Options */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Track Options</label>
            <select
              value={config.trackOption}
              onChange={(e) => updateConfig({ trackOption: e.target.value as TrackOption })}
              className={selectClass}
            >
              <option value="single">Single Track (Base price)</option>
              <option value="double">Double Track (+£350)</option>
              <option value="triple">Triple Track (+£650)</option>
            </select>
          </div>

          {/* Glazing */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Glazing</label>
            <select
              value={config.glazing}
              onChange={(e) => updateConfig({ glazing: e.target.value })}
              className={selectClass}
            >
              <option value="double">Double Glazing (Base price)</option>
              <option value="triple">Triple Glazing (+£350 per panel)</option>
            </select>
          </div>

          {/* Installation */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Installation</label>
            <select
              value={config.installation}
              onChange={(e) => updateConfig({ installation: e.target.value })}
              className={selectClass}
            >
              <option value="standard">Standard Installation (Base price)</option>
              <option value="flush">Flush-to-floor Recessed Track (+£500)</option>
            </select>
          </div>

          {/* Colour */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Colour</label>
            <select
              value={config.color}
              onChange={(e) => updateConfig({ color: e.target.value })}
              className={selectClass}
            >
              <option value="standard">Standard Colours (White/Grey/Black)</option>
              <option value="custom">RAL Custom Colours (+£250 per panel)</option>
            </select>
          </div>

          {/* Handle Type */}
          <div>
            <label className="block text-sm font-medium text-luxury-gold/80">Handle Type</label>
            <select
              value={config.handle}
              onChange={(e) => updateConfig({ handle: e.target.value })}
              className={selectClass}
            >
              <option value="stainless">Stainless Steel Handle (+£120)</option>
              <option value="premium">Premium Designer Handle (+£250)</option>
            </select>
          </div>

          {/* Performance Upgrades */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-luxury-gold/80 mb-2">Performance Upgrades</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={config.upgrades.includes('roller')}
                  onChange={(e) => {
                    const upgrades = e.target.checked
                      ? [...config.upgrades, 'roller']
                      : config.upgrades.filter(u => u !== 'roller');
                    updateConfig({ upgrades });
                  }}
                  className={checkboxClass}
                />
                <span className="ml-2 text-sm text-luxury-gold/60">Enhanced Roller System (+£200)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={config.upgrades.includes('security')}
                  onChange={(e) => {
                    const upgrades = e.target.checked
                      ? [...config.upgrades, 'security']
                      : config.upgrades.filter(u => u !== 'security');
                    updateConfig({ upgrades });
                  }}
                  className={checkboxClass}
                />
                <span className="ml-2 text-sm text-luxury-gold/60">Security Upgrade (+£350)</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={config.upgrades.includes('guarantee')}
                  onChange={(e) => {
                    const upgrades = e.target.checked
                      ? [...config.upgrades, 'guarantee']
                      : config.upgrades.filter(u => u !== 'guarantee');
                    updateConfig({ upgrades });
                  }}
                  className={checkboxClass}
                />
                <span className="ml-2 text-sm text-luxury-gold/60">25-Year Guarantee (+£450)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationSelector;