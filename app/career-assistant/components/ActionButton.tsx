"use client";

import { useState } from "react";

type ActionButtonProps = {
  children: React.ReactNode;
  onClick: () => Promise<void> | void;
  className?: string;
};

export default function ActionButton({
  children,
  onClick,
  className = "",
}: ActionButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (loading) return;

    try {
      setLoading(true);
      await onClick();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              className="opacity-75"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
}