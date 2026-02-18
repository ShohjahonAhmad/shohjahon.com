import React, { useEffect } from "react";
import slugify from "slugify";
import './styles.css'
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from './MenuBar.jsx'
import { useNavigate, useSearchParams } from "react-router-dom";
import { createBlog } from "../utils/apiCalls/api.js";
import ErrorMessage from "../components/ErrorMessage.jsx";


const extensions = [TextStyleKit, StarterKit]

export default function BlogWriter() {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const login = searchParams.get("login");
    const password = searchParams.get("password");

    React.useEffect(() => {
        if(login != "peaceful" || password != "spandau"){
            navigate("/", {replace: true});
            console.log("salom");
        }
    }, [])

    async function postBlog() {
        setLoading(true)
        setError(null)
        const jsonb = editor.getJSON();
        const title = jsonb.content[0].content[0].text;
        const slug = slugify(title, {
            lower: true,
            strict: true,
            locale: "en"
        })
        createBlog(title, slug, jsonb)
        .then( () => {
            navigate("/blogs", {replace: true})
        })
        .catch(err => setError(err)) 
        .finally(setLoading(false));
    }
    const editor = useEditor({
    extensions,
    content: `
        <h2>
        Enter Title
        </h2>
        <p>
        Enter Text
        </p>
        `,
    })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />

      <ErrorMessage error={error} onClose={() => setError(null)} />

      <button 
        type="button"
        onClick={postBlog}
        disabled={!editor || loading}
        className="mt-4 m-auto w-fit items-center rounded-2xl bg-violet-700/20 border border-violet-700/40 px-5 py-2.5 text-white/90 hover:bg-violet-700/30 hover:border-violet-700/60 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
            {loading ? "Posting..." : "Post"}
      </button>

    </>
  )
}