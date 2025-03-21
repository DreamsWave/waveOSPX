import ErrorBoundary from "@/ErrorBoundary";
import { BackgroundContextProvider } from "@/features/background/backgroundContext";
import ThemeProvider from "@/features/theme/ThemeProvider";
import { store } from "@/store";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { StyleSheetManager } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BackgroundContextProvider>
          <HelmetProvider>
            <StyleSheetManager enableVendorPrefixes>
              <ThemeProvider>{children}</ThemeProvider>
            </StyleSheetManager>
          </HelmetProvider>
        </BackgroundContextProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default Providers;
