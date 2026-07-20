import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function SavedReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-12">

        <Link
          href="/career-assistant/job-seeker"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft size={18} />
          Back to Workspace
        </Link>

        <div className="mt-10 rounded-3xl border bg-white p-10 text-center shadow-sm">

          <Save className="mx-auto h-16 w-16 text-purple-600" />

          <h1 className="mt-6 text-4xl font-bold">
            Saved AI Reports
          </h1>

          <p className="mt-4 text-gray-600">
            Your saved resume analyses will appear here.
          </p>

          <div className="mt-10 rounded-2xl border border-dashed p-10">

            <p className="text-gray-500">
              You haven't saved any reports yet.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}