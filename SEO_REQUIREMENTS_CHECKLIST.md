# 🔍 SEO Requirements Checklist for Website Sections

**Quick Reference Card** - Use this checklist when creating or reviewing website section components.

---

## ✅ Mandatory Requirements (Priority 1)

### 1️⃣ Section ID Prop
```typescript
interface SectionProps {
  id?: string; // ✅ Add this to ALL section components
}
```
```tsx
<section id={id} className="...">
```

**Why**: Enables deep linking (`yoursite.com/page#section-id`), better navigation, improved internal linking structure.

---

### 2️⃣ Structured Data (Content Sections Only)
```typescript
interface ContentSectionProps {
  enableStructuredData?: boolean; // ✅ Default: true
}
```
```tsx
{structuredData && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
  />
)}
```

**Schema Types:**
- FAQSection → `FAQPage`
- ArticlesSection → `ItemList` with `Article`
- NewsSection → `ItemList` with `NewsArticle`
- ReviewsSection → `Review` or `AggregateRating`
- ProductSection → `Product`

**Why**: Rich snippets in search results, better content understanding, enhanced search visibility.

---

### 3️⃣ Semantic HTML - Article Tags
```tsx
// ✅ CORRECT
<article className="card">
  <a href={item.href}>
    <h3>{item.title}</h3>
    <p>{item.summary}</p>
  </a>
</article>

// ❌ WRONG
<div className="card">
  <a href={item.href}>...</a>
</div>
```

**Why**: Better content structure, improved crawlability, enhanced accessibility.

---

### 4️⃣ Time Elements for Dates
```tsx
// ✅ CORRECT
<time dateTime="2024-01-16T10:00:00Z">
  January 16, 2024
</time>

// ❌ WRONG
<span>January 16, 2024</span>
```

**Props Required:**
```typescript
interface ArticleItem {
  datePublished?: string; // ISO 8601 format
  timestamp?: string;     // Human-readable
}
```

**Why**: Machine-readable dates, freshness signals, better content understanding.

---

### 5️⃣ Image Optimization
```tsx
// ✅ CORRECT - Non-hero images
<img
  src={imageUrl}
  alt={imageAlt || `${title} - Descriptive context`}
  width={imageWidth || 451}
  height={imageHeight || 280}
  loading="lazy"
/>

// ✅ CORRECT - Hero images
<img
  src={heroImage}
  alt="Descriptive alt text"
  width={1200}
  height={630}
  loading="eager"
/>

// ❌ WRONG
<img src={imageUrl} alt={title} />
```

**Props Required:**
```typescript
interface ImageItem {
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}
```

**Why**: Better Core Web Vitals (CLS), faster loading, improved image SEO, accessibility.

---

### 6️⃣ Descriptive Alt Text
```tsx
// ✅ GOOD - Context-aware fallbacks
alt={article.imageAlt || `${article.title} - Article image`}
alt={imageAlt || `${heading} - Hero illustration`}
alt={news.imageAlt || `${news.title} - News article image`}

// ⚠️ ACCEPTABLE - For decorative images only
alt=""

// ❌ WRONG - Too generic
alt={article.title}
alt="image"
alt="photo"
```

**Why**: Accessibility, image search SEO, better user experience for screen readers.

---

## 📋 Implementation Checklist

### Before Starting
- [ ] Identify if this is a content section (requires structured data)
- [ ] Determine appropriate Schema.org type
- [ ] Plan what content will have images/dates

### Type Definitions
- [ ] Add `id?: string` to section props
- [ ] Add `enableStructuredData?: boolean` (if content section)
- [ ] Add SEO fields to content items:
  - [ ] `author?: string`
  - [ ] `datePublished?: string`
  - [ ] `imageWidth?: number`
  - [ ] `imageHeight?: number`

### Component Implementation
- [ ] Apply `id` prop to `<section>` element
- [ ] Implement structured data with `enableStructuredData` prop
- [ ] Wrap articles/news in `<article>` tags
- [ ] Use `<time dateTime="...">` for all dates
- [ ] Add `width`, `height`, `loading` to all images
- [ ] Implement descriptive alt text with fallbacks
- [ ] Use `loading="eager"` for hero images
- [ ] Use `loading="lazy"` for other images

### Testing & Validation
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate with [Schema.org Validator](https://validator.schema.org/)
- [ ] Run Lighthouse audit (target: 90+ SEO score)
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Test anchor links (`#section-id`)
- [ ] Verify semantic HTML with accessibility tree
- [ ] Test alt text with screen reader

### Documentation
- [ ] Update component README with SEO features
- [ ] Add Storybook examples with SEO props
- [ ] Document structured data output
- [ ] Include anchor link usage examples

---

## 🚀 Quick Copy-Paste Templates

### Basic Section Props
```typescript
interface YourSectionProps {
  /** Theme mode */
  themeMode?: 'auto' | 'light' | 'dark';
  /** Section ID for anchor linking */
  id?: string;
  /** Additional CSS classes */
  className?: string;
}
```

### Content Section Props
```typescript
interface YourContentSectionProps {
  /** Theme mode */
  themeMode?: 'auto' | 'light' | 'dark';
  /** Section ID for anchor linking */
  id?: string;
  /** Enable structured data for SEO */
  enableStructuredData?: boolean;
  /** Additional CSS classes */
  className?: string;
}
```

### Article/News Item Props
```typescript
interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  author?: string;
  datePublished?: string; // ISO 8601: "2024-01-16T10:00:00Z"
  timestamp?: string;     // Human-readable: "2 hours ago"
}
```

### Section Structure Template
```tsx
export const YourSection = ({
  themeMode = 'auto',
  id,
  enableStructuredData = true,
  className
}: YourSectionProps) => {
  // Generate structured data
  const structuredData = enableStructuredData ? {
    "@context": "https://schema.org",
    "@type": "SchemaType",
    // ... schema properties
  } : null;

  return (
    <section
      id={id}
      className={twMerge(
        'px-m md:px-xl py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]',
        themeMode === 'light' && 'light',
        themeMode === 'dark' && 'dark',
        className
      )}
    >
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Content */}
      </div>
    </section>
  );
};
```

### Article Card Template
```tsx
<article className="card">
  <a href={article.href}>
    {/* Image */}
    {article.imageUrl && (
      <img
        src={article.imageUrl}
        alt={article.imageAlt || `${article.title} - Article image`}
        width={article.imageWidth || 451}
        height={article.imageHeight || 280}
        loading="lazy"
      />
    )}
    
    {/* Content */}
    <h3>{article.title}</h3>
    <p>{article.summary}</p>
    
    {/* Date */}
    {article.datePublished && (
      <time dateTime={article.datePublished}>
        {formatDate(article.datePublished)}
      </time>
    )}
  </a>
</article>
```

### FAQ Schema Template
```typescript
const structuredData = enableStructuredData && items.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.title,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": typeof item.content === 'string' ? item.content : item.title
    }
  }))
} : null;
```

### Article Schema Template
```typescript
const structuredData = enableStructuredData && articles.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": articles
    .filter(article => article.href)
    .map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": article.title,
        "description": article.summary,
        ...(article.imageUrl && { "image": article.imageUrl }),
        ...(article.href && { "url": article.href }),
        ...(article.author && { "author": { "@type": "Person", "name": article.author } }),
        ...(article.datePublished && { "datePublished": article.datePublished })
      }
    }))
} : null;
```

---

## 🎯 Common Mistakes to Avoid

### ❌ Missing ID Prop
```tsx
<section className="...">  // Missing id prop
```
**Fix:** `<section id={id} className="...">`

### ❌ Generic Divs Instead of Articles
```tsx
<div className="card">...</div>
```
**Fix:** `<article className="card">...</article>`

### ❌ Missing Time Element
```tsx
<span>{article.timestamp}</span>
```
**Fix:** `<time dateTime={article.datePublished}>{article.timestamp}</time>`

### ❌ Unoptimized Images
```tsx
<img src={url} alt={title} />
```
**Fix:** Add `width`, `height`, `loading`, descriptive `alt`

### ❌ Generic Alt Text
```tsx
alt={article.title}
```
**Fix:** `alt={article.imageAlt || `${article.title} - Article image`}`

### ❌ Forgetting Structured Data
```tsx
return <section>...</section>;
```
**Fix:** Add JSON-LD script tag before content

### ❌ Wrong Loading Attribute
```tsx
<img src={heroImage} loading="lazy" />  // Hero should be eager
```
**Fix:** Use `loading="eager"` for above-fold images

---

## 📚 Resources

- **Main Documentation**: [SEO_IMPROVEMENTS_PRIORITY_1.md](./SEO_IMPROVEMENTS_PRIORITY_1.md)
- **Quick Summary**: [SEO_CHANGES_SUMMARY.md](./SEO_CHANGES_SUMMARY.md)
- **Project Rules**: [.cursorrules](./.cursorrules) - See "SEO & Semantic HTML" section

### External Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Documentation](https://schema.org/)

---

## ✨ Remember

> **SEO is not optional.** These requirements are MANDATORY for all website section components.
> 
> A website section is not complete until all Priority 1 SEO requirements are implemented and validated.

✅ **Goal**: Every website built with these components should achieve 90+ SEO score in Lighthouse.

