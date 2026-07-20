"use client";

import { useState } from "react";
import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type Analysis = {
  score: number;
  atsScore: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
  summary: string;
};

type ResumeFormProps = {
  onAnalysisComplete: (analysis: Analysis) => void;
};

export default function ResumeForm({
  onAnalysisComplete,
}: ResumeFormProps) {
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
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch("/api/career-assistant/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resumeText,
        resumeFileName: resumeFile?.name ?? null,
        jobDescription,
      }),
    });

    const data = await response.json();

    if (data.success) {
      onAnalysisComplete(data.analysis);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

if (loading) {
  return <AIThinking />;
}
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <label className="block text-sm font-semibold">
  Upload Resume (PDF, DOC or DOCX)
</label>

<input
  type="file"
  accept=".pdf,.doc,.docx"
  className="mt-2 w-full rounded-xl border p-3"
  onChange={(e) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  }}
/>

<div className="my-8 flex items-center">
  <div className="flex-1 border-t"></div>

  <span className="px-4 text-sm text-gray-500">
    OR
  </span>

  <div className="flex-1 border-t"></div>
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
        Job Description (Optional)
      </label>

      <textarea
        rows={8}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the job description..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-8">
        <ActionButton onClick={handleAnalyze}>
          Analyze Resume
        </ActionButton>
      </div>
    </div>
  );
}