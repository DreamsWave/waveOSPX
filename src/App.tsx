import Providers from "@/Providers";
import Metadata from "@/components/Metadata";
import Background from "@/features/background";
import Camera from "@/features/camera";
import Debug from "@/features/debug";
import PixelGridCanvas from "@/features/debug/components/pixel-grid";
import PC from "@/features/pc";
import HotkeyManager from "@/features/pc/hotkeys";
import Phone from "@/features/phone";
import { memo } from "react";

const App = memo(() => {
  return (
    <Providers>
      <Metadata />
      <HotkeyManager />
      <Camera />
      <Background>
        <PC />
      </Background>
      <Phone />
      <PixelGridCanvas />
      <Debug />
    </Providers>
  );
});

export default App;
