import PCIconSVG from "@/assets/icons/single/pc-icon.svg";
import PhoneIconSVG from "@/assets/icons/single/phone-icon.svg";
import SettingsIconSVG from "@/assets/icons/single/settings-icon.svg";
import PxIcon from "@/components/PxIcon";
import { useMode } from "@/features/mode/hooks";
import {
  StyledNavigation,
  StyledNavigationButton,
} from "@/features/navigation/styles";
import { useSettings } from "@/features/settings/hooks";

const Navigation = () => {
  const { isPhoneMode, toggleMode } = useMode();
  const { toggleSettings } = useSettings();

  return (
    <StyledNavigation>
      <StyledNavigationButton
        type="button"
        onClick={toggleMode}
        aria-label={`Switch to ${isPhoneMode ? "PC" : "Phone"} mode`}
      >
        {isPhoneMode ? (
          <PxIcon icon={{ src: PCIconSVG, width: 34, height: 34 }} />
        ) : (
          <PxIcon icon={{ src: PhoneIconSVG, width: 34, height: 34 }} />
        )}
      </StyledNavigationButton>
      <StyledNavigationButton
        type="button"
        onClick={toggleSettings}
        aria-label="Open settings"
      >
        <PxIcon icon={{ src: SettingsIconSVG, width: 34, height: 34 }} />
      </StyledNavigationButton>
    </StyledNavigation>
  );
};

export default Navigation;
