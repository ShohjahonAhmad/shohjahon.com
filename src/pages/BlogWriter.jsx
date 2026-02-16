import React from "react";
import slugify from "slugify";
import './styles.css'
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from './MenuBar.jsx'

const extensions = [TextStyleKit, StarterKit]

export default function BlogWriter() {
    async function postBlog() {
        const jsonb = editor.getJSON();
        const title = jsonb.content[0].content[0].text;
        const slug = slugify(title, {
            lower: true,
            strict: true,
            locale: "en"
        })
        // await createBlog(title, slug, jsonb);
    }
    const editor = useEditor({
    extensions,
    content: `
        <h2>
        Hi there,
        </h2>
        <p>
        This is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        `,
    })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button 
        type="button"
        onClick={postBlog}
        disabled={!editor}
        className="mt-4 m-auto w-fit items-center rounded-2xl bg-violet-700/20 border border-violet-700/40 px-5 py-2.5 text-white/90 hover:bg-violet-700/30 hover:border-violet-700/60 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
            Post
      </button>
    </>
  )
}