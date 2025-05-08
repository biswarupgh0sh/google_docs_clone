"use client"

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<h1>Hello world</h1>'
    })

    return (
        <div>
            <EditorContent editor={editor}/>
        </div>
    )
}