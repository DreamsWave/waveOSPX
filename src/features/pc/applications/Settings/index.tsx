import {
  SettingItem,
  SettingLabel,
  SettingsSection,
  SettingsSectionTitle,
  StyledSelect,
  StyledSettings,
  ToggleSwitch,
} from "@/features/pc/applications/Settings/styles";
import { useSettings } from "@/features/settings/hooks";
import type { ThemeName } from "@/styles/themes";
import themes from "@/styles/themes";

const Settings = () => {
  const { reducedMotion, toggleReducedMotion, setTheme, theme } = useSettings();

  return (
    <StyledSettings>
      <SettingsSection>
        <SettingsSectionTitle>Appearance</SettingsSectionTitle>
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
      </SettingsSection>

      <SettingsSection>
        <SettingsSectionTitle>Accessibility</SettingsSectionTitle>
        <SettingItem>
          <SettingLabel>Reduce Motion</SettingLabel>
          <ToggleSwitch>
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={toggleReducedMotion}
            />
            <span />
          </ToggleSwitch>
        </SettingItem>
      </SettingsSection>
    </StyledSettings>
  );
};

export default Settings;
