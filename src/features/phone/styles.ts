import styled from "styled-components";

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.s(88)}px;
  height: ${({ theme }) => theme.s(258)}px;
  /* position: relative; */
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export const PhoneTexture = styled.img`
  width: ${({ theme }) => theme.s(88)}px;
  height: ${({ theme }) => theme.s(258)}px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PhoneKeypad = styled.div`
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${({ theme }) => theme.s(142)}px;
  left: ${({ theme }) => theme.s(5)}px;
  height: ${({ theme }) => theme.s(100)}px;
  width: ${({ theme }) => theme.s(78)}px;
`;
