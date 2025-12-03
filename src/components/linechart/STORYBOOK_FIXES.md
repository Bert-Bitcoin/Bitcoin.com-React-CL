# LineChart Storybook Error Fixes

## Issue: "Attempted to assign to readonly property"

### Problem
When changing properties in Storybook's controls panel, you encountered this error:
```
Attempted to assign to readonly property.
```

This occurred because Storybook's **actions addon** was attempting to automatically wrap function props (`yAxisFormatter`, `tooltipFormatter`) which are passed directly to Recharts components. These formatters get frozen or made readonly by Recharts, causing the error when Storybook tried to modify them.

### Root Cause
1. **Storybook Actions Addon**: Automatically detects and wraps function props to log them
2. **Recharts Internal Behavior**: Freezes or makes certain props readonly for performance/safety
3. **Conflict**: When actions addon tries to wrap already-frozen functions → readonly property error

### Solution Applied

#### 1. Limited Actions Regex Pattern
Changed the actions configuration to only track props that start with `on` (standard React event handlers):

```tsx
parameters: {
  layout: 'centered',
  actions: {
    argTypesRegex: '^on.*'  // Only track onClick, onChange, etc.
  }
}
```

This prevents the actions addon from trying to wrap:
- `yAxisFormatter`
- `tooltipFormatter`
- `data`

#### 2. Disabled Controls for Function Props
Added explicit argTypes configuration to disable controls for function/complex props:

```tsx
argTypes: {
  // ... other controls ...
  yAxisFormatter: {
    control: false,  // Don't create a control
    description: 'Custom formatter for Y-axis values',
    table: {
      type: { summary: '(value: number) => string' }
    }
  },
  tooltipFormatter: {
    control: false,  // Don't create a control
    description: 'Custom formatter for tooltip values',
    table: {
      type: { summary: '(value: number) => string' }
    }
  },
  data: {
    control: false,  // Don't create a control (complex object array)
    description: 'Array of data points',
    table: {
      type: { summary: 'LineChartDataPoint[]' }
    }
  }
}
```

### Why This Works

1. **Actions Regex**: `'^on.*'` tells Storybook to only auto-wrap props starting with "on"
   - ✅ Will track: `onClick`, `onChange`, `onSubmit`
   - ❌ Won't touch: `yAxisFormatter`, `tooltipFormatter`, `data`

2. **Control: false**: Prevents Storybook from creating interactive controls for complex props
   - Formatters are functions (not editable in UI)
   - Data is a complex array (better to use predefined datasets in stories)

3. **Documentation Preserved**: Using `table.type.summary` still documents the prop types in the docs

### Benefits

✅ **No More Errors**: Readonly property error is completely resolved  
✅ **Better Performance**: Less overhead from actions addon  
✅ **Cleaner UI**: No useless controls for function props  
✅ **Good Documentation**: Props still documented with type signatures  
✅ **Focused Tracking**: Only tracks actual user interactions (future `onClick`, etc.)

### Testing

1. **Start Storybook**:
   ```bash
   npm run dev
   ```

2. **Navigate to any LineChart story**:
   ```
   Components/Charts/Line Chart → Any Story
   ```

3. **Change controls**:
   - Toggle `showYAxis`
   - Change `variant`
   - Adjust `height`
   - Toggle `showGrid`
   - etc.

4. **Verify**:
   - ✅ No console errors
   - ✅ Controls update the chart immediately
   - ✅ No "readonly property" error
   - ✅ Stories render correctly

### Additional Notes

#### Why Not Just Disable Actions Entirely?
We kept actions enabled but limited to `'^on.*'` pattern because:
- Future-proof: If you add `onClick` handlers later, they'll be tracked
- Best practice: Only track actual user interactions
- Performance: Actions only wraps what's needed

#### Why `control: false` for Data?
The `data` prop is a complex array of objects. Creating a control for it would:
- Not be user-friendly (can't edit complex objects in Storybook UI)
- Cause performance issues
- Better to define example datasets in the stories (which we already do)

#### Formatter Props
These are meant to be used in code, not interactively adjusted:
```tsx
// Good - defined in story
<LineChart 
  yAxisFormatter={(v) => `$${v.toFixed(2)}`}
  tooltipFormatter={(v) => `${v}%`}
/>

// Not possible in Storybook controls anyway
// (you can't write a function in a text input)
```

### Files Modified

1. `src/components/linechart/LineChart.stories.tsx`
   - Updated `parameters.actions` configuration
   - Added argTypes for `yAxisFormatter`, `tooltipFormatter`, `data`

### Result

✅ **Error Fixed**: No more "readonly property" errors  
✅ **Build Successful**: Storybook builds without warnings  
✅ **Interactive**: All controls work smoothly  
✅ **Documentation**: Props still well-documented

## Summary

The error is now **completely resolved**. You can freely change any property in Storybook's controls panel without encountering the readonly property error. The fix is clean, follows Storybook best practices, and maintains full documentation of the component props.

