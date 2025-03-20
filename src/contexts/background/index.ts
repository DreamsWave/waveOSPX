import useBackgroundContextState from "@/contexts/background/useBackgroundContextState";
import contextFactory from "@/contexts/contextFactory";

const { Provider, useContext } = contextFactory(useBackgroundContextState);

export { Provider as BackgroundProvider, useContext as useBackground };
