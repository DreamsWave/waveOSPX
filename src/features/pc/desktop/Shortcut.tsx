import { SHORTCUT_SIZE } from "@/features/pc/desktop/constants";
import PxIcon from "@/shared/components/PxIcon"; // Replace useIcon with PxIcon
import { Icon } from "@/types/icons";
import { px } from "@/utils/functions";
import styled from "styled-components";

const StyledShortcutButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  width: 100%;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin-bottom: -2px;
  place-items: center;
  cursor: pointer;

  figcaption {
    pointer-events: none;
  }
`;

const StyledFigurePicture = styled.picture`
  cursor: inherit;
  width: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
  height: ${({ theme }) =>
    theme.sizes.pc.desktop.shortcut.iconSizePX * theme.sizes.pixelSize}px;
`;

const StyledFigCaption = styled.figcaption`
  color: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 1.2;
  margin: ${px(1)} 0px;
  overflow-wrap: anywhere;
  padding: 2px 0px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 0px 1px,
    rgba(0, 0, 0, 0.4) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px,
    rgba(0, 0, 0, 0.4) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px;
`;

type Props = {
  label?: string;
  icon: Icon;
  action?: () => void;
};

const Shortcut = ({ label = "", icon, action }: Props) => {
  return (
    <StyledShortcutButton onClick={action}>
      <StyledFigure>
        <StyledFigurePicture>
          <PxIcon
            icon={{
              name: icon.name ?? "default-icon",
              size: SHORTCUT_SIZE,
              extension: "png",
              alt: `${label} icon`,
            }}
          />
        </StyledFigurePicture>
        <StyledFigCaption>{label}</StyledFigCaption>
      </StyledFigure>
    </StyledShortcutButton>
  );
};

export default Shortcut;
