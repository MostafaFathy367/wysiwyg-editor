import { ContentBlock } from "draft-js";

export function blockStyleFn(block: ContentBlock) {
  const type = block.getType();
  if (type === "code-block") return "custom-code-block";
  if (type === "blockquote") return "custom-blockquote";
  return "";
}
