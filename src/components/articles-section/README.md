# ArticlesSection Component

A responsive articles section component for displaying featured articles with a horizontal carousel. Designed to showcase content in a clean, modern layout with smooth scrolling navigation.

## Features

- **3-column layout on desktop** - Shows 3 articles at a time on larger screens
- **Responsive design** - Adapts seamlessly across mobile, tablet, and desktop
- **Three style variants** - Light, gray, and dark backgrounds
- **Horizontal scrolling** - Smooth carousel navigation with arrow controls
- **Theme support** - Auto, light, and dark theme modes
- **Clean article cards** - Simple layout with image, title, and summary
- **Image placeholders** - Automatic blue placeholder for missing images
- **Flexible content** - Customizable heading, description, and button text
- **Interactive articles** - Support for links and click handlers

## Differences from NewsSection

The `ArticlesSection` component is similar to `NewsSection` but with key differences:

1. **Layout**: Shows 3 articles on desktop instead of 4
2. **Simpler cards**: No dark container around images, no badges or pills
3. **Cleaner design**: Just image, title, and summary
4. **Placeholder styling**: Uses blue background (`bg-primary-50`) for missing images

## Usage

```tsx
import { ArticlesSection } from '@/components/articles-section';
import type { Article } from '@/components/articles-section';

const articles: Article[] = [
  {
    id: '1',
    imageUrl: 'https://example.com/article-1.jpg',
    imageAlt: 'Article description',
    title: 'A large Article title',
    summary: 'A short article summary of an article and why you should read more',
    href: '/articles/1'
  },
  // ... more articles
];

function MyPage() {
  return (
    <ArticlesSection
      style="light"
      heading="Articles"
      description="Never miss an update—keep up with daily headlines and analysis."
      articles={articles}
      maxArticles={6}
      readMoreText="Read More"
      onReadMoreClick={() => console.log('Read more clicked')}
    />
  );
}
```

## Props

### ArticlesSectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `style` | `'light' \| 'gray' \| 'dark'` | `'light'` | Visual style variant |
| `heading` | `string` | `'Articles'` | Section heading text |
| `description` | `string` | `'Never miss an update...'` | Section description/subtitle |
| `articles` | `Article[]` | `[]` | Array of articles to display |
| `maxArticles` | `number` | `6` | Maximum number of articles to show |
| `readMoreText` | `string` | `'Read More'` | Text for the read more button |
| `onReadMoreClick` | `() => void` | - | Click handler for read more button |
| `className` | `string` | - | Additional CSS classes |

### Article

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | ✓ | Unique identifier |
| `imageUrl` | `string` | - | Article image URL |
| `imageAlt` | `string` | - | Image alt text |
| `title` | `string` | ✓ | Article title |
| `summary` | `string` | ✓ | Article summary/description |
| `onClick` | `() => void` | - | Click handler |
| `href` | `string` | - | Link URL |

## Style Variants

### Light
White background with black text. Clean and minimal appearance.

```tsx
<ArticlesSection style="light" articles={articles} />
```

### Gray
Light gray background with black text. Subtle contrast while maintaining readability.

```tsx
<ArticlesSection style="gray" articles={articles} />
```

### Dark
Black background with white text. High contrast for dramatic effect.

```tsx
<ArticlesSection style="dark" articles={articles} />
```

## Responsive Behavior

### Desktop (≥1024px)
- Shows 3 articles at a time
- Navigation arrows visible
- Articles width: `calc((100% - 48px) / 3)`
- Horizontal scroll with smooth navigation

### Tablet (768px - 1023px)
- Shows 3 articles at a time
- Navigation arrows visible
- Adjusted spacing and typography

### Mobile (<768px)
- Horizontal scroll with snap points
- Full-width scroll container with padding
- Navigation arrows hidden
- Touch-friendly scrolling

## Examples

### Basic Usage
```tsx
<ArticlesSection
  articles={articles}
  onReadMoreClick={() => navigate('/articles')}
/>
```

### Custom Content
```tsx
<ArticlesSection
  style="gray"
  heading="Latest Articles"
  description="Stay informed with the latest insights and analysis."
  articles={articles}
  maxArticles={6}
  readMoreText="View All Articles"
/>
```

### Without Read More Button
```tsx
<ArticlesSection
  style="light"
  articles={articles}
  maxArticles={6}
/>
```

### With Theme Mode
```tsx
<ArticlesSection
  themeMode="dark"
  style="dark"
  articles={articles}
/>
```

## Accessibility

- Semantic HTML structure with `<section>`, `<h2>`, `<p>`, and `<nav>` elements
- Arrow buttons include `aria-label` attributes
- Images include alt text
- Keyboard navigation support
- Focus indicators on interactive elements
- Disabled state styling for navigation buttons

## Design Tokens

The component uses semantic design tokens from the project's design system:

- **Colors**: `bg-shades-*`, `text-shades-*`, `bg-primary-*`
- **Spacing**: `px-m`, `py-l`, `gap-m`, `gap-xs`
- **Typography**: Elza Narrow (headings), Satoshi Variable (body text)
- **Border radius**: `rounded-s`, `rounded-full`

## Notes

- Navigation buttons automatically enable/disable based on scroll position
- Scroll behavior is smooth with CSS transitions
- Article cards maintain aspect ratio `450.667/280` for images
- Missing images display blue placeholder (`bg-primary-50`)
- Component is fully responsive and mobile-friendly
- Maximum width constraint: `1400px` (centered with `mx-auto`)
