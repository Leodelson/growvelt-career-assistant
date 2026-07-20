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

type CandidateScreeningFormProps = {
  onAnalysisComplete: (analysis: Analysis) => void;
};

export default function CandidateScreeningForm({
  onAnalysisComplete,
}: CandidateScreeningFormProps) {
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

      // Replace with your real API later
      await new Promise((resolve) => setTimeout(resolve, 3000));

      onAnalysisComplete({
        score: 91,
        atsScore: 87,

        summary:
          "This candidate demonstrates strong technical qualifications and aligns well with the requirements. Additional experience with cloud platforms would further strengthen the profile.",

        strengths: [
          "Strong SQL knowledge",
          "Excellent Power BI experience",
          "Relevant industry background",
          "Good communication skills",
        ],

        missingSkills: [
          "AWS",
          "Docker",
          "CI/CD",
          "Leadership experience",
        ],

        recommendations: [
          "Invite candidate for interview",
          "Conduct technical assessment",
          "Verify cloud platform experience",
          "Consider for final hiring stage",
        ],
      });
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
        Upload Candidate Resume (PDF, DOC or DOCX)
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
        Paste Candidate Resume
      </label>

      <textarea
        rows={10}
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste the candidate's resume..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Job Description
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
          Analyze Candidate
        </ActionButton>
      </div>

    </div>
  );
}