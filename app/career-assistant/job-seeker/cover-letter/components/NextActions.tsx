import Link from "next/link";
import {
  FileText,
  Briefcase,
  MessageSquare,
  Save,
} from "lucide-react";

const actions = [
  {
    title: "Resume Analyzer",
    description:
      "Analyze your resume and get personalized feedback.",
    icon: FileText,
    href: "/career-assistant/job-seeker/resume-analyzer",
  },
  {
    title: "Interview Practice",
    description:
      "Practice personalized interview questions.",
    icon: MessageSquare,
    href: "/career-assistant/job-seeker/interview",
  },
  {
    title: "Match Jobs",
    description:
      "Discover jobs that fit your profile.",
    icon: Briefcase,
    href: "/career-assistant/job-seeker/job-match",
  },
  {
    title: "Save Report",
    description:
      "Save this analysis to your dashboard.",
    icon: Save,
    href: "/career-assistant/job-seeker/saved-reports",
  },
];

export default function NextActions() {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold">
        What's Next?
      </h2>

      <p className="mt-2 text-gray-600">
        Continue improving your career with Growvelt AI.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg"
            >
              <Icon className="h-10 w-10 text-purple-600" />

              <h3 className="mt-5 text-xl font-bold">
                {action.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {action.description}
              </p>
            </Link>
          );
        })}

      </div>

    </section>
  );
}