"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Download,
} from "lucide-react";

import CandidateScreeningForm from "./components/CandidateScreeningForm";
import CandidateScreeningResult from "./components/CandidateScreeningResult";

type Analysis = {
  score: number;
  atsScore: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

export default function CandidateScreeningPage() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [formKey, setFormKey] = useState(0);

  function handleAnalysisComplete(result: Analysis) {
    setAnalysis(result);
    setShowForm(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleAnalyzeAnother() {
    setAnalysis(null);
    setShowForm(true);
    setFormKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-5xl px-6 py-12">

        <Link
          href="/career-assistant/employer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-deep"
        >
          <ArrowLeft size={18} />
          Back to Employer Workspace
        </Link>

        <div className="mt-8">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Candidate Intelligence
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Growvelt{" "}
            <span className="text-gradient-primary">
              Candidate Screening
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Upload a candidate's resume and compare it against your job
            description. Growvelt AI evaluates qualifications, ATS compatibility,
            strengths, missing skills and hiring readiness in seconds.
          </p>

        </div>

        <div className="mt-10">

          {showForm ? (
            <CandidateScreeningForm
              key={formKey}
              onAnalysisComplete={handleAnalysisComplete}
            />
          ) : (
            <>
              <CandidateScreeningResult analysis={analysis!} />

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

                <button
                  onClick={handleAnalyzeAnother}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <RefreshCw className="h-4 w-4" />
                  Analyze Another Candidate
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold transition hover:bg-accent"
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