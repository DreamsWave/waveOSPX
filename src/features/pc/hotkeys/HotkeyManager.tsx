import { launchApplication } from "@/features/applications/launchApplication";
import {
  toggleDebug,
  toggleDebugMenu,
  togglePixelGrid,
} from "@/features/debug/debugSlice";
import {
  DEBUG_HOTKEY,
  TEXT_EDITOR_HOTKEY,
  TOGGLE_PIXEL_GRID_HOTKEY,
} from "@/features/pc/hotkeys/constants";
import { RootState } from "@/store";
import { useHotkeys } from "react-hotkeys-hook";
import { useDispatch, useSelector } from "react-redux";

const HotkeyManager = () => {
  const dispatch = useDispatch();
  const debug = useSelector((state: RootState) => state.debug);
  const mode = useSelector((state: RootState) => state.mode.currentMode);

  // PC hotkeys
  useHotkeys(
    TEXT_EDITOR_HOTKEY,
    () => {
      if (mode === "pc") {
        console.log("launch TextEditor");
        // launchApplication("TextEditor");
      }
    },
    { enabled: mode === "pc" },
    [mode, launchApplication]
  );

  // DEBUG hotkeys
  // Toggle debug mode (enables/disables debug tools)
  useHotkeys(
    DEBUG_HOTKEY,
    () => {
      if (!debug.enabled) {
        dispatch(toggleDebug());
        dispatch(toggleDebugMenu());
      } else {
        dispatch(toggleDebugMenu());
      }
    },
    { enabled: true },
    [debug.enabled, toggleDebug, toggleDebugMenu]
  );
  // Toggle pixel grid
  useHotkeys(TOGGLE_PIXEL_GRID_HOTKEY, () => dispatch(togglePixelGrid()));

  return null;
};

export default HotkeyManager;
