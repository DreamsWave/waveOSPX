import Providers from "@/Providers";
import Background from "@/features/background/Background";
import Camera from "@/features/camera/Camera";
import Debug from "@/features/debug";
import PixelGridCanvas from "@/features/debug/pixelGrid/PixelGridCanvas";
import Screen from "@/features/pc/Screen";
import HotkeyManager from "@/features/pc/hotkeys/HotkeyManager";
import ProcessManager from "@/features/pc/processManager/ProcessManager";
import WindowManager from "@/features/pc/windowManager/WindowManager";
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
          <WindowManager />
        </Screen>
      </Background>
      <PixelGridCanvas />
      <Debug />
      <ProcessManager />
    </Providers>
  );
});

export default App;
