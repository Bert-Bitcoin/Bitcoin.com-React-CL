export type PillType = 'default' | 'primary' | 'secondary' | 'green' | 'purple' | 'red';
export type PillStyle = 'fill' | 'outline';

export interface PillProps {
  /**
   * The visual type/color variant of the pill
   * @default 'default'
   */
  type?: PillType;
  
  /**
   * The style variant - filled or outlined
   * @default 'fill'
   */
  style?: PillStyle;
  
  /**
   * The text content to display in the pill
   */
  children: React.ReactNode;
  
  /**
   * Optional CSS class name
   */
  className?: string;
}


