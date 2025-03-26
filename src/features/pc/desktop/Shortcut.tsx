import { SHORTCUT_SIZE } from "@/features/pc/desktop/constants";
import PxIcon from "@/shared/components/PxIcon";
import type { Icon } from "@/types/icons";
import styled from "styled-components";

const StyledShortcutButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  width: 100%;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.s(-1)}px`};
  place-items: center;
  cursor: pointer;

  figcaption {
    pointer-events: none;
  }
`;

const StyledFigurePicture = styled.picture`
  cursor: inherit;
  width: ${({ theme }) =>
    theme.s(theme.sizes.pc.desktop.shortcut.iconSizePX)}px;
  height: ${({ theme }) =>
    theme.s(theme.sizes.pc.desktop.shortcut.iconSizePX)}px;
`;

const StyledFigCaption = styled.figcaption`
  color: rgb(255, 255, 255);
  font-size: ${({ theme }) => `${theme.s(4)}px`};
  line-height: 1.2;
  margin: ${({ theme }) => `${theme.s(1)}px 0px`};
  overflow-wrap: anywhere;
  padding: ${({ theme }) => `${theme.s(1)}px 0px`};
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
