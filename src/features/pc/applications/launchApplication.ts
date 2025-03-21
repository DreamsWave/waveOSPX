import { Mode } from "@/features/mode/modeSlice";
import { startProcess } from "@/features/pc/processManager/processSlice";
import {
  addWindow,
  WindowState,
} from "@/features/pc/windowManager/windowSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const launchApplication =
  (appType: WindowState["application"], mode: Mode = "pc") =>
  (dispatch: Dispatch) => {
    if (mode === "phone") return;

    const windowId = uuidv4();
    const newWindow: WindowState = {
      id: windowId,
      title: appType === "musicPlayer" ? "Music Player" : appType,
      position: { x: 100, y: 100 },
      size: { width: 300, height: 200 },
      isMinimized: false,
      isMaximized: false,
      application: appType,
      processId: appType === "musicPlayer" ? windowId : undefined,
    };

    dispatch(addWindow(newWindow));

    if (appType === "musicPlayer") {
      dispatch(
        startProcess({
          id: windowId,
          type: "musicPlayer",
          track: "/music/Lady of the 80's.mp3",
        })
      );
    }
  };
