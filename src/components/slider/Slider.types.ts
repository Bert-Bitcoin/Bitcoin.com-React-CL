export interface SliderProps {
  /**
   * Current value of the slider
   */
  value: number;

  /**
   * Callback when value changes
   */
  onChange: (value: number) => void;

  /**
   * Minimum value
   * @default 0
   */
  min?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Step increment
   * @default 1
   */
  step?: number;

  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional CSS class name
   */
  className?: string;

  /**
   * Accessible label for the slider
   */
  ariaLabel?: string;
}

