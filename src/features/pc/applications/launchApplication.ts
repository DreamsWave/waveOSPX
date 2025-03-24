import MusicPlayerIcon from "@/assets/icons/music-player-64-64-x3.png";
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
    console.log("launch: ", appType);
    if (mode === "phone") return;

    const windowId = uuidv4();
    const newWindow: WindowState = {
      id: windowId,
      title: appType === "musicPlayer" ? "Music Player" : appType,
      position: { x: 100, y: 100 },
      size: { width: 500, height: 400 },
      isMinimized: false,
      isMaximized: false,
      application: appType,
      processId: appType === "musicPlayer" ? windowId : undefined,
      icon: appType === "musicPlayer" ? MusicPlayerIcon : "",
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
