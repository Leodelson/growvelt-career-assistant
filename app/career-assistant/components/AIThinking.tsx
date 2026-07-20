"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";

const steps = [
  "Understanding your work experience...",
  "Extracting your technical and soft skills...",
  "Evaluating ATS compatibility...",
  "Matching your profile with employer expectations...",
  "Generating personalized career recommendations...",
  "Preparing your AI report...",
];

export default function AIThinking() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 900);

    return () => clearInterval(interval);
  }, []);

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-10 shadow-lg">

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-purple-100 p-3">
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Growvelt Career Assistant
          </h2>

          <p className="text-gray-500">
            Reviewing your resume with AI...
          </p>
        </div>

      </div>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-purple-600 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-3 text-sm text-gray-500">
        {Math.round(progress)}% Complete
      </p>

      <div className="mt-10 space-y-5">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-4"
          >

            {index < currentStep ? (

              <CheckCircle2 className="h-6 w-6 text-green-600" />

            ) : index === currentStep ? (

              <Loader2 className="h-6 w-6 animate-spin text-purple-600" />

            ) : (

              <div className="h-6 w-6 rounded-full border-2 border-gray-300" />

            )}

            <span
              className={`text-base ${
                index <= currentStep
                  ? "font-medium text-gray-900"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-10 rounded-2xl bg-purple-50 p-5">

        <p className="text-sm leading-7 text-gray-700">
          <strong>Growvelt Assistant</strong> is reviewing your resume the way many
          employers perform an initial screening—checking experience, ATS
          compatibility, skills, and opportunities to improve your chances of
          landing interviews.
        </p>

      </div>

    </div>
  );
}