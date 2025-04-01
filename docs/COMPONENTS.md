# Component Development Guidelines

This document provides guidelines for creating and using components in waveOSPX.

## Component Organization

Components are organized into these categories:

1. **Feature Components** - Components specific to features (in `/src/features/*/components/`)
2. **Shared Components** - Reusable across features (in `/src/components/`)
3. **Layout Components** - Structure the application (in `/src/components/layout/`)

## Naming Conventions

- **Component files:** PascalCase (e.g., `Button.tsx`)
- **Component folders:** kebab-case (e.g., `button-group/`)
- **Style files:** `styles.ts` in the component directory

## Component Structure

A typical component should follow this structure:

```text
/ComponentName/
  ├── index.tsx       # Main component file
  ├── styles.ts       # Styled components
  ├── types.ts        # Component-specific types (optional)
  ├── constants.ts    # Component-specific constants (optional)
  └── hooks.ts        # Component-specific hooks (optional)
```

## Component Design Principles

1. **Single Responsibility** - Components should do one thing well
2. **Composition over Inheritance** - Prefer composing components
3. **Props for Configuration** - Use props to make components flexible
4. **Controlled vs Uncontrolled** - Be explicit about component state management
5. **Accessibility First** - Components should be accessible by default

## Props Guidelines

- Use TypeScript interfaces to define props
- Provide default props where appropriate
- Use required props sparingly

Example:

```tsx
interface ButtonProps {
  /** Text content of the button */
  children: React.ReactNode;
  /** Called when button is clicked */
  onClick?: () => void;
  /** Visual variant of the button */
  variant?: "primary" | "secondary" | "danger";
  /** Whether the button is disabled */
  disabled?: boolean;
}
```

## Performance Considerations

- Use `React.memo()` for components that render often but don't change frequently
- Use `useCallback()` for functions passed as props
- Use `useMemo()` for expensive calculations
- Avoid unnecessary re-renders

## State Management in Components

- Keep local UI state in components
- Use Redux for application state
- Use Context for performance-critical features
- See [STATE_MANAGEMENT.md](./STATE_MANAGEMENT.md) for more details

## Example Component

```tsx
// Button.tsx
import React from "react";
import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

export const Button = React.memo(
  ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
  }: ButtonProps) => {
    const handleClick = useCallback(() => {
      if (onClick) onClick();
    }, [onClick]);

    return (
      <StyledButton
        $variant={variant}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </StyledButton>
    );
  }
);
```
