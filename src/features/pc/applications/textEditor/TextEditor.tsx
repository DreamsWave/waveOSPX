import PxIcon from "@/shared/components/PxIcon";
import styled from "styled-components";

const StyledTextEditor = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.pc.window.background};
  color: ${({ theme }) => theme.pc.window.text};
`;

const StyledAppTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.s(theme.common.fontSizes.lg)}px`};
  font-weight: 600;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  padding-top: ${({ theme }) => `${theme.s(3)}px`};
  padding-bottom: ${({ theme }) => `${theme.s(3)}px`};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => `${theme.s(70)}px`};
`;

const TextEditor = () => {
  return (
    <StyledTextEditor>
      <StyledAppTitle>Text editor</StyledAppTitle>
      <StyledContainer>
        <PxIcon size="lg" icon={{ name: "text-editor" }} />
      </StyledContainer>
    </StyledTextEditor>
  );
};

export default TextEditor;
