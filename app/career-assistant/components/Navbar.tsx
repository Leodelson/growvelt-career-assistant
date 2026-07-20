"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Briefcase,
  GraduationCap,
  User,
  Building2,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
  <div className="relative">
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-lg">

    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <Link
        href="/career-assistant"
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="/logo/growvelt-white-text.png"
          alt="Growvelt"
          width={140}
          height={48}
          priority
          className="h-auto w-[100px]"
        />

        <span className="sr-only">Growvelt</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">

  <a
    href="/career-assistant#features"
    className="text-sm text-muted-foreground hover:text-foreground transition"
  >
    Features
  </a>

  <a
    href="/career-assistant#how"
    className="text-sm text-muted-foreground hover:text-foreground transition"
  >
    How it Works
  </a>

  <a
    href="https://www.growvelt.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-muted-foreground hover:text-foreground transition"
  >
    Jobs
  </a>

  <a
    href="https://www.courses.growvelt.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-muted-foreground hover:text-foreground transition"
  >
    Courses
  </a>

</div>

        <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden rounded-xl border border-border p-2 transition hover:bg-accent"
>
  {isMenuOpen ? (
    <X className="h-5 w-5" />
  ) : (
    <Menu className="h-5 w-5" />
  )}
</button>

</div>

</nav>
     {isMenuOpen && (
  <div
    className="
      absolute
      left-0
      right-0
      top-full
      z-50
      md:hidden
      overflow-hidden
      border-t
      border-border
      bg-card/95
      backdrop-blur-md
      shadow-soft
      animate-fade-down
    "
  >

      <div className="flex flex-col px-6 py-4">

        <a
  href="/career-assistant#features"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <Sparkles className="h-4 w-4 text-primary" />
  Features
</a>

        <a
  href="/career-assistant#how"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <Sparkles className="h-4 w-4 text-primary" />
  How it Works
</a>
<hr className="my-3 border-border" />

        <a
  href="https://jobs.growvelt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <Briefcase className="h-4 w-4 text-primary" />
  Jobs
</a>

        <a
  href="https://courses.growvelt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <GraduationCap className="h-4 w-4 text-primary" />
  Courses
</a>
<hr className="my-3 border-border" />

        <Link
  href="/career-assistant/job-seeker"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <User className="h-4 w-4 text-primary" />
  Job Seeker
</Link>

        <Link
  href="/career-assistant/employer"
  onClick={() => setIsMenuOpen(false)}
  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-primary"
>
  <Building2 className="h-4 w-4 text-primary" />
  Employer
</Link>

      </div>

    </div>
  )}
</div>
  );
}