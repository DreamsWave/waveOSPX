# Styling and Theming Guide

This document outlines the styling approach and theming system used in waveOSPX.

## Styling Approach

We use styled-components for styling our application, with a focus on:

1. Component-scoped styles
2. Theme-based styling
3. Consistent design tokens
4. Responsive layouts

## File Naming and Organization

- Styled component files should be named `styles.ts`
- Each feature or component can have its own styles file
- Global styles are in `/src/styles/`

## Theme System

The application supports multiple themes that can be switched at runtime:

- Themes are defined in `/src/styles/themes.ts`
- Theme switching is managed by the theme slice in Redux
- All colors should come from the theme to ensure consistency

## Design Tokens

We use design tokens for consistent styling:

### Colors

- Use color utilities from `/src/styles/colorUtils.ts`
- Never use hardcoded colors - always reference the theme

### Typography

- Font sizes should use the `getFontSize` utility
- Stick to the typography scale defined in the theme
- Use appropriate text components for different types of text

### Spacing

- Use spacing tokens for margins and padding
- Maintain consistent spacing throughout the app

### Borders and Shadows

- Use the provided border and shadow utilities
- Maintain consistent elevation levels

## Responsive Design

- Test the application at different viewport sizes
- Use media queries for responsive adjustments

## Accessibility

- Ensure color contrast meets WCAG standards
- Provide appropriate focus states for interactive elements
- Use semantic HTML elements

## Examples

### Creating a Styled Component

```tsx
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
```

### Using Theme Colors

```tsx
import { getPrimaryColor, getTextColor } from "@/styles/colorUtils";

export const StyledContainer = styled.div`
  background-color: ${getPrimaryColor(3)};
  background-color: ${getColorFamily("Slate", 5)};
  background-color: ${({ theme }) => theme.borderColor};
  color: ${getTextColor("light")};
`;
```
