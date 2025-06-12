import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { WysiwygEditor } from "../wysiwygEditor";

const UncontrolledEditor = () => (
  <Card>
    <CardHeader>
      <CardTitle>Uncontrolled WYSIWYG Editor</CardTitle>
    </CardHeader>
    <CardContent>
      <WysiwygEditor />
    </CardContent>
  </Card>
);

export default UncontrolledEditor;
