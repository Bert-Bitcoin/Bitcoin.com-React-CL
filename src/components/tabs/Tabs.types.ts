import type { ReactNode } from 'react';

import type { IconName } from '../icon/Icon.types';

export type TabAlign = 'left' | 'center' | 'stretch';

export interface Tab {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * Label text for the tab
   */
  label: string;
  /**
   * Optional icon name
   */
  icon?: IconName;
  /**
   * Optional badge count
   */
  badge?: number | string;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tabs
   */
  tabs: Tab[];
  /**
   * ID of the currently active tab
   */
  activeTab: string;
  /**
   * Callback when a tab is clicked
   */
  onChange: (tabId: string) => void;
  /**
   * Alignment of tabs
   * @default 'left'
   */
  align?: TabAlign;
  /**
   * Custom className for the container
   */
  className?: string;
  /**
   * Custom className for individual tabs
   */
  tabClassName?: string;
  /**
   * Aria label for the tablist
   */
  ariaLabel?: string;
}

