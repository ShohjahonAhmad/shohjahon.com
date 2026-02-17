import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LoadingSpinner from "../utils/LoadingSpinner";

function formatPublishedDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function BlogViewer({ content }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content, // TipTap/ProseMirror JSON from DB
    editable: false,
    editorProps: {
      attributes: { class: "tiptap" },
    },
  });

  return <EditorContent editor={editor} />;
}

export default function BlogPage() {
  const data = useLoaderData();
  const blogPromise = data?.blog ?? data;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={blogPromise}>
        {(blog) => {
          const published = formatPublishedDate(
            blog?.publishedAt ?? blog?.published_at ?? blog?.createdAt ?? blog?.created_at
          );

          return (
            <main className="flex flex-col py-[45px] px-4 mt-16 lg:mt-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold text-white break-words">
                  {blog?.title ?? "Untitled"}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-white/50 text-sm">
                  {published && <span>{published}</span>}
                  {blog?.slug && <span className="text-violet-300/70">/{blog.slug}</span>}
                </div>
              </div>

              <div className="mt-8">
                <BlogViewer content={blog?.content} />
              </div>
            </main>
          );
        }}
      </Await>
    </Suspense>
  );
}