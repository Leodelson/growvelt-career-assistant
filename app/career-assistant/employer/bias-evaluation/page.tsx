"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  RefreshCw,
  Download,
} from "lucide-react";

import BiasEvaluationForm from "./components/BiasEvaluationForm";
import BiasEvaluationResult from "./components/BiasEvaluationResult";

export default function BiasEvaluationPage() {
  const [report, setReport] = useState("");
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
            Fair Hiring Intelligence
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Growvelt{" "}
            <span className="text-gradient-primary">
              Bias-aware Evaluation
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Review interview notes and hiring decisions to identify
            unconscious bias, improve fairness and support objective
            recruitment decisions.
          </p>

        </div>

        <div className="mt-10">

          {showForm ? (
            <BiasEvaluationForm
              onGenerated={(result) => {
                setReport(result);
                setShowForm(false);
              }}
            />
          ) : (
            <>
              <BiasEvaluationResult
                report={report}
                onGenerateAnother={() => {
                  setReport("");
                  setShowForm(true);
                }}
              />

              <div className="mt-10 flex flex-wrap justify-center gap-3">

                <button
                  onClick={() => {
                    setReport("");
                    setShowForm(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <RefreshCw className="h-4 w-4" />
                  Evaluate Another
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