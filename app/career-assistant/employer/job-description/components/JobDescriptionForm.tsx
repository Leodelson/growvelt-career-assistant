"use client";

import { useState } from "react";

import AIThinking from "../../../components/AIThinking";
import ActionButton from "../../../components/ActionButton";

type Props = {
  onGenerated: (result: string) => void;
};

export default function JobDescriptionForm({
  onGenerated,
}: Props) {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [experienceLevel, setExperienceLevel] = useState("Mid-Level");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [skills, setSkills] = useState("");
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
JOB TITLE
${jobTitle}

COMPANY
${companyName}

LOCATION
${location}

EMPLOYMENT TYPE
${employmentType}

EXPERIENCE LEVEL
${experienceLevel}

SALARY
${salary || "Competitive"}

ABOUT THE ROLE

We are looking for a highly motivated ${jobTitle} to join our growing team.

KEY RESPONSIBILITIES

${responsibilities}

REQUIRED SKILLS

${skills}

WHY JOIN US

• Competitive salary
• Growth opportunities
• Collaborative culture
• Flexible work environment

Apply today and become part of our amazing team.
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
            type="text"
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
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Data Analyst"
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="block text-sm font-semibold">
            Employment Type
          </label>

          <select
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Experience Level
          </label>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option>Entry Level</option>
            <option>Mid-Level</option>
            <option>Senior</option>
            <option>Lead</option>
            <option>Manager</option>
          </select>
        </div>

      </div>

      <label className="mt-8 block text-sm font-semibold">
        Location
      </label>

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Abuja, Nigeria"
        className="mt-2 w-full rounded-xl border p-3"
      />

      <label className="mt-8 block text-sm font-semibold">
        Salary (Optional)
      </label>

      <input
        type="text"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="$60,000 - $80,000"
        className="mt-2 w-full rounded-xl border p-3"
      />

      <label className="mt-8 block text-sm font-semibold">
        Key Responsibilities
      </label>

      <textarea
        rows={8}
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
        placeholder="Describe the key responsibilities for this role..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <label className="mt-8 block text-sm font-semibold">
        Required Skills
      </label>

      <textarea
        rows={8}
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="SQL, Power BI, Excel, Python..."
        className="mt-2 w-full rounded-xl border p-4"
      />

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          Separate skills with commas for better AI-generated results.
        </p>
      </div>

      <div className="mt-8">
        <ActionButton onClick={handleGenerate}>
          Generate Job Description
        </ActionButton>
      </div>

    </div>
  );
}