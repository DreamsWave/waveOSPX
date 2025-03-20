import ErrorBoundary from "@/components/page/ErrorBoundary";
import { BackgroundProvider } from "@/contexts/background";
import { RootState, store } from "@/store";
import GlobalStyle from "@/styles/GlobalStyle";
import themes from "@/styles/themes";
import { HelmetProvider } from "react-helmet-async";
import { Provider, useSelector } from "react-redux";
import { StyleSheetManager, ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ThemeContent = ({ children }: Props) => {
  const theme = useSelector((state: RootState) => state.settings.theme);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const Providers = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <StyleSheetManager enableVendorPrefixes>
            <ThemeContent>
              <BackgroundProvider>{children}</BackgroundProvider>
            </ThemeContent>
          </StyleSheetManager>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default Providers;
