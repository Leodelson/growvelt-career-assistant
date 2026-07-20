// ============================================================
// FILE: app/page.tsx
// Route: /  (Landing page)
// ============================================================
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sparkles,
  User,
  Building2,
  FileText,
  MessageSquare,
  Briefcase,
  ArrowRight,
  Check,
  Zap,
  Shield,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

export default function LandingPage() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-hero overflow-x-hidden">
      {/* Nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-soft transition-transform group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Growvelt</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer">Features</a>
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer">How it works</a>
          
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl transition-transform duration-700"
          style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl transition-transform duration-700"
          style={{ transform: `translate(${-mouse.x * 40}px, ${-mouse.y * 20}px)` }}
        />

        <div className="relative animate-fade-up text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Growvelt Career Assistant
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Smarter careers. <span className="text-gradient-primary">Better hiring.</span> Made easy.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Analyze resumes, generate professional cover letters, prepare for interviews, match candidates to jobs, and hire smarter; all from one Growvelt Assistant workspace.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/career-assistant/job-seeker"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:shadow-glow hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card cursor-pointer"
            >
              See features
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur shadow-soft">
            {[
              { v: "94%", l: "ATS pass rate" },
              { v: "3.2×", l: "Faster hiring" },
              { v: "1k+", l: "Careers helped" },
            ].map((s) => (
              <div key={s.l} className="min-w-0 text-center">
                <div className="text-2xl font-black text-gradient-primary sm:text-3xl">{s.v}</div>
                <div className="mt-1 truncate text-xs text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Scroll Indicator */}

<div className="flex justify-center -mt-12 mb-12">
  <a
    href="#how"
    className="group flex flex-col items-center cursor-pointer"
  >
    

    <ChevronDown
      className="h-10 w-10 text-primary animate-bounce-down transition group-hover:scale-110"
    />
  </a>
</div>

{/* Role selection */}
      {/* Role selection */}
      <section id="how" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How can Growvelt help you today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Choose your role to unlock Growvelt Assistant-powered tools tailored to what you need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <RoleCard
            icon={<User className="h-6 w-6" />}
            title="Job Seeker"
            tagline="Land your next role"
            description="Accelerate your career with Growvelt Assistant guidance across every step of your job search."
            features={[
              "Resume analysis & ATS scoring",
              "Cover letter generator",
              "Interview preparation coach",
              "Job match analyzer",
            ]}
            buttonText="Start as Job Seeker"
            href="/career-assistant/job-seeker"
            accent="from-primary to-primary-glow"
          />
          <RoleCard
            icon={<Building2 className="h-6 w-6" />}
            title="Employer"
            tagline="Hire smarter, faster"
            description="Build better teams with Growvelt Assistant recruitment tools designed for modern hiring."
            features={[
              "Job description generator",
              "candidate screening",
              "Interview question builder",
              "Bias-aware evaluation",
            ]}
            buttonText="Start as Employer"
            href="/career-assistant/employer"
            accent="from-primary-deep to-primary"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for outcomes, not busywork
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Zap className="h-5 w-5" />, title: "Instant insights", body: "Get actionable feedback in seconds, not days." },
            { icon: <Shield className="h-5 w-5" />, title: "Private by default", body: "Your data stays yours. Encrypted end-to-end." },
            { icon: <TrendingUp className="h-5 w-5" />, title: "Proven results", body: "Users see 3× more callbacks in the first month." },
            { icon: <FileText className="h-5 w-5" />, title: "ATS-ready", body: "Optimized for the systems that actually screen you." },
            { icon: <MessageSquare className="h-5 w-5" />, title: "Real interview prep", body: "Practice with an Assistant that thinks like a recruiter." },
            { icon: <Briefcase className="h-5 w-5" />, title: "Role-fit scoring", body: "Match your resume to any Job with a single click." },
          ].map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant cursor-default"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-primary opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}

function RoleCard({
  icon,
  title,
  tagline,
  description,
  features,
  buttonText,
  href,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
      <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition group-hover:opacity-25`} />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-xl font-bold">{title}</h3>
            <p className="truncate text-xs uppercase tracking-wider text-primary">{tagline}</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{description}</p>

        <ul className="mt-6 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-gradient-primary hover:shadow-elegant cursor-pointer"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
