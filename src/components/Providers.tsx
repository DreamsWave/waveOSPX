import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FocusProvider } from "@/contexts/FocusContext";
import { ThemeProviderWrapper } from "@/contexts/ThemeContext";
import { useThemeContext } from "@/hooks/useThemeContext";
import GlobalStyle from "@/styles/GlobalStyle";
import themes from "@/styles/themes";
import { HelmetProvider } from "react-helmet-async";
import { StyleSheetManager, ThemeProvider } from "styled-components";

const ThemeContent = ({ children }: Props) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={themes[theme]}>
      <FocusProvider>
        <GlobalStyle />
        {children}
      </FocusProvider>
    </ThemeProvider>
  );
};

type Props = {
  children: React.ReactNode;
};
export const Providers = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProviderWrapper>
          <StyleSheetManager enableVendorPrefixes>
            <ThemeContent>{children}</ThemeContent>
          </StyleSheetManager>
        </ThemeProviderWrapper>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default Providers;
