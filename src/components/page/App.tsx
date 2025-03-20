import DummyText from "@/components/common/DummyText";
import Background from "@/components/page/Background";
import Camera from "@/components/page/Camera";
import Debug from "@/components/page/Debug";
import PixelGridCanvas from "@/components/page/Debug/PixelGridCanvas";
import Metadata from "@/components/page/Metadata";
import Providers from "@/components/page/Providers";
import Screen from "@/components/pc/system/Screen";
import { useBackground } from "@/contexts/background";
import { memo } from "react";

const AppContent = memo(() => {
  const { isFocused, backgroundX, backgroundY } = useBackground();

  return (
    <>
      <Camera />
      <Background isFocused={isFocused} x={backgroundX} y={backgroundY}>
        <Screen isFocused={isFocused}>
          <DummyText repeat={200} />
        </Screen>
      </Background>
      <PixelGridCanvas x={backgroundX} y={backgroundY} />
      <Debug />
    </>
  );
});

const App = memo(() => {
  return (
    <Providers>
      <Metadata />
      <AppContent />
    </Providers>
  );
});

export default App;
