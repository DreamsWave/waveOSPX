import WindowSection from "@/components/WindowSection";
import Checkbox from "@/components/common/Checkbox";
import FormControlLabel from "@/components/common/FormControlLabel";
import {
  SettingItem,
  SettingLabel,
  StyledSelect,
  StyledSettings,
} from "@/features/pc/applications/Settings/styles";
import { useSettings } from "@/features/settings/hooks";
import type { ThemeName } from "@/styles/themes";
import themes from "@/styles/themes";

const Settings = () => {
  const { reducedMotion, toggleReducedMotion, setTheme, theme } = useSettings();

  return (
    <StyledSettings>
      <WindowSection title="Appearance">
        <SettingItem>
          <SettingLabel>Theme</SettingLabel>
          <StyledSelect
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeName)}
          >
            {Object.keys(themes).map((themeName) => (
              <option key={themeName} value={themeName}>
                {themeName
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </option>
            ))}
          </StyledSelect>
        </SettingItem>
      </WindowSection>
      <WindowSection title="Accessibility">
        <FormControlLabel
          control={
            <Checkbox checked={reducedMotion} onChange={toggleReducedMotion} />
          }
          label="Reduce Motion"
        />
      </WindowSection>
    </StyledSettings>
  );
};

export default Settings;
