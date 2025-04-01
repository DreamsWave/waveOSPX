import { openProcess } from "@/features/pc/process/slice";
import type { AppDispatch } from "@/store";

export const launchApplication =
  (appType: string) => (dispatch: AppDispatch) => {
    console.log(appType);
    dispatch(openProcess({ id: appType }));
  };
