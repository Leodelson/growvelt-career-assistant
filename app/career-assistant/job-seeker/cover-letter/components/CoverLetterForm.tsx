"use client";

import { useState } from "react";

import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type CoverLetterFormProps = {
  onGenerated: (coverLetter: string) => void;
};

export default function CoverLetterForm({
  onGenerated,
}: CoverLetterFormProps) {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );

      const response = await fetch(
        "/api/career-assistant/cover-letter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  resume: resume.trim().replace(/\n{2,}/g, "\n"),
  companyName: companyName.trim(),
  jobTitle: jobTitle.trim(),
  jobDescription: jobDescription.trim().replace(/\n{2,}/g, "\n"),
}),
        }
      );

      const data = await response.json();

      if (data.success) {
        onGenerated(data.coverLetter);
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
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="block text-sm font-semibold">
            Company Name
          </label>

          <input
            type="text"
            value={companyName}
            onChange={(e) =>
              setCompanyName(e.target.value)
            }
            placeholder="Google"
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="block text-sm font-semibold">
            Job Title
          </label>

          <input
            type="text"
            value={jobTitle}
            onChange={(e) =>
              setJobTitle(e.target.value)
            }
            placeholder="Data Analyst"
            className="mt-2 w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <label className="mt-8 block text-sm font-semibold">
        Resume
      </label>

      <textarea
        rows={10}
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
        placeholder="Paste your resume..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Job Description
      </label>

      <textarea
        rows={10}
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        placeholder="Paste the job description..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-8">

        <ActionButton
          onClick={handleGenerate}
        >
          Generate Cover Letter
        </ActionButton>

      </div>

    </div>
  );
}