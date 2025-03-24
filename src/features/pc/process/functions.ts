import { openProcess } from "@/features/pc/process/processSlice";
import { AppDispatch } from "@/store";

export const launchApplication =
  (appType: string) => (dispatch: AppDispatch) => {
    console.log(appType);
    dispatch(openProcess({ id: appType }));
  };
