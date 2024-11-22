export type DoorRange = 'OS-20' | 'OS-29' | 'OS-44' | 'OS-77';
export type PanelConfig = 'OX' | 'XX' | 'OXX' | 'OXXO' | 'OXXXXO';
export type TrackOption = 'single' | 'double' | 'triple';

export interface DoorConfig {
  doorRange: DoorRange;
  panelConfig: PanelConfig;
  trackOption: TrackOption;
  glazing: 'double' | 'triple';
  installation: 'standard' | 'flush';
  color: 'standard' | 'custom';
  handle: 'stainless' | 'premium';
  upgrades: string[];
  basePrice: number;
  configPrice: number;
}