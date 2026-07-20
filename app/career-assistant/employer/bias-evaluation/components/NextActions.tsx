"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Users,
  MessageSquare,
} from "lucide-react";

export default function NextActions() {
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft">

      <h3 className="text-2xl font-bold">
        What's next?
      </h3>

      <p className="mt-2 text-muted-foreground">
        Continue building a smarter, fairer hiring workflow with Growvelt AI.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

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
                Screen resumes and rank applicants using AI.
              </p>

            </div>

          </div>

          <div className="mt-5 flex items-center font-semibold text-primary">
            Open
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </div>

        </Link>

        {/* Interview Builder */}

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
                Generate structured interview questions for any role.
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
                Create professional, AI-generated job descriptions before publishing vacancies.
              </p>

            </div>

          </div>

          <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />

        </Link>

      </div>

      <div className="mt-8 rounded-2xl bg-primary/5 p-5">

        <h4 className="font-semibold">
          Growvelt Assistant Tip
        </h4>

        <p className="mt-2 text-sm text-muted-foreground">
          Fair hiring combines structured interviews, standardized evaluation
          criteria, objective resume screening, and evidence-based decisions.
          Use all four Growvelt AI employer tools together to improve hiring
          quality while reducing unconscious bias.
        </p>

      </div>

    </div>
  );
}