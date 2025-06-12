import { WysiwygEditor } from "../wysiwygEditor";
import { CustomToolbar } from "../CustomToolbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CustomToolbarCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>WYSIWYG Editor with Custom Toolbar</CardTitle>
      <CardDescription>
        This editor allows you to customize the toolbar with your own buttons.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <WysiwygEditor
        renderToolbar={({ editorState, toggleInlineStyle, toggleBlockType }) => (
          <CustomToolbar
            editorState={editorState}
            toggleInlineStyle={toggleInlineStyle}
            toggleBlockType={toggleBlockType}
          />
        )}
      />
    </CardContent>
  </Card>
);

export default CustomToolbarCard;
