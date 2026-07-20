"use client";

import { useState } from "react";
import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type MatchAnalysis = {
  matchScore: number;
  atsScore: number;
  matchingSkills: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

type JobMatchFormProps = {
  onAnalysisComplete: (analysis: MatchAnalysis) => void;
};

export default function JobMatchForm({
  onAnalysisComplete,
}: JobMatchFormProps) {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );

      // Mock AI response for now
      onAnalysisComplete({
        matchScore: 87,
        atsScore: 91,
        matchingSkills: [
          "SQL",
          "Power BI",
          "Excel",
          "Data Visualization",
        ],
        missingSkills: [
          "Python",
          "AWS",
          "Machine Learning",
        ],
        recommendations: [
          "Add Python projects to your resume.",
          "Mention measurable achievements.",
          "Include more ATS keywords from the job description.",
        ],
        summary:
          "Your resume is a strong match for this role. Adding the missing technical skills and improving keyword optimization would significantly increase your chances of passing ATS screening.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <AIThinking />;
  }

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <label className="block text-sm font-semibold">
        Upload Resume (PDF, DOC, DOCX)
      </label>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="mt-2 w-full rounded-xl border p-3"
        onChange={(e) => {
          setResumeFile(e.target.files?.[0] ?? null);
        }}
      />

      <div className="my-8 flex items-center">
        <div className="flex-1 border-t" />

        <span className="px-4 text-sm text-gray-500">
          OR
        </span>

        <div className="flex-1 border-t" />
      </div>

      <label className="block text-sm font-semibold">
        Paste Resume
      </label>

      <textarea
        rows={10}
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Job Description
      </label>

      <textarea
        rows={10}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-8">
        <ActionButton onClick={handleAnalyze}>
          Analyze Job Match
        </ActionButton>
      </div>

    </div>
  );
}