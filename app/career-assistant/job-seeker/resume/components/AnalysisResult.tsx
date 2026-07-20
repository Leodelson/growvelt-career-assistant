"use client";

import {
  CheckCircle2,
  Award,
  TrendingUp,
  Sparkles,
  Copy,
  Check,
  Download,
} from "lucide-react";

import { useState } from "react";
import jsPDF from "jspdf";
import CircularScore from "../../../components/CircularScore";
import NextActions from "./NextActions";

type Analysis = {
  score: number;
  atsScore: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

type AnalysisResultProps = {
  analysis: Analysis | null;
};

function getScoreLabel(score: number) {
  if (score >= 90)
    return {
      label: "Excellent",
      color: "bg-green-100 text-green-700",
    };

  if (score >= 75)
    return {
      label: "Good",
      color: "bg-blue-100 text-blue-700",
    };

  if (score >= 60)
    return {
      label: "Fair",
      color: "bg-yellow-100 text-yellow-700",
    };

  return {
    label: "Needs Improvement",
    color: "bg-red-100 text-red-700",
  };
}

export default function AnalysisResult({
  analysis,
}: AnalysisResultProps) {
    const [copied, setCopied] = useState(false);

async function handleCopy() {
  if (!analysis) return;

  const report = `
Growvelt AI Resume Review

Overall Score: ${analysis.score}%
ATS Score: ${analysis.atsScore}%

Strengths:
${analysis.strengths.map((s) => `• ${s}`).join("\n")}

Missing Skills:
${analysis.missingSkills.map((s) => `• ${s}`).join("\n")}

Recommendations:
${analysis.recommendations.map((r) => `• ${r}`).join("\n")}

Summary:
${analysis.summary}
`;

  await navigator.clipboard.writeText(report);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

function handleDownloadPDF() {
  if (!analysis) return;

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("Growvelt AI Resume Review", 20, y);

  y += 12;

  doc.setFontSize(12);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 20, y);

  y += 15;

  doc.setFontSize(16);
  doc.text(`Overall Score: ${analysis.score}%`, 20, y);

  y += 10;

  doc.text(`ATS Score: ${analysis.atsScore}%`, 20, y);

  y += 15;

  doc.setFontSize(15);
  doc.text("Strengths", 20, y);

  y += 10;

  analysis.strengths.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 5;

  doc.text("Missing Skills", 20, y);

  y += 10;

  analysis.missingSkills.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 5;

  doc.text("Recommendations", 20, y);

  y += 10;

  analysis.recommendations.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 10;

  doc.text("Summary", 20, y);

  y += 10;

  const summaryLines = doc.splitTextToSize(analysis.summary, 170);

  doc.text(summaryLines, 20, y);

  doc.save("Growvelt-AI-Resume-Review.pdf");
}
  if (!analysis) return null;

  const overall = getScoreLabel(analysis.score);
  const ats = getScoreLabel(analysis.atsScore);

  return (
    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      {/* Success Banner */}

      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5">

        <CheckCircle2 className="h-8 w-8 text-green-600" />

        <div>

          <h2 className="text-xl font-bold text-green-700">
            Resume Successfully Analyzed
          </h2>

          <p className="text-sm text-green-700">
            Your personalized AI report is ready.
          </p>

        </div>

      </div>

      {/* Heading */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <div className="flex items-center gap-3">

    <h2 className="text-3xl font-bold">
      Growvelt Resume Review
    </h2>

  </div>

  <div className="flex gap-3">

    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-gray-100"
    >
      {copied ? (
        <>
          <Check size={18} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={18} />
          Copy Analysis
        </>
      )}
    </button>

    <button
  onClick={handleDownloadPDF}
  className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
>
      <Download size={18} />

      PDF
    </button>

  </div>

</div>

      {/* Score Cards */}

      <div className="mt-12 grid gap-10 md:grid-cols-2">

  <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">

    <CircularScore
      value={analysis.score}
      label="Overall Score"
      color="#7C3AED"
    />

    <div className="mt-6">

      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${overall.color}`}
      >
        {overall.label}
      </span>

    </div>

  </div>

  <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">

    <CircularScore
      value={analysis.atsScore}
      label="ATS Compatibility"
      color="#16A34A"
    />

    <div className="mt-6">

      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${ats.color}`}
      >
        {ats.label}
      </span>

    </div>

  </div>

</div>

      {/* Strengths */}

      <section className="mt-10 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          ✅ Strengths
        </h3>

        <ul className="mt-4 space-y-3">

          {analysis.strengths.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />

              <span>{item}</span>

            </li>
          ))}

        </ul>

      </section>

      {/* Missing Skills */}

      <section className="mt-8 rounded-2xl border p-6">

        <h3 className="text-xl font-bold">
          🎯 Missing Skills
        </h3>

        <ul className="mt-4 space-y-3">

          {analysis.missingSkills.map((item) => (
            <li key={item}>
              • {item}
            </li>
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
            <li key={item}>
              • {item}
            </li>
          ))}

        </ul>

      </section>

      {/* Summary */}

      <section className="mt-8 rounded-2xl bg-gray-50 p-6">

        <h3 className="text-xl font-bold">
          Career Summary
        </h3>

        <p className="mt-4 leading-8 text-gray-700">
          {analysis.summary}
        </p>

      </section>

      <NextActions />

    </div>
  );
}