import PhoneSVG from "@/assets/phone/textures/phone.svg";
import PhoneForm from "@/features/phone/PhoneForm";
import PhoneProvider from "@/features/phone/PhoneProvider";
import { PhoneContainer, PhoneTexture } from "@/features/phone/styles";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Phone() {
  const mode = useSelector((state: RootState) => state.mode.currentMode);

  if (mode !== "phone") {
    return null;
  }

  return (
    <PhoneContainer>
      <PhoneProvider>
        <PhoneForm />
      </PhoneProvider>
      <PhoneTexture src={PhoneSVG} alt="Phone texture" />
    </PhoneContainer>
  );
}
