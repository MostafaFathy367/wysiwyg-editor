import { EditorState } from "draft-js";
import { Button } from "@/components/ui/button";
import { getCurrentBlockType } from "@/components/getCurrentBlockType";

interface CustomToolbarProps {
  editorState: EditorState;
  toggleInlineStyle: (style: string) => void;
  toggleBlockType: (type: string) => void;
}

export function CustomToolbar({ editorState, toggleInlineStyle, toggleBlockType }: CustomToolbarProps) {
  const currentInline = editorState.getCurrentInlineStyle();
  const currentBlock = getCurrentBlockType(editorState);

  return (
    <div className="flex flex-wrap gap-2">
      {/* Inline Styles */}
      <Button
        variant={currentInline.has("BOLD") ? "default" : "outline"}
        size="sm"
        onMouseDown={e => {
          e.preventDefault();
          toggleInlineStyle("BOLD");
        }}
      >
        Bold
      </Button>
      <Button
        variant={currentInline.has("ITALIC") ? "default" : "outline"}
        size="sm"
        onMouseDown={e => {
          e.preventDefault();
          toggleInlineStyle("ITALIC");
        }}
      >
        Italic
      </Button>
      {/* Block Types */}
      <Button
        variant={currentBlock === "unordered-list-item" ? "default" : "outline"}
        size="sm"
        onMouseDown={e => {
          e.preventDefault();
          toggleBlockType("unordered-list-item");
        }}
      >
        UL
      </Button>
      <Button
        variant={currentBlock === "blockquote" ? "default" : "outline"}
        size="sm"
        onMouseDown={e => {
          e.preventDefault();
          toggleBlockType("blockquote");
        }}
      >
        Blockquote
      </Button>
      <Button
        variant={currentBlock === "code-block" ? "default" : "outline"}
        size="sm"
        onMouseDown={e => {
          e.preventDefault();
          toggleBlockType("code-block");
        }}
      >
        Code
      </Button>
    </div>
  );
}
