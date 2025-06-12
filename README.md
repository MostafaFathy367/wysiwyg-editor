# 🖼️ Introduction (What is this?)

**WYSIWYG Editor** is a visual text editor component (What You See Is What You Get) built with React, Next.js, and Draft.js. It supports both English and Arabic, allowing you to easily edit and format text with a modern, customizable interface.

---

## 🚀 Requirements

- Node.js 18 or later
- npm or yarn
- Git

---

## ⚙️ Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/MostafaFathy367/wysiwyg-editor.git
cd wysiwyg-editor

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

---

## ✨ Features

- ✅ Text formatting (Bold, Italic, Underline)
- ✅ Controlled and Uncontrolled modes
- ✅ Customizable toolbar (renderToolbar)
- ✅ Support for block styles (blockquote, code-block, lists...)
- ✅ Appearance customization via className and style
- ✅ Uses only draft-js
- ✅ RTL and Arabic support

---

## 🧪 Testing

```bash
npm run test
```

Tests are written using Vitest and React Testing Library. All toolbar buttons (Bold, Italic, Underline) are covered by unit tests.

---

## 📦 Project Structure

```bash
src/
├── components/                  # All React components
│   ├── wysiwygEditor.tsx            # Main WYSIWYG editor component
│   ├── ControlledEditorSkeleton.tsx # Skeleton loader for controlled editor
│   ├── CustomToolbar.tsx            # Custom toolbar logic
│   ├── getCurrentBlockType.ts       # Utility for block type detection
│   ├── blockStyleFn.ts              # Utility for block style mapping
│   ├── useControlledContent.ts      # Custom hook for API logic
│   ├── __tests__/                   # Component unit tests
│   │   └── wysiwyg-editor.test.tsx
│   ├── ui/                          # UI primitives (Button, Card, Skeleton)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── skeleton.tsx
│   └── editor-demo/                 # Demo components for the editor
│       ├── controlledEditor.tsx     # Controlled editor demo
│       ├── CustomToolbarCard.tsx    # Card for custom toolbar demo
│       ├── UncontrolledEditor.tsx   # Uncontrolled editor demo
│       └── index.tsx                # Demo page entry
├── lib/                        # Utility functions
│   └── utils.ts
├── pages/                      # Next.js pages and API routes
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── api/                    # API routes
│   │   └── hello.ts
├── styles/                     # Tailwind and global styles
│   └── globals.css
```
---

## 📄 Usage Examples

Controlled Mode
In controlled mode, the parent component manages the editor’s content. You pass a `value `prop (a JSON string representing Draft.js raw content) and an `onChange` callback. This is ideal when you want to save, validate, or sync the editor content with a backend or other UI.

**Example:**

```tsx
import { useState } from "react";
import { WysiwygEditor } from "@/components/wysiwygEditor";

function ControlledExample() {
  const [content, setContent] = useState("");
  return (
    <WysiwygEditor
      value={content}
      onChange={setContent}
    />
  );
}
```

- The editor always reflects the content state.
- Any change in the editor triggers onChange, updating the parent state.
- Useful for saving to an API, undo/redo, or validation.

Uncontrolled Mode
In uncontrolled mode, the editor manages its own internal state. You do not provide `value` or `onChange` props. This is simpler for cases where you don’t need to track the content outside the editor.

**Example:**

```tsx
import { WysiwygEditor } from "@/components/wysiwygEditor";

function UncontrolledExample() {
  return <WysiwygEditor />;
}
```

---

## 🛠️ Custom Toolbar

You can fully customize the WYSIWYG editor's toolbar by providing your own buttons and logic using the `renderToolbar` prop. This allows you to add, remove, or style formatting controls as needed for your use case.

**Example:**

```tsx
import { WysiwygEditor } from "@/components/wysiwygEditor";
import { CustomToolbar } from "@/components/CustomToolbar";

<WysiwygEditor
  renderToolbar={({ editorState, toggleInlineStyle, toggleBlockType }) => (
    <CustomToolbar
      editorState={editorState}
      toggleInlineStyle={toggleInlineStyle}
      toggleBlockType={toggleBlockType}
    />
  )}
/>
```

The `CustomToolbar` component (see `src/components/CustomToolbar.tsx`) demonstrates how to:
- Highlight active styles (bold, italic, etc.)
- Add block type buttons (lists, blockquote, code)
- Use your own button components and layout

You can further extend or replace the toolbar to fit your application's needs.

---

## ➕ API Mocking (Bonus)

This project demonstrates API mocking by simulating API calls directly in the React component logic. For example, the `ControlledEditor` component uses `setTimeout` to mimic loading content from an API and saving content to an API. This allows you to develop and test the editor without a real backend.

You can also create mock API endpoints using Next.js API routes (see `src/pages/api/hello.ts`). To extend this, add more files under `src/pages/api/` to simulate different endpoints as needed.

**Example (in `ControlledEditor`):**
- Simulate loading content: use `setTimeout` to mimic a GET request.
- Simulate saving content: use `setTimeout` to mimic a POST request.

**Example (in `pages/api/hello.ts`):**
- Create a mock API endpoint that returns a JSON response for frontend testing.

This approach helps you build and test features quickly, even before your real API is ready.

---

## 📋 Technical Notes

- The editor relies only on draft-js.
- Supports both controlled and uncontrolled modes.
- The toolbar is fully customizable.
- All styles are based on Tailwind CSS and shadcn/ui.
- All main buttons are unit tested.

---

## 📣 Additional or Closing Notes

- The project is open source and extensible.
- You can contribute or open issues for suggestions or problems.
- RTL is well supported and the editor can be easily integrated into Arabic projects.

---

