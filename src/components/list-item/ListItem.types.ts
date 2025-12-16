import type { ComponentType, ReactNode, SVGProps } from 'react';

import type { IconName } from '../icon/Icon.types';
import type { IndicatorVariant } from '../indicator/Indicator.types';

export type ListItemSize = 'default' | 'compact';

export type ListItemColorOption =
  | 'primary-100'
  | 'secondary-100'
  | 'success-100'
  | 'extra-cyan-100'
  | 'extra-navy-100'
  | 'extra-violet-100'
  | 'extra-gold-100'
  | 'extra-pink-100'
  | 'extra-green-100'
  | 'extra-purple-100';

export type ListItemIllustrationType = 'mini-illustration' | 'icon' | 'asset-icon';

export interface ListItemNumberConfig {
  value: string | number;
  backgroundColor?: ListItemColorOption;
}

export interface ListItemIconConfig {
  iconName: IconName;
  color?: ListItemColorOption;
}

export interface ListItemAssetIconConfig {
  asset: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ListItemMiniIllustrationConfig {
  illustration: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ListItemContent {
  title?: string;
  description?: string;
  customContent?: ReactNode;
}

export interface ListItemProps {
  /**
   * The size variant of the list item
   * @default 'default'
   */
  size?: ListItemSize;

  /**
   * Optional numbered badge configuration
   */
  number?: ListItemNumberConfig;

  /**
   * Optional illustration/icon configuration
   * Can be a mini illustration, basic icon, or asset icon
   */
  illustration?:
    | ListItemIconConfig
    | ListItemAssetIconConfig
    | ListItemMiniIllustrationConfig;

  /**
   * The type of illustration being used
   * Required if illustration prop is provided
   */
  illustrationType?: ListItemIllustrationType;

  /**
   * Left content area (title, description, or custom HTML)
   */
  leftContent: ListItemContent;

  /**
   * Optional right content area (title, description, or custom HTML)
   */
  rightContent?: ListItemContent;

  /**
   * Optional indicator configuration
   */
  indicator?: {
    variant: IndicatorVariant;
    label?: string;
  };

  /**
   * Optional button area content
   * Can be a button, icon, or custom HTML
   */
  buttonArea?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to show the divider at the bottom
   * @default true
   */
  showDivider?: boolean;

  /**
   * Whether to show hover state with primary-10 background
   * @default false
   */
  showHover?: boolean;

  /**
   * Click handler for the entire list item
   */
  onClick?: () => void;
}

