import Link from "next/link";
import {
  Users,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

export default function NextActions() {
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft">

      <h3 className="text-xl font-bold">
        What's next?
      </h3>

      <p className="mt-2 text-muted-foreground">
        Continue your hiring workflow with Growvelt Assistant.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <Link
          href="/career-assistant/employer/candidate-screening"
          className="group rounded-2xl border border-border p-5 transition hover:border-primary hover:shadow-soft"
        >
          <Users className="h-8 w-8 text-primary" />

          <h4 className="mt-4 font-bold">
          Candidate Screening
          </h4>

          <p className="mt-2 text-sm text-muted-foreground">
            Upload resumes and instantly rank candidates.
          </p>

          <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
            Open
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/career-assistant/employer/interview-builder"
          className="group rounded-2xl border border-border p-5 transition hover:border-primary hover:shadow-soft"
        >
          <ClipboardCheck className="h-8 w-8 text-primary" />

          <h4 className="mt-4 font-bold">
            Interview Question Builder
          </h4>

          <p className="mt-2 text-sm text-muted-foreground">
            Generate tailored interview questions for the role.
          </p>

          <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
            Open
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>

      </div>

    </div>
  );
}