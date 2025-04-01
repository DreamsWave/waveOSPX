import type { TextInputState } from "@/features/phone/text-input/slice";
import type { Reducer } from "@reduxjs/toolkit";

export interface PhoneState {
  textInput: Reducer<TextInputState>;
  applications: Reducer<Record<string, unknown>>;
}
