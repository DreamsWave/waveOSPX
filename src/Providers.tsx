import ErrorBoundary from "@/ErrorBoundary";
import { BackgroundContextProvider } from "@/features/background/context";
import ThemeProvider from "@/features/theme/provider";
import { ReactQueryProvider } from "@/libs/react-query";
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
        <ReactQueryProvider>
          <BackgroundContextProvider>
            <HelmetProvider>
              <StyleSheetManager enableVendorPrefixes>
                <ThemeProvider>{children}</ThemeProvider>
              </StyleSheetManager>
            </HelmetProvider>
          </BackgroundContextProvider>
        </ReactQueryProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default Providers;
