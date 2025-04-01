import styled from "styled-components";

export const KeypadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.s(2)}px;
`;

export const ActionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr ${({ theme }) => theme.s(32)}px 1fr;
  margin-top: ${({ theme }) => theme.s(2)}px;
`;

export const ActionColumn = styled.div<{ $side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.s(18)}px;
  gap: ${({ theme }) => theme.s(2)}px;
  margin-left: ${({ $side = "left", theme }) =>
    $side === "left" ? theme.s(2) : theme.s(1)}px;
`;

export const NumericGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;
