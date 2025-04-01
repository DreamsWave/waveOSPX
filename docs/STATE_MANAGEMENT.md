# State Management Strategy

This document outlines our approach to state management in the waveOSPX application.

## General Principles

We use two primary state management patterns:

1. **Redux** - For most application state
2. **React Context** - For performance-critical features

## When to use Redux

Use Redux for state that:

- Needs to be accessed by multiple components across the application
- Benefits from centralized state management
- Requires time-travel debugging
- Doesn't have performance concerns with frequent updates

Examples:

- User settings
- Application mode
- Phone text input
- PC process management

## When to use Context

Use Context API for state that:

- Requires high-frequency updates (e.g., animations, mouse movement)
- Is scoped to a specific feature or component tree
- Would cause performance issues in Redux

Examples:

- Background animations
- Camera movement
- Drag and drop operations

## Implementation Guidelines

When implementing a new feature:

1. Start with Redux as the default choice
2. If performance issues arise, consider moving to Context
3. Document your choice in comments at the top of context providers or slices

## File Structure

- Redux slices should be in `feature/slice.ts`
- Context providers should be in `feature/context.ts`
