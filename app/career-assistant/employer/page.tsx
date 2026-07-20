"use client";

import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Users,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Clock,
} from "lucide-react";

import ToolCard from "../components/ToolCard";

export default function EmployerPage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">

        <Link
          href="/career-assistant"
          className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Career Assistant
        </Link>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-glow/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative animate-fade-up">

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Hiring Workspace
            </div>

            <h1 className="mt-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Hire smarter with
              <span className="text-gradient-primary"> Growvelt Assistant</span>
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Create job descriptions, screen candidates, generate interview
              questions, and make fair hiring decisions; all from one workspace.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">

              {[
                {
                  icon: <TrendingUp className="h-4 w-4" />,
                  value: "4",
                  label: "AI Tools",
                },
                {
                  icon: <Clock className="h-4 w-4" />,
                  value: "~1 min",
                  label: "Average Time",
                },
                {
                  icon: <Users className="h-4 w-4" />,
                  value: "∞",
                  label: "Candidates",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-background/60 p-3"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>

                  <p className="font-bold">{item.value}</p>

                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <ToolCard
            icon={<FileText size={24} />}
            title="Job Description Generator"
            description="Generate professional job descriptions in seconds."
            href="/career-assistant/employer/job-description"
          />

          <ToolCard
            icon={<Users size={24} />}
            title="Candidate Screening"
            description="Analyze resumes and shortlist top candidates."
            href="/career-assistant/employer/candidate-screening"
          />

          <ToolCard
            icon={<MessageSquare size={24} />}
            title="Interview Question Builder"
            description="Generate customized interview questions."
            href="/career-assistant/employer/interview-builder"
          />

          <ToolCard
            icon={<ShieldCheck size={24} />}
            title="Bias-aware Evaluation"
            description="Receive objective hiring recommendations."
            href="/career-assistant/employer/bias-evaluation"
          />

        </div>

      </div>
    </main>
  );
}