"use client";

import { useState } from "react";

import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type InterviewFormProps = {
  onStart: () => void;
};

export default function InterviewForm({
  onStart,
}: InterviewFormProps) {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("Entry Level");
  const [interviewType, setInterviewType] = useState("Mixed");
  const [questions, setQuestions] = useState("5");
  const [loading, setLoading] = useState(false);

  async function handleStart() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );

      onStart();
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
        Job Title
      </label>

      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Data Analyst"
        className="mt-2 w-full rounded-xl border p-3"
      />

      <label className="mt-8 block text-sm font-semibold">
        Experience Level
      </label>

      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="mt-2 w-full rounded-xl border p-3"
      >
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>

      <label className="mt-8 block text-sm font-semibold">
        Interview Type
      </label>

      <select
        value={interviewType}
        onChange={(e) => setInterviewType(e.target.value)}
        className="mt-2 w-full rounded-xl border p-3"
      >
        <option>Mixed</option>
        <option>HR</option>
        <option>Technical</option>
        <option>Behavioral</option>
      </select>

      <label className="mt-8 block text-sm font-semibold">
        Number of Questions
      </label>

      <select
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
        className="mt-2 w-full rounded-xl border p-3"
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
      </select>

      <div className="mt-8">

        <ActionButton
          onClick={handleStart}
        >
          Start Interview
        </ActionButton>

      </div>

    </div>
  );
}