"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import CoverLetterForm from "./components/CoverLetterForm";
import CoverLetterResult from "./components/CoverLetterResult";

export default function CoverLetterPage() {
  const [coverLetter, setCoverLetter] = useState("");
const [showForm, setShowForm] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-hero">
  <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">

    <Link
      href="/career-assistant/job-seeker"
      className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary-deep cursor-pointer"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Workspace
    </Link>

    <div className="mt-8 animate-fade-up">

      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Writing Assistant
      </div>

      <h1 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
        Growvelt <span className="text-gradient-primary">
          Cover Letter Generator
        </span>
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Generate a personalized, ATS-friendly cover letter tailored to your resume and the job description.
      </p>

    </div>

    <div className="mt-10">

      {showForm ? (
        <CoverLetterForm
          onGenerated={(letter) => {
            setCoverLetter(letter);
            setShowForm(false);
          }}
        />
      ) : (
        <CoverLetterResult
          coverLetter={coverLetter}
          onGenerateAnother={() => {
            setCoverLetter("");
            setShowForm(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      )}

    </div>

  </div>
</main>
  );
}