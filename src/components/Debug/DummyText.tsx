import { memo } from "react";

type DummyTextProps = {
  text?: string;
  repeat?: number;
};

const DEFAULT_TEXT =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const DummyText = memo(
  ({ text = DEFAULT_TEXT, repeat = 1 }: DummyTextProps) => (
    <span>{Array.from({ length: repeat }, () => text).join(" ")}</span>
  )
);

export default DummyText;
