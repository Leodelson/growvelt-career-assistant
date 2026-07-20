"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

import ActionButton from "../../../components/ActionButton";
import AIThinking from "../../../components/AIThinking";

type Props = {
  onGenerated: (questions: string) => void;
};

export default function InterviewBuilderForm({
  onGenerated,
}: Props) {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [level, setLevel] = useState("Mid-Level");
  const [type, setType] = useState("Mixed");
  const [count, setCount] = useState("10");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setLoading(true);

      // Replace with API later
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const generated = `
INTERVIEW GUIDE

Company:
${companyName}

Role:
${jobTitle}

Experience Level:
${level}

Interview Type:
${type}

====================================

1. Tell us about yourself.

2. Why are you interested in this role?

3. Describe a challenging project you've worked on.

4. How would you solve a difficult problem related to this position?

5. Which tools and technologies are you most comfortable using?

6. Tell us about a conflict you had with a teammate.

7. How do you prioritize multiple deadlines?

8. What would you improve in our hiring process?

9. What are your salary expectations?

10. Do you have any questions for us?

====================================

Job Description

${jobDescription}

Additional Requirements

${requirements}
`;

      onGenerated(generated);

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
            Company Name
          </label>

          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Growvelt Technologies"
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

        <div>

          <label className="block text-sm font-semibold">
            Experience Level
          </label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option>Entry Level</option>
            <option>Mid-Level</option>
            <option>Senior</option>
            <option>Lead</option>
            <option>Manager</option>
          </select>

        </div>

        <div>

          <label className="block text-sm font-semibold">
            Interview Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option>Mixed</option>
            <option>Technical</option>
            <option>Behavioural</option>
            <option>Situational</option>
          </select>

        </div>

      </div>

      <div className="mt-6">

        <label className="block text-sm font-semibold">
          Number of Questions
        </label>

        <select
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="mt-2 w-full rounded-xl border p-3"
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>

      </div>

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

      <label className="mt-8 block text-sm font-semibold">
        Additional Requirements (Optional)
      </label>

      <textarea
        rows={5}
        value={requirements}
        onChange={(e) => setRequirements(e.target.value)}
        placeholder="Anything specific you want Growvelt Assistant to focus on..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-8">

        <ActionButton onClick={handleGenerate}>
          Generate Interview Questions
        </ActionButton>

      </div>

    </div>
  );
}