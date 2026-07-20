"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import InterviewForm from "./components/InterviewForm";
import InterviewSession from "./components/InterviewSession";

export default function InterviewPage() {
  const [session, setSession] = useState(false);

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

        {/* Hero */}

        <div className="mt-8 animate-fade-up">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Interview Coach
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Growvelt <span className="text-gradient-primary">Interview Preparation</span>
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Practice realistic interview questions, improve your confidence,
            and receive AI-powered feedback before your next interview.
          </p>

        </div>

        {/* Content */}

        <div className="mt-10">

          {!session ? (
            <InterviewForm
              onStart={() => setSession(true)}
            />
          ) : (
            <InterviewSession />
          )}

        </div>

      </div>
    </main>
  );
}