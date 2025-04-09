import { useSettings } from "@/features/settings/hooks";
import {
  CloseButton,
  SettingItem,
  SettingLabel,
  SettingsHeader,
  SettingsSection,
  SettingsSectionTitle,
  SettingsTitle,
  StyledSelect,
  StyledSettings,
  ToggleSwitch,
} from "@/features/settings/styles";
import type { ThemeName } from "@/styles/themes";
import themes from "@/styles/themes";
import { useEffect, useRef } from "react";

const Settings = () => {
  const {
    isSettingsVisible,
    reducedMotion,
    toggleReducedMotion,
    hideSettings,
    setTheme,
    theme,
  } = useSettings();

  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was on a navigation button
      const target = event.target as HTMLElement;
      const isNavigationButton =
        target.closest('[aria-label*="Switch to"]') ||
        target.closest('[aria-label*="Open settings"]');

      if (
        settingsRef.current &&
        !settingsRef.current.contains(target) &&
        !isNavigationButton
      ) {
        hideSettings();
      }
    };

    if (isSettingsVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSettingsVisible, hideSettings]);

  if (!isSettingsVisible) return null;

  return (
    <StyledSettings ref={settingsRef}>
      <SettingsHeader>
        <SettingsTitle>Settings</SettingsTitle>
        <CloseButton onClick={hideSettings}>×</CloseButton>
      </SettingsHeader>

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
