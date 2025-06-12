"use client";
import CustomToolbarCard from "./CustomToolbarCard";

import ControlledEditor from "./controlledEditor";
import UncontrolledEditor from "./UncontrolledEditor";

export default function EditorDemoPage() {
  return (
    <div className="container mx-auto py-8 space-y-10">
      <ControlledEditor />
      <UncontrolledEditor />
      <CustomToolbarCard />
    </div>
  );
}
