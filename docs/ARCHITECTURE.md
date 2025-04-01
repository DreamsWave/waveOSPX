# Project Architecture

This document outlines the overall architecture of the waveOSPX application.

## Directory Structure

- `/src/features/` - Feature-based modules (phone, PC, camera, etc.)
- `/src/components/` - Reusable UI components shared across features
- `/src/hooks/` - Custom React hooks
- `/src/utils/` - Utility functions
- `/src/constants/` - Shared application constants
- `/src/types/` - TypeScript shared type definitions
- `/src/styles/` - Global styles and theming
- `/src/assets/` - Static assets (images, icons, sounds, textures)
- `/src/libs/` - Third-party library integrations

## Core Concepts

### Feature-Based Organization

The application is organized around features (e.g., phone, PC, theme). Each feature:

- Has its own directory
- Manages its own state (Redux or Context)
- Contains feature-specific components
- Has clear boundaries from other features

### Device Simulation

The application simulates multiple devices:

- **PC Interface** - Windowed interface with applications and taskbar
- **Phone Interface** - Mobile device with keypad and simple applications

### State Management

See [STATE_MANAGEMENT.md](./STATE_MANAGEMENT.md) for details on state management strategy.

## Rendering Flow

1. The application starts in `main.tsx`
2. `App.tsx` sets up the main layout
3. `Providers.tsx` wraps the app with all necessary context providers
4. Device components (Phone, PC) render their interfaces

## Key Technologies

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Redux Toolkit** - State management
- **Styled Components** - Component styling
- **Framer Motion** - Animations

## Cross-Cutting Concerns

- **Theming** - Handled via themes in the styles directory
- **Input Handling** - Keyboard/mouse inputs are managed per device
- **Error Boundaries** - Used to catch and display errors gracefully
