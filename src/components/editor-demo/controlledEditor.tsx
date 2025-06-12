import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { WysiwygEditor } from "../wysiwygEditor";
import { Button } from "../ui/button";
import ControlledEditorSkeleton from "../ControlledEditorSkeleton";
import { useControlledContent } from "../useControlledContent";

const ControlledEditor = () => {
  const { loading, controlledContent, setControlledContent, handleSave } =
    useControlledContent();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Controlled WYSIWYG Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <ControlledEditorSkeleton />
        ) : (
          <>
            <WysiwygEditor
              value={controlledContent}
              onChange={setControlledContent}
            />
            <div className="flex justify-end">
              <Button onClick={handleSave}>Save Content</Button>
            </div>
            <div>
              <h4 className="font-semibold">Serialized Content:</h4>
              <pre className="text-sm bg-muted p-2 rounded overflow-auto">
                {controlledContent}
              </pre>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ControlledEditor;
