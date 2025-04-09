import PxIcon from "@/components/PxIcon";
import { SHORTCUT_SIZE } from "@/features/pc/desktop/constants";
import { getTextColor } from "@/styles/colorUtils";
import type { Icon } from "@/types/icons";
import styled from "styled-components";

const StyledShortcutButton = styled.button`
  background-color: transparent;
  font-family: inherit;
  width: 100%;
  border: none;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }
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
  width: ${({ theme }) => theme.s(theme.pc.desktop.shortcut.iconSize)}px;
  height: ${({ theme }) => theme.s(theme.pc.desktop.shortcut.iconSize)}px;
`;

const StyledFigCaption = styled.figcaption`
  color: ${({ theme }) =>
    getTextColor(
      theme.pc.desktop.background,
      theme.pc.desktop.shortcut.text.dark,
      theme.pc.desktop.shortcut.text.light
    )};
  font-size: ${({ theme }) =>
    `${theme.s(theme.pc.desktop.shortcut.fontSize)}px`};
  line-height: 1.2;
  margin: ${({ theme }) => `${theme.s(1)}px 0px`};
  padding: ${({ theme }) => `${theme.s(1)}px 0px`};
  text-shadow: ${({ theme }) => {
    const shadow = getTextColor(
      theme.pc.desktop.background,
      theme.pc.desktop.shortcut.textShadow.light,
      theme.pc.desktop.shortcut.textShadow.dark
    );
    return `0px -1px 0px ${shadow}, 1px 0px 0px ${shadow}, 0px 1px 0px ${shadow},
      -1px 0px 0px ${shadow}, -1px 0px 0px ${shadow}`;
  }};
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
