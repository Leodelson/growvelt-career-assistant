"use client";

import { useEffect, useState } from "react";

type CircularScoreProps = {
  value: number;
  label: string;
  color: string;
};

export default function CircularScore({
  value,
  label,
  color,
}: CircularScoreProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 2;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setProgress(current);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">

      <svg
        width="180"
        height="180"
        className="-rotate-90"
      >
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="12"
          fill="none"
        />

        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke={color}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset .2s",
          }}
        />
      </svg>

      <div className="-mt-28 text-center">

        <div className="text-4xl font-bold">
          {progress}%
        </div>

        <div className="mt-2 text-gray-500">
          {label}
        </div>

      </div>

    </div>
  );
}