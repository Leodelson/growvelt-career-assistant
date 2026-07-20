"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

import JobMatchForm from "./components/JobMatchForm";
import JobMatchResult from "./components/JobMatchResult";

type MatchAnalysis = {
  matchScore: number;
  atsScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

export default function JobMatchPage() {
  const [analysis, setAnalysis] = useState<MatchAnalysis | null>(null);
  const [showForm, setShowForm] = useState(true);

  // reset form
  const [formKey, setFormKey] = useState(0);

  function handleAnalyzeAgain() {
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
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">

        <Link
          href="/career-assistant/job-seeker"
          className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary-deep cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Workspace
        </Link>

        {/* Hero */}

        <div className="mt-8 animate-fade-up">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Job Intelligence
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Growvelt <span className="text-gradient-primary">Job Match Analyzer</span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Compare your resume against any job description and discover
            how well you match, identify missing skills, and receive
            personalized recommendations.
          </p>

        </div>

        <div className="mt-10">

          {showForm ? (

            <JobMatchForm
              key={formKey}
              onAnalysisComplete={(result: MatchAnalysis) => {
                setAnalysis(result);
                setShowForm(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />

          ) : (

            <>
              <JobMatchResult
                analysis={analysis}
                onAnalyzeAgain={handleAnalyzeAgain}
              />
              

            </>

          )}

        </div>

      </div>
    </main>
  );
}