import { memo } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
// import { type FeatureBundle, LazyMotion } from "motion/react";
// import { useSession } from "@/contexts/session";
import Background from "@/components/Background";
import DummyText from "@/components/DummyText";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Metadata from "@/components/Metadata";
import PixelGrid from "@/components/PixelGrid";
import Screen from "@/components/Screen";
import GlobalStyle from "@/styles/GlobalStyle";
import themes, { ThemeName } from "@/styles/themes";
import { DEFAULT_THEME, PIXEL_SIZE } from "@/utils/constants";
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
              <Background>
                <Screen>
                  <DummyText />
                </Screen>
              </Background>
              <PixelGrid pixelSize={PIXEL_SIZE * 4} />
              {/* </LazyMotion> */}
            </ThemeProvider>
          </StyleSheetManager>
        </HelmetProvider>
      </ErrorBoundary>
    </>
  );
};

export default memo(App);
