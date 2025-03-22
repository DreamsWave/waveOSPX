import { px } from "@/utils/functions";
import styled from "styled-components";

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${px(88)};
  height: ${px(258)};
  /* position: relative; */
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export const PhoneTexture = styled.img`
  width: ${px(88)};
  height: ${px(258)};
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
  top: ${px(142)};
  left: ${px(5)};
  height: ${px(100)};
  width: ${px(78)};
`;
