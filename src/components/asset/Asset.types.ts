import type { SVGProps } from 'react';

export type AssetSize = 'lg' | 'md' | 'sm' | 'xs';

export interface AssetProps {
  /**
   * The asset icon component (SVG component)
   */
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  
  /**
   * The full name of the asset (e.g., "Bitcoin")
   */
  name: string;
  
  /**
   * The ticker/symbol of the asset (e.g., "BTC")
   * Optional for 'sm' and 'xs' sizes
   */
  ticker?: string;
  
  /**
   * The size variant of the asset display
   * @default 'lg'
   */
  size?: AssetSize;
  
  /**
   * Optional network icon to display in the corner (for cross-chain assets)
   */
  networkIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

