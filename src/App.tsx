import Providers from "@/Providers";
import Background from "@/features/background/Background";
import Camera from "@/features/camera/Camera";
import Debug from "@/features/debug";
import DummyText from "@/features/debug/DummyText";
import PixelGridCanvas from "@/features/debug/pixelGrid/PixelGridCanvas";
import Screen from "@/features/pc/Screen";
import HotkeyManager from "@/features/pc/hotkeys/HotkeyManager";
import Metadata from "@/shared/components/Metadata";
import { memo } from "react";

const App = memo(() => {
  return (
    <Providers>
      <Metadata />
      <HotkeyManager />
      <Camera />
      <Background>
        <Screen>
          <DummyText repeat={200} />
        </Screen>
      </Background>
      <PixelGridCanvas />
      <Debug />
    </Providers>
  );
});

export default App;
