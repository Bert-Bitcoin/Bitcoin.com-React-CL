# NewsSection Component

A responsive website section component for displaying trending news articles in a horizontal carousel layout.

## Features

- **Three Style Variants**: Light, Gray, and Dark background styles
- **Responsive Design**: Optimized layouts for desktop, tablet, and mobile
- **Horizontal Carousel**: Smooth scrolling with navigation controls
- **Responsive Navigation**:
  - **Desktop**: Shows 4 articles with arrow buttons to scroll one article at a time
  - **Tablet**: Shows 3 articles with arrow buttons and manual horizontal scroll
  - **Mobile**: Manual horizontal scroll only (no navigation buttons)
- **Theme Support**: Auto, light, and dark theme modes
- **Semantic Tokens**: Uses design system tokens for consistent styling
- **Reusable Components**: Built using Pill, Button, and Icon components from the library

## Usage

```tsx
import { NewsSection } from '@bitcoin-portal/react-cl';

const articles = [
  {
    id: '1',
    imageUrl: 'https://example.com/image.jpg',
    imageAlt: 'Article image',
    title: 'Article Title',
    summary: 'Article summary text',
    badge: 'Trending Now',
    timestamp: '23 Minutes ago',
    href: '/article/1'
  },
  // ... more articles
];

function MyPage() {
  return (
    <NewsSection
      style="light"
      articles={articles}
      maxArticles={8}
      onReadMoreClick={() => console.log('Read more clicked')}
    />
  );
}
```

## Props

### NewsSectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `style` | `'light' \| 'gray' \| 'dark'` | `'light'` | Visual style variant |
| `heading` | `string` | `'Trending News'` | Section heading text |
| `description` | `string` | `'Never miss an update—keep up with daily crypto headlines and analysis.'` | Section description/subtitle |
| `articles` | `NewsArticle[]` | `[]` | Array of news articles to display |
| `maxArticles` | `number` | `8` | Maximum number of articles to display |
| `readMoreText` | `string` | `'Read More'` | Text for the "Read More" button |
| `onReadMoreClick` | `() => void` | `undefined` | Click handler for the "Read More" button. If not provided, button is hidden. |
| `className` | `string` | `undefined` | Custom className for additional styling |

### NewsArticle

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for the article |
| `imageUrl` | `string` | Yes | URL of the article image |
| `imageAlt` | `string` | No | Alt text for the article image |
| `title` | `string` | Yes | Article title |
| `summary` | `string` | Yes | Short summary/description of the article |
| `badge` | `string` | No | Optional badge/tag for the article (e.g., "Trending Now") |
| `timestamp` | `string` | No | Optional timestamp text (e.g., "23 Minutes ago") |
| `onClick` | `() => void` | No | Click handler for the article |
| `href` | `string` | No | URL for the article link |

## Style Variants

### Light
White background with black text. Ideal for standard website sections.

### Gray
Light gray background with black text. Great for alternating sections or subtle contrast.

### Dark
Black background with white text. Perfect for dark-themed pages or high-contrast sections.

## Responsive Behavior

### Desktop (1024px+)
- Displays 4 articles in the viewport
- Navigation arrows visible
- Click arrows to scroll one article at a time
- Manual horizontal scroll also supported

### Tablet (768px - 1023px)
- Displays 3 articles in the viewport
- Navigation arrows visible
- Click arrows to scroll one article at a time
- Manual horizontal scroll supported

### Mobile (< 768px)
- Displays 1-2 articles in the viewport
- No navigation arrows (hidden)
- Manual horizontal scroll only
- Touch-friendly scrolling with snap points

## Accessibility

- Semantic HTML5 `<section>` element
- Proper heading hierarchy with `<h2>` and `<h3>` tags
- ARIA labels on navigation buttons
- Keyboard-accessible navigation controls
- Proper image alt text support
- Screen reader friendly

## Examples

### Basic Usage

```tsx
<NewsSection
  articles={myArticles}
  onReadMoreClick={() => navigate('/news')}
/>
```

### Custom Styling

```tsx
<NewsSection
  style="dark"
  heading="Latest Crypto News"
  description="Stay up to date with the crypto world"
  articles={myArticles}
  maxArticles={6}
  readMoreText="View All"
  onReadMoreClick={() => navigate('/news')}
/>
```

### Without Read More Button

```tsx
<NewsSection
  articles={myArticles}
  maxArticles={4}
/>
```

### With Theme Mode

```tsx
<NewsSection
  themeMode="dark"
  style="dark"
  articles={myArticles}
/>
```

## Notes

- The orange placeholder image in the Figma design should be replaced with actual article images
- Articles scroll smoothly one at a time when using navigation buttons
- The carousel uses CSS scroll-snap for smooth scrolling behavior
- Navigation buttons automatically disable when reaching the start/end of the carousel
- All colors use semantic tokens from the design system for automatic dark mode support
