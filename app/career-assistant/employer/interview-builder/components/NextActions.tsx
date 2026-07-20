"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
 FileText,
  Users,
} from "lucide-react";

export default function NextActions() {
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft">

      <h3 className="text-2xl font-bold">
        What's next?
      </h3>

      <p className="mt-2 text-muted-foreground">
        Continue building a smarter hiring workflow with Growvelt AI.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {/* Bias Evaluation */}

        <Link
          href="/career-assistant/employer/bias-evaluation"
          className="group rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
        >
          <div className="flex items-center gap-3">

            <ShieldCheck className="h-8 w-8 text-primary" />

            <div>

              <h4 className="font-bold">
                Bias-aware Evaluation
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                Review hiring decisions for fairness and consistency.
              </p>

            </div>

          </div>

          <div className="mt-5 flex items-center font-semibold text-primary">
            Open
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>

        </Link>

        {/* Candidate Screening */}

        <Link
          href="/career-assistant/employer/candidate-screening"
          className="group rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
        >
          <div className="flex items-center gap-3">

            <Users className="h-8 w-8 text-primary" />

            <div>

              <h4 className="font-bold">
                Candidate Screening
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                Analyze resumes and evaluate applicants with AI.
              </p>

            </div>

          </div>

          <div className="mt-5 flex items-center font-semibold text-primary">
            Open
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>

        </Link>

      </div>

      <div className="mt-5">

        <Link
          href="/career-assistant/employer/job-description"
          className="group flex items-center justify-between rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
        >

          <div className="flex items-center gap-3">

            <FileText className="h-8 w-8 text-primary" />

            <div>

              <h4 className="font-bold">
                Job Description Generator
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                Generate professional job descriptions before interviewing candidates.
              </p>

            </div>

          </div>

          <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />

        </Link>

      </div>

      <div className="mt-8 rounded-2xl bg-primary/5 p-5">

        <h4 className="font-semibold">
          Hiring Tip
        </h4>

        <p className="mt-2 text-sm text-muted-foreground">
          The best interviews are structured. Ask every candidate the same core
          questions, score answers consistently, and combine AI insights with
          human judgment to make fair hiring decisions.
        </p>

      </div>

    </div>
  );
}