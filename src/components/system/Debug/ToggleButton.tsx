import { StyledDebugMenuButton } from "@/components/system/Debug/styles";

type ToggleButtonProps = {
  label: string;
  value: boolean | string;
  onToggle: () => void;
  valueLabels?: [string, string];
};

const ToggleButton = ({
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
    <StyledDebugMenuButton onClick={onToggle}>
      {label}: {displayValue}
    </StyledDebugMenuButton>
  );
};

export default ToggleButton;
