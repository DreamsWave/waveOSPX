import ToggleButton from "@/components/system/Debug/ToggleButton";
import { DebugToggleType } from "@/components/system/Debug/types";
import useCamera from "@/hooks/useCamera";
import useDebug from "@/hooks/useDebug";
import useSettings from "@/hooks/useSettings";
import { ThemeName } from "@/styles/themes";
import { THEMES } from "@/utils/constants";

type ToggleConfig = {
  label: string;
  value: boolean;
  onToggle: () => void;
  valueLabels?: [string, string];
};

type DebugToggleButtonProps = {
  type: DebugToggleType;
  valueLabels?: [string, string];
};

const DebugToggleButton = ({
  type,
  valueLabels = ["off", "on"],
}: DebugToggleButtonProps) => {
  const { isFocused, toggleFocus } = useCamera();
  const {
    pixelGrid: { enabled: pixelGridEnabled },
    togglePixelGrid,
  } = useDebug();
  const { reducedMotion, toggleReducedMotion, theme, setTheme } = useSettings();

  const config: Record<DebugToggleType, ToggleConfig> = {
    focus: { label: "focus", value: isFocused, onToggle: toggleFocus },
    pixelGrid: {
      label: "pixel grid",
      value: pixelGridEnabled,
      onToggle: togglePixelGrid,
    },
    reducedMotion: {
      label: "reduced motion",
      value: reducedMotion,
      onToggle: toggleReducedMotion,
    },
    theme: {
      label: "theme",
      value: theme === THEMES.DARK,
      onToggle: () =>
        setTheme(
          theme === THEMES.DARK ? THEMES.LIGHT : (THEMES.DARK as ThemeName)
        ),
      valueLabels: ["light", "dark"],
    },
  };

  const {
    label,
    value,
    onToggle,
    valueLabels: overrideValueLabels,
  } = config[type];

  return (
    <ToggleButton
      label={label}
      value={value}
      onToggle={onToggle}
      valueLabels={overrideValueLabels ?? valueLabels}
    />
  );
};

export default DebugToggleButton;
