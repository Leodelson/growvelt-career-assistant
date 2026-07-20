"use client";

import Link from "next/link";
import { Sparkles, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

       {/* Logo */}
<div className="flex items-center gap-4">

  {/* Logo Container */}
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-soft dark:bg-card">
    <Image
      src="/logo/growvelt-white-text.png"
      alt="Growvelt"
      width={100}
      height={100}
      priority
      className="h-auto w-80 object-contain"
    />
  </div>

          <div>
            <h3 className="font-bold">Growvelt Career Assistant</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered career tools for job seekers and employers.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#features" className="transition hover:text-primary">
            Features
          </a>

          <a href="#how" className="transition hover:text-primary">
            How it works
          </a>

          <Link
            href="/career-assistant/job-seeker"
            className="transition hover:text-primary"
          >
            Job Seeker
          </Link>

          <Link
            href="/career-assistant/employer"
            className="transition hover:text-primary"
          >
            Employer
          </Link>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:contact@growvelt.com"
            className="rounded-xl border border-border p-2 transition hover:bg-accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/Leodelson/growvelt-career-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border p-2 transition hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-sm text-muted-foreground">
        © {year} Growvelt Career Assistant. Built with AI for the OpenAI Build Week.
      </div>
    </footer>
  );
}