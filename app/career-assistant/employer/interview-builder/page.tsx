"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Download,
} from "lucide-react";

import InterviewBuilderForm from "./components/InterviewBuilderForm";
import InterviewBuilderResult from "./components/InterviewBuilderResult";

export default function InterviewBuilderPage() {
  const [questions, setQuestions] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <Link
          href="/career-assistant/employer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-deep"
        >
          <ArrowLeft size={18} />
          Back to Employer Workspace
        </Link>

        <div className="mt-8">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Interview Intelligence
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Growvelt{" "}
            <span className="text-gradient-primary">
              Interview Question Builder
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Generate structured interview questions tailored to any role.
            Create technical, behavioural and situational questions in seconds.
          </p>

        </div>

        <div className="mt-10">

          {showForm ? (
            <InterviewBuilderForm
              onGenerated={(result) => {
                setQuestions(result);
                setShowForm(false);
              }}
            />
          ) : (
            <>
              <InterviewBuilderResult
                questions={questions}
                onGenerateAnother={() => {
                  setQuestions("");
                  setShowForm(true);
                }}
              />

              <div className="mt-10 flex flex-wrap justify-center gap-3">

                <button
                  onClick={() => {
                    setQuestions("");
                    setShowForm(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <RefreshCw className="h-4 w-4" />
                  Generate Another
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold transition hover:bg-accent"
                >
                  <Download className="h-4 w-4" />
                  Export
                </button>

              </div>
            </>
          )}

        </div>

      </div>
    </main>
  );
}