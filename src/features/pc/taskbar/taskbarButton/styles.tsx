import { px } from "@/utils/functions";
import styled from "styled-components";

export const StyledTaskbarButton = styled.button`
  height: ${px(12)};
  font-family: ${({ theme }) => theme.formats.systemFont};
  font-size: ${px(5)};
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.colors.pc.taskbar.text};
  border: ${px(1)} solid ${({ theme }) => theme.colors.pc.border};
`;

export const StyledTaskbarButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${px(2)} ${px(2)};
  /* min-width: ${px(30)}; */
  max-width: ${px(60)};
  gap: ${px(2)};
  overflow: hidden;
  flex-wrap: nowrap;
`;

export const StyledTaskbarButtonTitle = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: ${px(1)};
`;
