"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  RefreshCw,
} from "lucide-react";

import JobDescriptionForm from "./components/JobDescriptionForm";
import JobDescriptionResult from "./components/JobDescriptionResult";

export default function JobDescriptionPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [formKey, setFormKey] = useState(0);

  function handleGenerated(result: string) {
    setJobDescription(result);
    setShowForm(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleGenerateAnother() {
    setJobDescription("");
    setShowForm(true);
    setFormKey((prev) => prev + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <Link
          href="/career-assistant/employer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-deep"
        >
          <ArrowLeft size={18} />
          Back to Employer Workspace
        </Link>

        <div className="mt-8 animate-fade-up">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Hiring Assistant
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
  Growvelt{" "}
  <span className="text-gradient-primary">
    Job Description Generator
  </span>
</h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Generate professional, structured job descriptions in seconds.
          </p>

        </div>

        <div className="mt-10">

          {showForm ? (
            <JobDescriptionForm
              key={formKey}
              onGenerated={handleGenerated}
            />
          ) : (
            <>
              <JobDescriptionResult
                jobDescription={jobDescription}
                onGenerateAnother={handleGenerateAnother}
              />

              <div className="mt-10 text-center">

                

              </div>
            </>
          )}

        </div>

      </div>
    </main>
  );
}