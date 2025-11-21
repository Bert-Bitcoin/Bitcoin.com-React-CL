# Slider Component

A range slider component for selecting a value within a range, based on the Bitcoin.com design system.

## Features

- ✅ Smooth value selection
- ✅ Customizable min/max range
- ✅ Step increments
- ✅ Disabled state
- ✅ Accessible with ARIA labels
- ✅ Responsive width
- ✅ Dark mode support
- ✅ TypeScript support
- ✅ Design system aligned

## Usage

```tsx
import { Slider } from '@bitcoin-com/react-component-library';
import { useState } from 'react';

function VolumeControl() {
  const [volume, setVolume] = useState(50);

  return (
    <Slider
      value={volume}
      onChange={setVolume}
      ariaLabel="Volume"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | required | Current value of the slider |
| `onChange` | `(value: number) => void` | required | Callback when value changes |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Whether the slider is disabled |
| `className` | `string` | - | Optional CSS class name |
| `ariaLabel` | `string` | - | Accessible label for the slider |

## Examples

### Basic Slider

```tsx
const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={setValue}
  ariaLabel="Volume"
/>
```

### Custom Range (0-10)

```tsx
const [rating, setRating] = useState(5);

<Slider
  value={rating}
  onChange={setRating}
  min={0}
  max={10}
  ariaLabel="Rating"
/>
```

### With Step Increments

```tsx
const [volume, setVolume] = useState(50);

<Slider
  value={volume}
  onChange={setVolume}
  step={10}
  ariaLabel="Volume (increments of 10)"
/>
```

### With Label and Value Display

```tsx
const [brightness, setBrightness] = useState(75);

<div>
  <div className="flex justify-between mb-2">
    <label>Brightness</label>
    <span>{brightness}%</span>
  </div>
  <Slider
    value={brightness}
    onChange={setBrightness}
    ariaLabel="Brightness"
  />
</div>
```

### Disabled Slider

```tsx
<Slider
  value={50}
  onChange={() => {}}
  disabled
  ariaLabel="Locked setting"
/>
```

### Large Range with Steps

```tsx
const [price, setPrice] = useState(500);

<Slider
  value={price}
  onChange={setPrice}
  min={100}
  max={1000}
  step={50}
  ariaLabel="Price"
/>
```

### Multiple Sliders

```tsx
const [volume, setVolume] = useState(70);
const [brightness, setBrightness] = useState(85);
const [contrast, setContrast] = useState(50);

<div className="space-y-6">
  <div>
    <div className="flex justify-between mb-2">
      <label>Volume</label>
      <span>{volume}%</span>
    </div>
    <Slider value={volume} onChange={setVolume} ariaLabel="Volume" />
  </div>
  
  <div>
    <div className="flex justify-between mb-2">
      <label>Brightness</label>
      <span>{brightness}%</span>
    </div>
    <Slider value={brightness} onChange={setBrightness} ariaLabel="Brightness" />
  </div>
  
  <div>
    <div className="flex justify-between mb-2">
      <label>Contrast</label>
      <span>{contrast}%</span>
    </div>
    <Slider value={contrast} onChange={setContrast} ariaLabel="Contrast" />
  </div>
</div>
```

### Full Width

```tsx
<div style={{ width: '600px' }}>
  <Slider
    value={value}
    onChange={setValue}
    ariaLabel="Progress"
  />
</div>
```

### Compact

```tsx
<div style={{ width: '200px' }}>
  <Slider
    value={value}
    onChange={setValue}
    ariaLabel="Volume"
  />
</div>
```

## Design System Integration

This component follows the Bitcoin.com design system:

**Track**:
- Height: 4px
- Background: Semi-light (#cac7d1)
- Border radius: 22px (fully rounded)

**Filled Track**:
- Height: 4px
- Background: Primary 50 (#9db6fb)
- Border radius: 22px (fully rounded)
- Width: Percentage of value

**Thumb**:
- Size: 16px × 16px
- Background: Primary 100 (#4169e1)
- Shape: Circular (fully rounded)
- Position: Centered on the filled track endpoint

**Container**:
- Height: 35px
- Width: Flexible (adapts to parent container)

**States**:
- Default: Full opacity, interactive
- Disabled: 50% opacity, not interactive
- Hover: Cursor changes to pointer

## Accessibility

The Slider component is built with accessibility in mind:

- Uses native HTML5 range input for keyboard navigation
- Supports `ariaLabel` prop for screen readers
- Arrow keys to adjust value
- Home/End keys to jump to min/max
- Page Up/Down for larger increments

### Keyboard Controls

- **Arrow Left/Down**: Decrease value by step
- **Arrow Right/Up**: Increase value by step
- **Home**: Jump to minimum value
- **End**: Jump to maximum value
- **Page Up**: Increase by larger increment
- **Page Down**: Decrease by larger increment

## Dark Mode

The Slider automatically supports dark mode through the design system's color variables:

```tsx
<div className="dark">
  <Slider
    value={value}
    onChange={setValue}
    ariaLabel="Dark mode slider"
  />
</div>
```

The track, fill, and thumb colors are defined using CSS variables that automatically adjust for dark mode.

## Storybook

View examples in Storybook under `Components/Form Elements/Slider`

## TypeScript

The Slider component is fully typed:

```tsx
interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
```

## Implementation Notes

- The component uses a native HTML5 range input for functionality and accessibility
- Visual styling is achieved through custom positioned elements (track, fill, thumb)
- The input itself is visually hidden but remains functional for keyboard interaction
- Smooth transitions are applied to the fill and thumb for visual feedback
- The component is fully controlled - parent component must manage the value state

