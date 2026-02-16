import { useEditorState } from '@tiptap/react'
import React from 'react'
import { menuBarStateSelector } from './menuBarState.js'

export const MenuBar = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  })

  if (!editor) {
    return null
  }

  const baseBtn =
    "px-3 py-1 rounded-md border text-sm text-white/80 border-white/15 hover:border-white/30 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed";
  const activeBtn = "bg-violet-700/20 border-violet-700/40 text-white";

  return (
    <div className="mt-8 mb-4 rounded-2xl border border-violet-700/35 bg-slate-900/60 p-3">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={`${baseBtn} ${editorState.isBold ? activeBtn : ""}`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={`${baseBtn} ${editorState.isItalic ? activeBtn : ""}`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={`${baseBtn} ${editorState.isStrike ? activeBtn : ""}`}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editorState.canCode}
          className={`${baseBtn} ${editorState.isCode ? activeBtn : ""}`}
        >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className={baseBtn}>Clear marks</button>
        <button onClick={() => editor.chain().focus().clearNodes().run()} className={baseBtn}>Clear nodes</button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${baseBtn} ${editorState.isParagraph ? activeBtn : ""}`}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${baseBtn} ${editorState.isHeading1 ? activeBtn : ""}`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${baseBtn} ${editorState.isHeading2 ? activeBtn : ""}`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`${baseBtn} ${editorState.isHeading3 ? activeBtn : ""}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`${baseBtn} ${editorState.isHeading4 ? activeBtn : ""}`}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`${baseBtn} ${editorState.isHeading5 ? activeBtn : ""}`}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`${baseBtn} ${editorState.isHeading6 ? activeBtn : ""}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${baseBtn} ${editorState.isBulletList ? activeBtn : ""}`}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${baseBtn} ${editorState.OrderedList ? activeBtn : ""}`}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${baseBtn} ${editorState.isCodeBlock ? activeBtn : ""}`}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${baseBtn} ${editorState.isBlockQuote? activeBtn : ""}`}
        >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className={baseBtn}>Horizontal rule</button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} className={baseBtn}>Hard break</button>
        <button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo} className={baseBtn}>
          Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo} className={baseBtn}>
          Redo
        </button>
      </div>
    </div>
  )
}