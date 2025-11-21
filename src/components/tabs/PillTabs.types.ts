export interface PillTab {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Label text to display on the tab
   */
  label: string;

  /**
   * Optional icon to display before the label
   */
  icon?: React.ReactNode;

  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface PillTabsProps {
  /**
   * Array of tab items
   */
  tabs: PillTab[];

  /**
   * ID of the currently active tab
   */
  activeTab: string;

  /**
   * Callback fired when a tab is clicked
   */
  onChange: (tabId: string) => void;

  /**
   * Additional CSS classes for the container
   */
  className?: string;

  /**
   * Additional CSS classes for individual tabs
   */
  tabClassName?: string;

  /**
   * Whether the tabs should take full width
   * @default false
   */
  fullWidth?: boolean;
}

