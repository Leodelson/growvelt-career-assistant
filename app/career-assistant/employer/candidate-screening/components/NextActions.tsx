"use client";

import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  MessageSquare,
  ShieldCheck,
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

        <Link
          href="/career-assistant/employer/interview-builder"
          className="group rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-bold">
                Interview Question Builder
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                Generate role-specific interview questions.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center text-primary font-semibold">
            Open
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>

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

          <div className="mt-5 flex items-center text-primary font-semibold">
            Open
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>

      </div>

      <div className="mt-8 rounded-2xl bg-primary/5 p-5">

        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-1 h-6 w-6 text-primary" />

          <div>
            <h4 className="font-semibold">
              Hiring Tip
            </h4>

            <p className="mt-2 text-sm text-muted-foreground">
              Candidate screening is only the first step. Combine AI screening,
              structured interviews, and bias-aware evaluation to make more
              confident hiring decisions.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}