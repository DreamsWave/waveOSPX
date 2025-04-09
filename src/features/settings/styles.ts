import styled from "styled-components";

export const StyledSettings = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.common.background.primary};
  color: ${({ theme }) => theme.common.text.primary};
  width: ${({ theme }) => theme.s(200)}px;
  padding: ${({ theme }) => theme.s(4)}px;
  z-index: ${({ theme }) => theme.common.zIndex.highest};

  border: ${({ theme }) => theme.getBorder()};
  box-shadow: ${({ theme }) =>
    `${theme.s(1)}px ${theme.s(1)}px 0px 0px ${
      theme.common.background.accent
    }`};
`;

export const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.s(4)}px;
`;

export const SettingsTitle = styled.h2`
  font-size: ${({ theme }) => theme.getFontSize("lg")};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.common.text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.s(2)}px;
  font-size: ${({ theme }) => theme.getFontSize("lg")};

  &:hover {
    color: ${({ theme }) => theme.common.text.accent};
    background: none;
  }
`;

export const SettingsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.s(4)}px;
`;

export const SettingsSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.getFontSize("base")};
  margin: 0 0 ${({ theme }) => theme.s(2)}px 0;
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.s(2)}px 0;
`;

export const SettingLabel = styled.label`
  font-size: ${({ theme }) => theme.getFontSize("base")};
`;

export const StyledSelect = styled.select`
  background: transparent;
  color: ${({ theme }) => theme.common.text.primary};
  border: ${({ theme }) => theme.getBorder()};
  padding: ${({ theme }) => theme.s(1)}px ${({ theme }) => theme.s(2)}px;
  border-radius: ${({ theme }) => theme.s(1)}px;
  cursor: pointer;
  font-size: inherit;

  option {
    background: ${({ theme }) => theme.common.background.primary};
    color: ${({ theme }) => theme.common.text.primary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.common.background.accent};
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.s(12)}px;
  height: ${({ theme }) => theme.s(6)}px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${({ theme }) => theme.common.background.accent};

      &:before {
        transform: translateX(${({ theme }) => theme.s(6)}px);
      }
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.common.background.muted};
    transition: 0.4s;
    border-radius: ${({ theme }) => theme.s(3)}px;

    &:before {
      position: absolute;
      content: "";
      height: ${({ theme }) => theme.s(4)}px;
      width: ${({ theme }) => theme.s(4)}px;
      left: ${({ theme }) => theme.s(1)}px;
      bottom: ${({ theme }) => theme.s(1)}px;
      background-color: ${({ theme }) => theme.common.text.primary};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
