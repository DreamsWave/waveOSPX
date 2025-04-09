import PhoneSVG from "@/assets/textures/phone/phone.svg";
import { toggleMode } from "@/features/mode/slice";
import PhoneForm from "@/features/phone/keypad/components/PhoneForm";
import { PhoneContainer, PhoneTexture } from "@/features/phone/styles";
import type { RootState } from "@/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Phone() {
  const mode = useSelector((state: RootState) => state.mode.currentMode);
  const dispatch = useDispatch();
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was on a navigation button
      const target = event.target as HTMLElement;
      const isNavigationButton =
        target.closest('[aria-label*="Switch to"]') ||
        target.closest('[aria-label*="Open settings"]');

      if (
        phoneRef.current &&
        !phoneRef.current.contains(target) &&
        !isNavigationButton
      ) {
        dispatch(toggleMode());
      }
    };

    if (mode === "phone") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mode, dispatch]);

  if (mode !== "phone") {
    return null;
  }

  return (
    <PhoneContainer ref={phoneRef}>
      <PhoneForm />
      <PhoneTexture src={PhoneSVG} alt="Phone texture" />
    </PhoneContainer>
  );
}
