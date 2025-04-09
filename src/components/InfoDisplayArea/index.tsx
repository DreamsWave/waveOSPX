import { StyledInfoDisplay } from "@/components/InfoDisplayArea/styles";
import Markdown from "@/components/Markdown";

interface InfoDisplayAreaProps {
  content: string;
  isMarkdown?: boolean;
  children?: React.ReactNode;
}

const InfoDisplayArea = ({
  content,
  isMarkdown = true,
  children,
}: InfoDisplayAreaProps) => {
  return (
    <StyledInfoDisplay>
      {isMarkdown ? <Markdown content={content} /> : content}
      {children}
    </StyledInfoDisplay>
  );
};

export default InfoDisplayArea;
