import { Mode } from "@/features/mode/modeSlice";
import { addWindow } from "@/features/pc/windowManager/windowSlice";
import { ApplicationType } from "@/types";
import { Dispatch } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const launchApplication =
  (appType: ApplicationType, mode: Mode = "pc") =>
  (dispatch: Dispatch) => {
    if (mode === "phone") return;

    const newWindow = {
      id: uuidv4(),
      title: appType,
      position: { x: 100, y: 100 },
      size: { width: 800, height: 600 },
      isMinimized: false,
      isMaximized: false,
      application: appType,
      data: {},
    };
    dispatch(addWindow(newWindow));
  };
