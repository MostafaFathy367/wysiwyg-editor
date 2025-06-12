"use client";

import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  ContentState,
} from "draft-js";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import "draft-js/dist/Draft.css";
import clsx from "clsx";
import { blockStyleFn } from "./blockStyleFn";

type ToolbarButton = {
  label: string;
  style: string;
};

const defaultButtons: ToolbarButton[] = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
];

interface WysiwygEditorProps {
  value?: string; // JSON string or plain text
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  renderToolbar?: (props: {
    editorState: EditorState;
    toggleInlineStyle: (style: string) => void;
    toggleBlockType: (type: string) => void;
  }) => React.ReactNode;
}

export function WysiwygEditor({
  value,
  onChange,
  className,
  style,
  renderToolbar,
}: WysiwygEditorProps) {
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  const isControlled = value !== undefined && onChange !== undefined;

  useEffect(() => {
    let initialState: EditorState;

    try {
      if (value) {
        const parsed = JSON.parse(value);
        const content = convertFromRaw(parsed);
        initialState = EditorState.createWithContent(content);
      } else {
        initialState = EditorState.createEmpty();
      }
    } catch {
      const content = ContentState.createFromText(value || "");
      initialState = EditorState.createWithContent(content);
    }

    setEditorState(initialState);
  }, []);

  const handleChange = useCallback(
    (state: EditorState) => {
      setEditorState(state);

      if (isControlled && onChange) {
        const raw = convertToRaw(state.getCurrentContent());
        onChange(JSON.stringify(raw));
      }
    },
    [isControlled, onChange]
  );

  const toggleInlineStyle = useCallback(
    (style: string) => {
      if (!editorState) return;

      const newState = RichUtils.toggleInlineStyle(editorState, style);

      handleChange(newState);
    },
    [editorState, handleChange]
  );

  const toggleBlockType = useCallback(
    (type: string) => {
      if (!editorState) return;
      const newState = RichUtils.toggleBlockType(editorState, type);
      handleChange(newState);
    },
    [editorState, handleChange]
  );

  if (!editorState) return null;

  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div
      className={clsx("rounded border p-4 space-y-2", className)}
      style={style}
    >
      <div className="flex flex-wrap gap-2">
        {renderToolbar
          ? renderToolbar({ editorState, toggleInlineStyle, toggleBlockType })
          : defaultButtons.map((btn) => (
              <Button
                key={btn.style}
                variant={currentStyle.has(btn.style) ? "default" : "outline"}
                size="sm"
                onMouseDown={(e) => {
                  e.preventDefault();
                  toggleInlineStyle(btn.style);
                }}
              >
                {btn.label}
              </Button>
            ))}
      </div>
      <div className="min-h-[150px] p-2 border rounded cursor-text">
        <Editor
          editorState={editorState}
          onChange={handleChange}
          blockStyleFn={blockStyleFn}
        />
      </div>
    </div>
  );
}
