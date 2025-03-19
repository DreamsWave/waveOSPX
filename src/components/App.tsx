import Camera from "@/components/Camera";
import DummyText from "@/components/DummyText";
import Metadata from "@/components/Metadata";
import Providers from "@/components/Providers";
import Debug from "@/components/system/Debug";
import { memo } from "react";

const App = memo(() => {
  return (
    <Providers>
      <Metadata />
      <Debug />
      <Camera>
        <DummyText repeat={200} />
      </Camera>
    </Providers>
  );
});

export default App;
