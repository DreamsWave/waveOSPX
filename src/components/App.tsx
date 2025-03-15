import { memo } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
// import { type FeatureBundle, LazyMotion } from "motion/react";
// import { useSession } from "@/contexts/session";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Metadata from "@/components/Metadata";
import SomeComponent from "@/components/SomeComponent";
import GlobalStyle from "@/styles/GlobalStyle";
import themes, { ThemeName } from "@/styles/themes";
import { DEFAULT_THEME } from "@/utils/constants";
import { HelmetProvider } from "react-helmet-async";

// const motionFeatures = async (): Promise<FeatureBundle> =>
//   (
//     await import(
//       /* webpackMode: "eager" */
//       "styles/motionFeatures"
//     )
//   ).default;

const App = () => {
  // const { themeName } = useSession();
  const themeName: ThemeName = DEFAULT_THEME;

  return (
    <>
      <ErrorBoundary>
        <HelmetProvider>
          <Metadata />
          <StyleSheetManager enableVendorPrefixes>
            <ThemeProvider theme={themes[themeName] || themes[DEFAULT_THEME]}>
              <GlobalStyle />
              {/* <LazyMotion features={motionFeatures} strict> */}
              <SomeComponent>Some compoennt</SomeComponent>
              {/* </LazyMotion> */}
            </ThemeProvider>
          </StyleSheetManager>
        </HelmetProvider>
      </ErrorBoundary>
    </>
  );
};

export default memo(App);
