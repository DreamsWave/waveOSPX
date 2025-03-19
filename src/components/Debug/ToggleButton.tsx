import StyledDebugButton from "@/components/Debug/StyledDebugButton";
import { memo } from "react";

type ToggleButtonProps = {
  label: string;
  value: boolean | string;
  onToggle: () => void;
  valueLabels?: [string, string];
};

const ToggleButton = memo(
  ({
    label,
    value,
    onToggle,
    valueLabels = ["off", "on"],
  }: ToggleButtonProps) => {
    const displayValue =
      typeof value === "boolean"
        ? value
          ? valueLabels[1]
          : valueLabels[0]
        : value;
    return (
      <StyledDebugButton onClick={onToggle}>
        {label}: {displayValue}
      </StyledDebugButton>
    );
  }
);

export default ToggleButton;
