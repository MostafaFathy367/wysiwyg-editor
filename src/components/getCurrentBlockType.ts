import { EditorState } from "draft-js";

export function getCurrentBlockType(editorState: EditorState) {
  const selection = editorState.getSelection();
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(selection.getStartKey());
  return block.getType();
}
