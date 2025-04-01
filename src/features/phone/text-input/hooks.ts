import {
  INPUT_TIMEOUT_MS,
  type T9Key,
  T9_KEY_MAP,
} from "@/features/phone/keypad/constants";
import {
  backspace,
  insert,
  moveLeft,
  moveRight,
  resetTimeout,
  setCursorPosition,
  setText,
} from "@/features/phone/text-input/slice";
import type { RootState } from "@/store";
import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useTextInput(keyMap: Record<T9Key, string[]> = T9_KEY_MAP) {
  const dispatch = useDispatch();
  const timeoutRef = useRef<number | null>(null);

  const inputState = useSelector((state: RootState) => state.phone.textInput);

  const clearTimeoutRef = useCallback(
    (callback?: () => void, delay?: number) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (callback && delay) {
        timeoutRef.current = window.setTimeout(() => {
          callback();
          timeoutRef.current = null;
        }, delay);
      }
    },
    []
  );

  const handleT9Input = useCallback(
    (key: T9Key) => {
      const characters = keyMap[key];
      const isCycling =
        inputState.activeKey === key &&
        inputState.cursorPosition === inputState.lastInsertPosition + 1;
      const charIndex = isCycling
        ? (inputState.charCycleCount + 1) % characters.length
        : 0;
      const newChar = characters[charIndex];

      dispatch(insert({ char: newChar, key, charIndex }));
      clearTimeoutRef(() => dispatch(resetTimeout()), INPUT_TIMEOUT_MS);
    },
    [
      dispatch,
      keyMap,
      inputState.activeKey,
      inputState.cursorPosition,
      inputState.lastInsertPosition,
      inputState.charCycleCount,
      clearTimeoutRef,
    ]
  );

  return {
    text: inputState.text.join(""),
    setText: (text: string) => dispatch(setText(text)),
    handleT9Input,
    handleBackspace: () => dispatch(backspace()),
    cursorPosition: inputState.cursorPosition,
    setCursorPosition: (cursorPosition: number) =>
      dispatch(setCursorPosition(cursorPosition)),
    moveCursorLeft: () => dispatch(moveLeft()),
    moveCursorRight: () => dispatch(moveRight()),
  };
}
