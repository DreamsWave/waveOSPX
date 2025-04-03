import { createBorderSvg } from "@/styles/styledUtils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

const StyledMarkdown = styled.div`
  /* Minimal styling - only what's specific to markdown content */
  padding: ${({ theme }) => theme.s(5)}px;

  /* For user-generated markdown content, allow selection */
  user-select: text;
  * {
    user-select: text;
  }

  /* Custom styling for images in markdown */
  img {
    border-radius: ${({ theme }) => theme.s(2)}px;
    margin: ${({ theme }) => theme.s(3)}px 0;
  }

  /* Ensure proper code block formatting */
  pre {
    ${createBorderSvg()}
  }

  li {
    position: relative;
  }

  /* Remove list-style for checkbox list items */
  li input[type="checkbox"] {
    margin-right: ${({ theme }) => theme.s(2)}px;
    cursor: pointer;
  }

  li:has(input[type="checkbox"]) {
    list-style-type: none !important;
    position: relative;
    margin-left: -${({ theme }) => theme.s(5)}px;

    &:has(input[type="checkbox"]:checked) {
      color: ${({ theme }) => theme.common.text.muted};
      text-decoration: line-through;
    }
  }

  /* Fallback for browsers that don't support :has */
  ul li.task-list-item {
    list-style-type: none !important;
    position: relative;
    margin-left: -${({ theme }) => theme.s(5)}px;
  }
`;

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const Markdown = ({ content, className }: MarkdownContentProps) => {
  return (
    <StyledMarkdown className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </StyledMarkdown>
  );
};

export default Markdown;
