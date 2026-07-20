"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Award,
  TrendingUp,
  Sparkles,
  Copy,
  RefreshCw,
  Check,
} from "lucide-react";
import NextActions from "./NextActions";

type MatchAnalysis = {
  matchScore: number;
  atsScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

type JobMatchResultProps = {
  analysis: MatchAnalysis | null;
  onAnalyzeAgain: () => void;
};

function getScoreLabel(score: number) {
  if (score >= 90)
    return {
      label: "Excellent Match",
      color: "bg-green-100 text-green-700",
    };

  if (score >= 75)
    return {
      label: "Strong Match",
      color: "bg-blue-100 text-blue-700",
    };

  if (score >= 60)
    return {
      label: "Average Match",
      color: "bg-yellow-100 text-yellow-700",
    };

  return {
    label: "Weak Match",
    color: "bg-red-100 text-red-700",
  };
}

export default function JobMatchResult({
  analysis,
  onAnalyzeAgain,
}: JobMatchResultProps) {
  const [copied, setCopied] = useState(false);

  if (!analysis) return null;

  const match = getScoreLabel(analysis!.matchScore);

  async function handleCopy() {
    const report = `
  Job Match Analysis

  Overall Match: ${analysis!.matchScore}%
  ATS Score: ${analysis!.atsScore}%

  Matching Skills:
  ${analysis!.matchingSkills.map((s) => `• ${s}`).join("\n")}

  Missing Skills:
  ${analysis!.missingSkills.map((s) => `• ${s}`).join("\n")}

  Recommendations:
  ${analysis!.recommendations.map((r) => `• ${r}`).join("\n")}

  Summary:
  ${analysis!.summary}
  `;

    await navigator.clipboard.writeText(report);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      {/* Success Banner */}

      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5">

        <CheckCircle2 className="h-8 w-8 text-green-600" />

        <div>

          <h2 className="text-xl font-bold text-green-700">
            Job Match Analysis Complete
          </h2>

          <p className="text-sm text-green-700">
            Your matching report is ready.
          </p>

        </div>

      </div>

      {/* Heading */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Sparkles className="h-8 w-8 text-purple-600" />

          <h2 className="text-3xl font-bold">
            Growvelt Job Match Report
          </h2>

        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-100"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied!
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

          <div className="flex items-center justify-between">

            <Award className="h-8 w-8 text-purple-600" />

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${match.color}`}
            >
              {match.label}
            </span>

          </div>

          <p className="mt-5 text-sm text-gray-600">
            Overall Match
          </p>

          <p className="mt-2 text-5xl font-bold text-purple-600">
            {analysis.matchScore}%
          </p>

        </div>

        <div className="rounded-2xl bg-green-50 p-6">

          <TrendingUp className="h-8 w-8 text-green-600" />

          <p className="mt-5 text-sm text-gray-600">
            ATS Score
          </p>

          <p className="mt-2 text-5xl font-bold text-green-600">
            {analysis.atsScore}%
          </p>

        </div>

      </div>

      {/* Matching Skills */}

      <section className="mt-10 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          ✅ Matching Skills
        </h3>

        <ul className="mt-4 space-y-3">
          {analysis.matchingSkills.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

      </section>

      {/* Missing Skills */}

      <section className="mt-8 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          ❌ Missing Skills
        </h3>

        <ul className="mt-4 space-y-3">
          {analysis.missingSkills.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

      </section>

      {/* Recommendations */}

      <section className="mt-8 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          💡 Recommendations
        </h3>

        <ul className="mt-4 space-y-3">
          {analysis.recommendations.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

      </section>

      {/* Summary */}

      <section className="mt-8 rounded-2xl bg-gray-50 p-6">

        <h3 className="text-xl font-bold">
         Hiring Summary
        </h3>

        <p className="mt-4 leading-8 text-gray-700">
          {analysis.summary}
        </p>

      </section>

      {/* Analyze Again */}

      <div className="mt-10 flex justify-center">

                <button
                  onClick={onAnalyzeAgain}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow hover:-translate-y-0.5 cursor-pointer"
                >
                  <RefreshCw className="h-4 w-4" />
                  Analyze Another Job
                </button>

      </div>

      <NextActions />

    </div>
  );
}