import PxIcon from "@/shared/components/PxIcon";
import styled from "styled-components";

const StyledTextEditor = styled.div`
  height: 100%;
  width: 100%;
  background-color: #bac7db;
  color: #615f84;
`;

const StyledAppTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

const TextEditor = () => {
  return (
    <StyledTextEditor>
      <StyledAppTitle>Text editor</StyledAppTitle>
      <StyledContainer>
        <PxIcon
          alt="Text editor logo"
          size="lg"
          name="text-editor"
          height={64}
          width={64}
        />
      </StyledContainer>
    </StyledTextEditor>
  );
};

export default TextEditor;
