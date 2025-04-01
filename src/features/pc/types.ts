import type { ProcessesState } from "@/features/pc/process/slice";
import type { TaskbarState } from "@/features/pc/taskbar/slice";
import type { Reducer } from "@reduxjs/toolkit";

export interface PCState {
  applications: Reducer<Record<string, unknown>>;
  processes: Reducer<ProcessesState>;
  taskbar: Reducer<TaskbarState>;
}
