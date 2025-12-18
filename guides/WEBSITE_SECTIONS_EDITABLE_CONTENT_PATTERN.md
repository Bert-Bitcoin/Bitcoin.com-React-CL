# Website Sections: Editable Content Pattern

## Overview

This document summarizes the implementation of two critical rules for website section components:

1. **website-sections-editable-content (STRICT)** - All text content must be editable through props
2. **website-sections-editable-links (STRICT)** - All links/URLs must be editable through props

These rules ensure maximum flexibility, reusability, and maintainability of website section components.

## Changes Made

### 1. Updated WebsiteFooter Component

**File: `src/components/website-footer/WebsiteFooter.tsx`**

Added `logoAriaLabel` prop to make the Logo accessibility label customizable:

```typescript
logoAriaLabel?: string; // Default: 'Bitcoin.com'
```

**All Text Content Now Editable:**
- ✅ `downloadTitle` - App download section heading
- ✅ `logoAriaLabel` - Logo accessibility label (NEW)
- ✅ `legalText` - Copyright/legal text at bottom
- ✅ `linkGroups` - All link group headings and link labels
- ✅ `badges` - App store badge alt texts

**File: `src/components/website-footer/WebsiteFooter.types.ts`**

Added the `logoAriaLabel` property to the `WebsiteFooterProps` interface with proper JSDoc documentation.

### 2. Updated Documentation

**File: `src/components/website-footer/README.md`**

- Added `logoAriaLabel` to the Props table
- Added new section: "Custom Logo Accessibility Label" with example
- Added comprehensive "Complete Text Content Customization" example showing how to customize ALL text in the footer

### 3. Added Storybook Story

**File: `src/components/website-footer/WebsiteFooter.stories.tsx`**

Added new `CustomTextContent` story that demonstrates:
- Customizing all text content through props
- Real-world example of complete content customization
- Documents the editable content pattern in action

### 4. Added New Rules to .cursorrules

**File: `.cursorrules`**

Added two comprehensive rules:

**A) Rule: website-sections-editable-content (STRICT)** which mandates:

**Key Requirements:**
1. All text content must be editable through props
2. All text props should be optional with sensible defaults
3. Include all text types (headings, descriptions, labels, aria-labels, etc.)
4. Document all text props in README with examples
5. Show complete customization examples in Storybook

**Benefits:**
- Enables content reuse across different pages
- Supports internationalization/localization
- Allows marketing teams to test different copy
- Makes components truly reusable and flexible
- Prevents component duplication for minor text changes

**B) Rule: website-sections-editable-links (STRICT)** which mandates:

**Key Requirements:**
1. All links/URLs must be editable through props
2. All link props should be optional with sensible defaults
3. Include all link types (CTA, navigation, external, app stores, etc.)
4. Use structured data (arrays/objects) for multiple links
5. Document all link props in README with examples

**Benefits:**
- Enables reuse across different environments (dev, staging, production)
- Supports A/B testing different destinations
- Allows dynamic routing based on context
- Makes components environment-agnostic
- Prevents hardcoded URLs that break when routes change

## Content Types to Make Editable

### Text Content Types

The **website-sections-editable-content** rule specifies that ALL of these text types should be editable:

1. **Headings** - h1, h2, h3, etc.
2. **Body Text** - paragraphs, descriptions
3. **Button Labels** - CTA text
4. **Link Labels** - navigation links, footer links
5. **Form Labels** - input labels, placeholders
6. **Aria Labels** - accessibility text
7. **Legal/Copyright Text** - footer legal text
8. **Image Alt Text** - image descriptions
9. **Any Other User-Facing Text**

### Link/URL Types

The **website-sections-editable-links** rule specifies that ALL of these link types should be editable:

1. **Call-to-Action (CTA) Links** - Primary button destinations
2. **Navigation Links** - Header/footer navigation
3. **External Links** - Social media, documentation, resources
4. **Download Links** - App stores (Google Play, App Store), PDFs, files
5. **Footer Links** - Legal, contact, sitemap links
6. **Image Links** - Clickable images/banners
7. **Logo Links** - Company logo destinations
8. **Deep Links** - Specific page/section navigation
9. **Any Other Clickable Elements** - That navigate to a destination

## Implementation Pattern

### Combined Text + Links Pattern

```typescript
interface LinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

interface WebsiteSectionProps {
  // Text content
  heading?: string;
  subheading?: string;
  description?: string;
  
  // CTA text + link
  ctaLabel?: string;
  ctaHref?: string;
  
  // Multiple links
  navigationLinks?: LinkItem[];
  
  // Specific link overrides
  googlePlayHref?: string;
  appStoreHref?: string;
  
  // Accessibility
  sectionAriaLabel?: string;
  
  // ... other props
}

export const WebsiteSection = ({
  heading = 'Default Heading',
  subheading = 'Default Subheading',
  description = 'Default description text',
  ctaLabel = 'Learn More',
  ctaHref = '#',
  navigationLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  googlePlayHref = 'https://play.google.com/store/apps/details?id=com.example',
  appStoreHref = 'https://apps.apple.com/app/example/id123456789',
  sectionAriaLabel = 'Website Section',
  // ... other props with defaults
}: WebsiteSectionProps) => {
  return (
    <section aria-label={sectionAriaLabel}>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <p>{description}</p>
      
      {/* CTA with editable text AND link */}
      <a href={ctaHref}>{ctaLabel}</a>
      
      {/* Navigation with editable links */}
      <nav>
        {navigationLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      
      {/* App store buttons with editable links */}
      <a href={googlePlayHref}>Get it on Google Play</a>
      <a href={appStoreHref}>Download on App Store</a>
    </section>
  );
};
```

### Common Link Prop Patterns

**1. Single CTA Links:**
```typescript
interface Props {
  ctaLabel?: string;
  ctaHref?: string;
  primaryButtonHref?: string;
  learnMoreHref?: string;
}
```

**2. App Store Links:**
```typescript
interface Props {
  googlePlayHref?: string;
  appStoreHref?: string;
}
```

**3. Social Media Links:**
```typescript
interface Props {
  twitterHref?: string;
  linkedInHref?: string;
  discordHref?: string;
  telegramHref?: string;
}
```

**4. Multiple Links (Arrays):**
```typescript
interface LinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface Props {
  links?: LinkItem[];
  navigationLinks?: LinkItem[];
  footerLinks?: LinkItem[];
}
```

**5. Grouped Links:**
```typescript
interface LinkGroup {
  heading: string;
  links: Array<{
    label: string;
    href: string;
    isExternal?: boolean;
  }>;
}

interface Props {
  linkGroups?: LinkGroup[];
}
```

## Reference Implementation

The WebsiteFooter component (`src/components/website-footer/WebsiteFooter.tsx`) now serves as the reference implementation for **both** patterns, demonstrating:

**Editable Text Content:**
- ✅ `downloadTitle` - App download section heading
- ✅ `logoAriaLabel` - Logo accessibility label
- ✅ `legalText` - Copyright/legal text
- ✅ All link labels through `linkGroups`

**Editable Links/URLs:**
- ✅ `googlePlayHref` - Google Play Store link
- ✅ `appStoreHref` - Apple App Store link
- ✅ `linkGroups[].links[].href` - All navigation link destinations
- ✅ Structured `LinkGroup` pattern for multiple organized links

**Best Practices Demonstrated:**
- Sensible default values for all props
- Complete documentation in README
- Storybook story showing full customization
- Proper TypeScript typing with JSDoc comments
- Flexible data structures for complex link scenarios

## Next Steps for Existing Components

When updating existing website section components (HeroSection, CTASection, FAQSection, etc.), ensure they follow this pattern:

1. **Audit all hardcoded text** - Find any strings directly in JSX
2. **Create props for each text element** - With sensible defaults
3. **Update TypeScript types** - Add proper JSDoc comments
4. **Document in README** - Show customization examples
5. **Add Storybook story** - Demonstrate full text customization
6. **Test accessibility** - Ensure aria-labels are customizable

## Verification Checklist

For any website section component:

**Text Content:**
- [ ] All headings editable via props
- [ ] All body text/descriptions editable via props
- [ ] All button/link labels editable via props
- [ ] All aria-labels editable via props
- [ ] All image alt texts editable via props
- [ ] All legal/copyright text editable via props

**Links/URLs:**
- [ ] All CTA button links editable via props
- [ ] All navigation links editable via props
- [ ] All external links editable via props
- [ ] All download links (app stores, files) editable via props
- [ ] All footer links editable via props
- [ ] Use structured data (arrays/objects) for multiple links

**Documentation & Implementation:**
- [ ] Props have sensible default values
- [ ] Props documented in README
- [ ] Customization example in README
- [ ] Storybook story shows full customization
- [ ] TypeScript types include all text/link props
- [ ] JSDoc comments on all props
- [ ] Link structures properly typed (LinkItem, LinkGroup, etc.)

## Impact

These rules ensure that:

✅ **Flexibility** - Components can be reused in different contexts with different copy and destinations
✅ **Environment Agnostic** - Same component works across dev, staging, and production
✅ **Localization Ready** - Easy to support multiple languages and region-specific links
✅ **Marketing Friendly** - Content teams can test different messaging and landing pages
✅ **A/B Testing** - Test different CTAs and destinations without code changes
✅ **Maintainability** - No need to fork components for text or URL changes
✅ **Consistency** - All website sections follow the same pattern
✅ **Accessibility** - All accessibility text is customizable
✅ **SEO Optimized** - Easy to update deep links and internal navigation
✅ **Dynamic Routing** - Supports context-based navigation flows

## Files Modified

1. `src/components/website-footer/WebsiteFooter.tsx`
2. `src/components/website-footer/WebsiteFooter.types.ts`
3. `src/components/website-footer/README.md`
4. `src/components/website-footer/WebsiteFooter.stories.tsx`
5. `.cursorrules`

## Conclusion

Two complementary rules are now officially part of the project's coding standards:

1. **website-sections-editable-content (STRICT)** - All text content must be editable through props
2. **website-sections-editable-links (STRICT)** - All links/URLs must be editable through props

All future website section components must follow both patterns, and existing components should be updated to comply when they are next modified.

The WebsiteFooter component serves as the **reference implementation** and demonstrates best practices for:
- Making all text content editable through props
- Making all links/URLs customizable through props
- Using structured data patterns for complex link scenarios
- Providing sensible defaults while maintaining flexibility
- Comprehensive documentation and examples

