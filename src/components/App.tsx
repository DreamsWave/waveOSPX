import Background from "@/components/Background";
import DebugButtons from "@/components/Debug/DebugButtons";
import DummyText from "@/components/Debug/DummyText";
import Metadata from "@/components/Metadata";
import Providers from "@/components/Providers";
import Screen from "@/components/Screen";
import { memo } from "react";

const App = memo(() => {
  return (
    <Providers>
      <Metadata />
      <DebugButtons />
      <Background>
        <Screen>
          <DummyText repeat={200} />
        </Screen>
      </Background>
    </Providers>
  );
});

export default App;
