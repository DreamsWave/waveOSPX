import { px } from "@/utils/functions";
import styled from "styled-components";

const NinePatchBase = styled.div<{ $texture: string; $patchMargin?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-style: solid;
  border-color: #000;
  border-image: url("${({ $texture }) => $texture}");
  border-image-slice: ${({ $patchMargin }) => $patchMargin} fill;
  border-width: ${({ $patchMargin = 0 }) => px($patchMargin)};
`;

type NinePatchProps = {
  texture: string;
  patchMargin?: number;
  children: React.ReactNode;
};
function NinePatch({ texture, patchMargin = 0, children }: NinePatchProps) {
  return (
    <NinePatchBase $texture={texture} $patchMargin={patchMargin}>
      {children}
    </NinePatchBase>
  );
}

export default NinePatch;
