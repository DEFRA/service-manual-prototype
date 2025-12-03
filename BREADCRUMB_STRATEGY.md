# Breadcrumb Navigation Strategy

## Overview

This document outlines the breadcrumb navigation strategy implemented across the Defra Service Manual prototype, following GOV.UK design patterns and best practices.

## Design Principles

### 1. **Purpose and User Needs**
Breadcrumbs help users:
- Understand their location within the site hierarchy
- Navigate back to higher-level pages quickly
- Build a mental model of the site structure

### 2. **GOV.UK Best Practices**
Following official GOV.UK design system guidance:
- Always start with "Home" as the root
- Show the complete hierarchical path
- Current page is **never** a link (visual indication only)
- Use GOV.UK's accessible breadcrumb component
- Match breadcrumb labels to navigation labels (not necessarily full page titles)

## Site Hierarchy

```
/
├── /service-manual (Service Manual)
    ├── /service-standard (Service standard)
    ├── /components (Components)
    ├── /patterns (Patterns)
    ├── /accessibility (Accessibility)
    └── /working-with-defra (Working with Defra)
```

## Breadcrumb Patterns

### Homepage (`/`)
**No breadcrumbs** - Homepage should never have breadcrumbs as it's the root of navigation.

### Service Manual Home (`/service-manual`)
```
Home > Service Manual
```

### Manual Section Pages
All manual pages follow this pattern:
```
Home > Service Manual > [Page Name]
```

Examples:
- **Service standard**: `Home > Service Manual > Service standard`
- **Components**: `Home > Service Manual > Components`
- **Patterns**: `Home > Service Manual > Patterns`
- **Accessibility**: `Home > Service Manual > Accessibility`
- **Working with Defra**: `Home > Service Manual > Working with Defra`

## Implementation

### Reusable Component
A reusable breadcrumb include has been created at `app/views/includes/breadcrumbs.njk` to ensure consistency.

### Usage Pattern
In each page template, set the `breadcrumbItems` variable in the `beforeContent` block:

```njk
{% block beforeContent %}
{% set breadcrumbItems = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Service Manual",
    href: "/service-manual"
  },
  {
    text: "Components"  // No href - this is the current page
  }
] %}
{% include "includes/breadcrumbs.njk" %}
{% endblock %}
```

### Key Implementation Details

1. **Consistency**: All pages use the same include component
2. **Maintainability**: Easy to update breadcrumbs by changing the `breadcrumbItems` array
3. **Accessibility**: GOV.UK breadcrumb component handles ARIA labels automatically
4. **Responsive**: Component works on all device sizes

## Content Design Decisions

### Label Choices
- **"Home"**: Clear, universal label for the root/homepage
- **"Service Manual"**: Matches the section name and navigation
- **Page labels**: Match the sidebar navigation labels exactly (e.g., "Service standard" not "Meeting the Service Standard at Defra")

### Why These Labels?
- **Consistency**: Breadcrumb labels match the primary navigation (sidebar), reducing cognitive load
- **Brevity**: Shorter labels work better in breadcrumbs (which are typically single-line)
- **User mental models**: Users think in terms of sections and pages, not full descriptive titles

## Accessibility

The GOV.UK breadcrumb component automatically provides:
- Proper ARIA labels for screen readers
- Keyboard navigation support
- Visual separator indicators
- Focus states for keyboard users
- Semantic HTML (`<nav>` element)

## Future Considerations

### Potential Enhancements
If the site grows, consider:

1. **Dynamic Breadcrumbs**: For deeper hierarchies or dynamic content
   - Example: `Home > Service Manual > Components > Button component`

2. **Context-Aware Breadcrumbs**: For pages accessible from multiple paths
   - Use route-based breadcrumb generation

3. **Breadcrumb Helper Function**: Create a filter or helper to generate breadcrumbs from route metadata

4. **Mobile Optimization**: GOV.UK component handles this, but monitor for very long paths

### Adding New Pages
To add breadcrumbs to a new page:
1. Identify the page's position in the hierarchy
2. Set `breadcrumbItems` in the `beforeContent` block
3. Include the breadcrumb component
4. Ensure labels match navigation labels

## Testing Checklist

- [x] Breadcrumbs appear on all manual pages
- [x] No breadcrumbs on homepage
- [x] Current page is not a link
- [x] All links are functional
- [x] Labels match navigation labels
- [x] Accessibility tested (screen reader, keyboard navigation)
- [x] Consistent placement (in `beforeContent` block)
- [x] Responsive design works correctly

## References

- [GOV.UK Design System - Breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/)
- [GOV.UK Publishing Guide - Breadcrumbs](https://design-guide.publishing.service.gov.uk/components/breadcrumbs/)
- [WCAG 2.1 Navigation Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html)

