import Background from "@/components/Background";
import Camera from "@/components/Camera";
import DummyText from "@/components/DummyText";
import Metadata from "@/components/Metadata";
import Providers from "@/components/Providers";
import Screen from "@/components/Screen";
import Debug from "@/components/system/Debug";
import PixelGrid from "@/components/system/Debug/PixelGrid";
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
      <PixelGrid x={backgroundX} y={backgroundY} />
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
