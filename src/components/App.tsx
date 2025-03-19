import Camera from "@/components/Camera";
import Debug from "@/components/Debug";
import DummyText from "@/components/Debug/DummyText";
import Metadata from "@/components/Metadata";
import Providers from "@/components/Providers";
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
