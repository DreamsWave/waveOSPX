import WindowSection from "@/components/WindowSection";
import Checkbox from "@/components/common/Checkbox";
import FormControl from "@/components/common/FormControl";
import FormControlLabel from "@/components/common/FormControlLabel";
import FormLabel from "@/components/common/FormLabel";
import MenuItem from "@/components/common/MenuItem";
import Select from "@/components/common/Select";
import { StyledSettings } from "@/features/pc/applications/Settings/styles";
import { useSettings } from "@/features/settings/hooks";
import type { ThemeName } from "@/styles/themes";
import themes from "@/styles/themes";

const Settings = () => {
  const { reducedMotion, toggleReducedMotion, setTheme, theme } = useSettings();

  const handleThemeChange = (event: { target: { value: string } }) => {
    setTheme(event.target.value as ThemeName);
  };

  return (
    <StyledSettings>
      <WindowSection title="Appearance">
        <FormControl>
          <FormLabel id="theme-select-label">Theme</FormLabel>
          <Select
            name="theme-select"
            value={theme}
            onChange={handleThemeChange}
            aria-labelledby="theme-select-label"
          >
            {Object.keys(themes).map((themeName) => (
              <MenuItem key={themeName} value={themeName}>
                {themeName
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
