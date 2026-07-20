"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Award,
  MessageSquare,
  Brain,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import NextActions from "./NextActions";

export default function InterviewResult({ onPracticeAgain }: { onPracticeAgain: () => void }) {
  const [copied, setCopied] = useState(false);

  const report = {
    overall: 86,
    communication: 90,
    technical: 82,
    confidence: 87,
    strengths: [
      "Clear communication",
      "Good problem-solving approach",
      "Confident responses",
    ],
    improvements: [
      "Use more real-world examples.",
      "Give shorter and more direct answers.",
      "Quantify achievements where possible.",
    ],
    summary:
      "You demonstrated strong communication and confidence throughout the interview. With more specific examples and measurable achievements, your interview performance will become even stronger.",
  };

  async function handleCopy() {
    await navigator.clipboard.writeText(JSON.stringify(report, null, 2));

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      {/* Success Banner */}

      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5">

        <CheckCircle2 className="h-8 w-8 text-green-600" />

        <div>

          <h2 className="text-xl font-bold text-green-700">
            Interview Completed Successfully
          </h2>

          <p className="text-sm text-green-700">
            Your interview report is ready.
          </p>

        </div>

      </div>

      {/* Heading */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <h2 className="text-3xl font-bold">
            Growvelt Interview Report
          </h2>

        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-100"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy Report
            </>
          )}
        </button>

      </div>

      {/* Score Cards */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-purple-50 p-6">

          <Award className="h-8 w-8 text-purple-600" />

          <p className="mt-4 text-sm text-gray-600">
            Overall Score
          </p>

          <p className="mt-2 text-5xl font-bold text-purple-600">
            {report.overall}%
          </p>

        </div>

        <div className="rounded-2xl bg-blue-50 p-6">

          <MessageSquare className="h-8 w-8 text-blue-600" />

          <p className="mt-4 text-sm text-gray-600">
            Communication
          </p>

          <p className="mt-2 text-5xl font-bold text-blue-600">
            {report.communication}%
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 p-6">

          <Brain className="h-8 w-8 text-green-600" />

          <p className="mt-4 text-sm text-gray-600">
            Technical Knowledge
          </p>

          <p className="mt-2 text-5xl font-bold text-green-600">
            {report.technical}%
          </p>

        </div>

        <div className="rounded-2xl bg-yellow-50 p-6">

          <Award className="h-8 w-8 text-yellow-600" />

          <p className="mt-4 text-sm text-gray-600">
            Confidence
          </p>

          <p className="mt-2 text-5xl font-bold text-yellow-600">
            {report.confidence}%
          </p>

        </div>

      </div>

      {/* Strengths */}

      <section className="mt-10 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          ✅ Strengths
        </h3>

        <ul className="mt-4 space-y-2">
          {report.strengths.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

      </section>

      {/* Improvements */}

      <section className="mt-8 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          📈 Areas for Improvement
        </h3>

        <ul className="mt-4 space-y-2">
          {report.improvements.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

      </section>

      {/* Summary */}

      <section className="mt-8 rounded-2xl bg-gray-50 p-6">

        <h3 className="text-xl font-bold">
        Summary
        </h3>

        <p className="mt-4 leading-8 text-gray-700">
          {report.summary}
        </p>

      </section>

      <div className="mt-10 flex justify-end">

  <button
    onClick={onPracticeAgain}
    className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
  >
    Practice Again
  </button>

</div>

<NextActions />

    </div>
  );
}