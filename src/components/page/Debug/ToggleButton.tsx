import { StyledDebugMenuButton } from "@/components/page/Debug/styles";

type ToggleButtonProps<T = boolean> = {
  label: string;
  value: T;
  onToggle: () => void;
  valueLabels?: T extends boolean
    ? [string, string]
    : Record<string, string> | undefined;
};

const ToggleButton = <T,>({
  label,
  value,
  onToggle,
  valueLabels = (typeof value === "boolean"
    ? ["off", "on"]
    : undefined) as ToggleButtonProps<T>["valueLabels"],
}: ToggleButtonProps<T>) => {
  const displayValue =
    typeof value === "boolean"
      ? value
        ? (valueLabels as [string, string])[1]
        : (valueLabels as [string, string])[0]
      : valueLabels
      ? (valueLabels as Record<string, string>)[String(value)] || String(value)
      : String(value);

  return (
    <StyledDebugMenuButton onClick={onToggle}>
      {label}: {displayValue}
    </StyledDebugMenuButton>
  );
};

export default ToggleButton;
