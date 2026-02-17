import React from "react";
import { Link } from "react-router-dom";

function formatPublishedDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function BlogListItem({ blog }) {
  const published = formatPublishedDate(blog.published);

  return (
    <Link
      to={`/blogs/${blog.slug}`} // this line will later updated to this
      className="block rounded-2xl border border-violet-700/30 bg-slate-900/40 px-5 py-4 hover:bg-violet-700/10 hover:border-violet-700/50 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white truncate" title={blog.title}>
          {blog.title}
        </h3>
        {published && (
          <span className="shrink-0 text-sm text-white/50 whitespace-nowrap">
            {published}
          </span>
        )}
      </div>
    </Link>
  );
}