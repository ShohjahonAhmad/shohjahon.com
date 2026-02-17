import React from "react";

export default function ErrorMessage({ error, onClose, className = "" }) {
  if (!error) return null;

  const message =
    typeof error === "string"
      ? error
      : error?.message || "Something went wrong";

  return (
    <div
      role="alert"
      className={`mt-4 mx-auto w-fit rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-5 break-words">{message}</p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-red-500/30 px-2 py-1 text-xs text-red-200 hover:bg-red-500/10 transition"
            aria-label="Dismiss error"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}