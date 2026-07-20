import Link from "next/link";
import {
  FileText,
  FileEdit,
  Briefcase,
  MessageSquare,
  ArrowLeft,
  Save,
  TrendingUp,
  Clock,
} from "lucide-react";

import ToolCard from "../components/ToolCard";

export default function JobSeekerPage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">

        <Link
          href="/career-assistant"
          className="inline-flex cursor-pointer items-center gap-2 text-sm text-primary transition hover:text-primary-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Career Assistant
        </Link>

        {/* Hero */}

        <section className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-glow/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative animate-fade-up">

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">


              Career Workspace

            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Welcome to your{" "}
              <span className="text-gradient-primary">
              Career Workspace
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Analyze resumes, generate professional cover letters, prepare
              for interviews, compare yourself against job descriptions and
              manage your AI career reports; all in one workspace.
            </p>

            {/* Stats */}

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">

              <div className="rounded-xl border border-border bg-background/70 p-3 backdrop-blur">

                <div className="flex items-center gap-2">

                  <TrendingUp className="h-4 w-4 text-primary" />

                  <span className="text-sm font-bold">
                    5
                  </span>

                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  AI Tools
                </p>

              </div>

              <div className="rounded-xl border border-border bg-background/70 p-3 backdrop-blur">

                <div className="flex items-center gap-2">

                  <Clock className="h-4 w-4 text-primary" />

                  <span className="text-sm font-bold">
                    ~2 min
                  </span>

                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  Average Analysis
                </p>

              </div>

              <div className="rounded-xl border border-border bg-background/70 p-3 backdrop-blur">

                <div className="flex items-center gap-2">

                  <span className="text-sm font-bold">
                    AI
                  </span>

                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  Powered
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Workspace */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold">
            Choose a tool
          </h2>

          <p className="mt-2 text-muted-foreground">
            Everything you need to improve your chances of getting hired.
          </p>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <ToolCard
            icon={<FileText size={24} />}
            title="Resume Analyzer"
            description="Upload your resume and receive AI-powered feedback."
            href="/career-assistant/job-seeker/resume"
          />

          <ToolCard
            icon={<FileEdit size={24} />}
            title="Cover Letter Generator"
            description="Generate tailored cover letters in seconds."
            href="/career-assistant/job-seeker/cover-letter"
          />

          <ToolCard
            icon={<MessageSquare size={24} />}
            title="Interview Preparation"
            description="Practice interviews with AI."
            href="/career-assistant/job-seeker/interview"
          />

          <ToolCard
            icon={<Briefcase size={24} />}
            title="Job Match Analyzer"
            description="Compare your resume with a job description."
            href="/career-assistant/job-seeker/job-match"
          />

          <ToolCard
            icon={<Save size={24} />}
            title="Saved Reports"
            description="Access and manage your previous AI reports."
            href="/career-assistant/job-seeker/saved-reports"
          />

        </div>

      </div>
    </main>
  );
}