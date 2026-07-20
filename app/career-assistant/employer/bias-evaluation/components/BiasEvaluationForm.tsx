"use client";

import { useState } from "react";

import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type Props = {
  onGenerated: (report: string) => void;
};

export default function BiasEvaluationForm({
  onGenerated,
}: Props) {
  const [jobTitle, setJobTitle] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [interviewerNotes, setInterviewerNotes] = useState("");
  const [decisionReason, setDecisionReason] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleEvaluate() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setLoading(true);

      // Replace with API later
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const report = `
BIAS EVALUATION REPORT

Candidate:
${candidateName}

Position:
${jobTitle}

======================================

INTERVIEW NOTES

${interviewerNotes}

======================================

HIRING DECISION

${decisionReason}

======================================

Growvelt Assistant FAIRNESS REVIEW

✓ Language appears mostly objective.

✓ Candidate evaluation focuses on experience and skills.

⚠ Some statements could be supported with measurable evidence.

⚠ Consider comparing this candidate against the same evaluation criteria used for other applicants.

======================================

RECOMMENDATIONS

• Use standardized interview scoring.

• Remove subjective wording.

• Focus on measurable competencies.

• Compare all candidates using identical criteria.

• Document reasons with evidence rather than assumptions.

======================================

Additional Context

${additionalContext}
`;

      onGenerated(report);

    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <AIThinking />;
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="block text-sm font-semibold">
            Candidate Name
          </label>

          <input
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="John Doe"
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="block text-sm font-semibold">
            Job Title
          </label>

          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Data Analyst"
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <label className="mt-8 block text-sm font-semibold">
        Interview Notes
      </label>

      <textarea
        rows={8}
        value={interviewerNotes}
        onChange={(e) => setInterviewerNotes(e.target.value)}
        placeholder="Paste interviewer notes..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Hiring Decision & Reason
      </label>

      <textarea
        rows={6}
        value={decisionReason}
        onChange={(e) => setDecisionReason(e.target.value)}
        placeholder="Why was the candidate accepted or rejected?"
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Additional Context (Optional)
      </label>

      <textarea
        rows={5}
        value={additionalContext}
        onChange={(e) => setAdditionalContext(e.target.value)}
        placeholder="Any additional information..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-8">

        <ActionButton onClick={handleEvaluate}>
          Evaluate Hiring Bias
        </ActionButton>

      </div>

    </div>
  );
}