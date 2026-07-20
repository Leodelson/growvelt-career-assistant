"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Download,
} from "lucide-react";

import ResumeForm from "./components/ResumeForm";
import AnalysisResult from "./components/AnalysisResult";

type Analysis = {
  score: number;
  atsScore: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

export default function ResumePage() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [showForm, setShowForm] = useState(true);

  // NEW
  const [formKey, setFormKey] = useState(0);

  function handleAnalysisComplete(result: Analysis) {
    setAnalysis(result);
    setShowForm(false);
  }

  function handleAnalyzeAnother() {
    setAnalysis(null);
    setShowForm(true);

    // NEW
    setFormKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gradient-hero">
  <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">

    <Link
      href="/career-assistant/job-seeker"
      className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary-deep cursor-pointer"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Workspace
    </Link>

    <div className="mt-8 animate-fade-up">

      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Resume Intelligence
      </div>

      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
        Growvelt <span className="text-gradient-primary">Resume Analyzer</span>
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Upload your resume or paste its content to receive AI-powered feedback,
        ATS scoring, and personalized recommendations.
      </p>

    </div>

    <div className="mt-10">
          {showForm ? (
            <ResumeForm
              key={formKey}
              onAnalysisComplete={handleAnalysisComplete}
            />
          ) : (
            <>
              <AnalysisResult analysis={analysis} />

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

  <button
    onClick={handleAnalyzeAnother}
    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
  >
    <RefreshCw className="h-4 w-4" />
    Analyze Another Resume
  </button>

  <button
    onClick={() => window.print()}
    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold transition hover:bg-accent"
  >
    <Download className="h-4 w-4" />
    Export Report
  </button>

</div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}