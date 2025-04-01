import PhoneCallIconSVG from "@/assets/icons/single/phone/phone-call.svg";
import PhoneOffIconSVG from "@/assets/icons/single/phone/phone-off.svg";
import SelectIconSVG from "@/assets/icons/single/phone/select.svg";
import PxIcon from "@/components/PxIcon";
import Key from "@/features/phone/keypad/components/key";
import { ActionColumn } from "@/features/phone/keypad/styles";
import { useCallback } from "react";

const ACTIONS_CONFIG = {
  left: [
    {
      src: SelectIconSVG,
      action: "onBackspace",
      label: "Backspace",
      height: 1,
      width: 5,
    },
    {
      src: PhoneOffIconSVG,
      action: "onBackspace",
      label: "Cancel call",
      height: 7,
      width: 12,
    },
  ],
  right: [
    {
      src: SelectIconSVG,
      action: "onSubmit",
      label: "Submit",
      height: 1,
      width: 5,
    },
    {
      src: PhoneCallIconSVG,
      action: "onSubmit",
      label: "Make call",
      height: 7,
      width: 12,
    },
  ],
} as const;

interface KeypadActionsProps {
  onBackspace?: () => void;
  onSubmit?: (event: React.FormEvent) => void;
  side: "left" | "right";
}

export default function KeypadActions({
  onBackspace = () => {},
  onSubmit = () => {},
  side,
}: KeypadActionsProps) {
  const handleSubmit = useCallback(
    () => onSubmit({ preventDefault: () => {} } as React.FormEvent),
    [onSubmit]
  );
  const handlers = { onBackspace, onSubmit: handleSubmit };

  return (
    <ActionColumn $side={side}>
      {ACTIONS_CONFIG[side].map(({ src, action, label, height, width }) => (
        <Key
          key={label}
          type="control"
          onClick={handlers[action]}
          noPadding
          aria-label={label}
        >
          <PxIcon icon={{ src, height, width, alt: `${label} icon` }} />
        </Key>
      ))}
    </ActionColumn>
  );
}
