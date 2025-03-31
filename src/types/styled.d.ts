import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;

    // PC Component theming
    pc: {
      screen: {
        resolution: { height: number; width: number };
        position: { x: number; y: number };
      };
      desktop: {
        background: string;
        text: string;
        shortcut: {
          text: string;
          iconSize: number;
          fontSize: number;
        };
        grid: {
          gapX: number;
          gapY: number;
          padding: number;
        };
      };
      taskbar: {
        background: string;
        text: string;
        separator: string;
        height: number;
        borderWidth: number;
        processButton: {
          border: string;
          borderActive: string;
          background: string;
          backgroundActive: string;
        };
        startMenuButton: {
          background: string;
          text: string;
        };
        time: {
          color: string;
        };
      };
      window: {
        background: string;
        text: string;
        outline: string;
        outlineFocused: string;
        titleBar: {
          height: number;
          background: string;
          backgroundAccent: string;
          backgroundUnfocused: string;
          text: string;
        };
      };
      startMenu: {
        background: string;
        borderColor: string;
        borderWidth: number;
        text: string;
      };
    };

    // Phone Component theming
    phone: {
      background: string;
      text: string;
      border: string;
      displayControls: {
        background: string;
        text: string;
      };
    };

    // Common utilities and tokens
    common: {
      background: string;
      text: string;
      border: {
        color: string;
        colorFocused: string;
        width: number;
      };

      pixelSize: number;
      fontSizes: {
        xs: number;
        sm: number;
        base: number;
        lg: number;
        xl: number;
      };
      iconSizes: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };

      backgroundImageSize: { width: number; height: number };
      zIndex: { highest: number; top: number; middle: number };
    };

    // Debug settings
    debug: {
      background: string;
      backgroundHover: string;
      text: string;
      pixelGridLineColor: string;
      pixelGridLineWidth: number;
      buttonSize: number;
      menuWidth: number;
    };

    // Formatting options
    formats: {
      dateModified: Intl.DateTimeFormatOptions;
      systemFont: string;
    };

    // Utility function for scaling pixel values
    s: (size: number) => number;
    getBorder: (width?: number, color?: string) => string;
  }

  export function useTheme(): DefaultTheme;
}
