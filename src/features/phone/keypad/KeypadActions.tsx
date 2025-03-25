import Key from "@/features/phone/keypad/key";
import { ActionColumn } from "@/features/phone/keypad/styles";
import PxIcon from "@/shared/components/PxIcon";
import { useCallback } from "react";

const ACTIONS_CONFIG = {
  left: [
    {
      name: "select",
      action: "onBackspace",
      label: "Backspace",
      height: 1,
      width: 5,
    },
    {
      name: "phone-off",
      action: "onBackspace",
      label: "Cancel call",
      height: 7,
      width: 12,
    },
  ],
  right: [
    {
      name: "select",
      action: "onSubmit",
      label: "Submit",
      height: 1,
      width: 5,
    },
    {
      name: "phone-call",
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
      {ACTIONS_CONFIG[side].map(({ name, action, label, height, width }) => (
        <Key
          key={label}
          type="control"
          onClick={handlers[action]}
          noPadding
          aria-label={label}
        >
          <PxIcon icon={{ name, height, width, alt: `${label} icon` }} />
        </Key>
      ))}
    </ActionColumn>
  );
}
