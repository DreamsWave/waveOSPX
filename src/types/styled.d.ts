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
          text: {
            light: string;
            dark: string;
          };
          textShadow: {
            light: string;
            dark: string;
          };
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
          border: {
            default: string;
            hover: string;
            active: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
          };
        };
        startMenuButton: {
          background: {
            default: string;
            hover: string;
          };
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
          background: {
            default: string;
            accent: string;
            unfocused: string;
          };
          text: string;
          button: {
            background: {
              default: string;
              hover: string;
            };
            text: string;
          };
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
      cursorColor: string;
    };

    apps: {
      // biome-ignore lint/complexity/noBannedTypes: <explanation>
      pc: {};
      // biome-ignore lint/complexity/noBannedTypes: <explanation>
      phone: {};
    };

    // Common utilities and tokens
    common: {
      background: {
        primary: string;
        secondary: string;
        accent: string;
        muted: string;
        white: string;
        black: string;
      };
      text: {
        primary: string;
        secondary: string;
        accent: string;
        muted: string;
        white: string;
        black: string;
      };
      link: {
        color: string;
        hover: string;
      };
      border: {
        color: string;
        colorFocused: string;
        width: number;
      };
      scrollbar: {
        background: string;
        hover: string;
        active: string;
        disabled: string;
        secondaryBackground: string;
      };

      // Info display component styling for system information areas
      infoDisplay: {
        background: string;
        margin: number;
        padding: number;
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
    getFontSize: (
      type: keyof DefaultTheme["common"]["fontSizes"] = "base"
    ) => string;
  }

  export function useTheme(): DefaultTheme;
}
