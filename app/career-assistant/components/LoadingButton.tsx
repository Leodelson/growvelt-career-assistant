"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoadingButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LoadingButton({
  href,
  children,
  className = "",
}: LoadingButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
  console.log("Navigating to:", href);

  setLoading(true);
  router.push(href);
};

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-80 ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}