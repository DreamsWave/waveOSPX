import {
  StyledDebugMenu,
  StyledDebugMenuItem,
} from "@/components/system/Debug/styles";
import { DebugTool } from "@/components/system/Debug/types";

const DebugMenu = ({
  tools,
  isVisible,
}: {
  tools: DebugTool[];
  isVisible: boolean;
}) => (
  <StyledDebugMenu $isVisible={isVisible}>
    {tools.map((tool) => (
      <StyledDebugMenuItem key={tool.label}>
        {tool.component}
      </StyledDebugMenuItem>
    ))}
  </StyledDebugMenu>
);

export default DebugMenu;
