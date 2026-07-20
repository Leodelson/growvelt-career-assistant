"use client";

import { useState } from "react";
import ActionButton from "../../../components/ActionButton";
import InterviewResult from "./InterviewResult";

const questions = [
  "Tell me about yourself.",
  "Why do you want this position?",
  "Describe a challenging project you've worked on.",
  "How do you handle tight deadlines?",
  "Why should we hire you?",
];

export default function InterviewSession() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswer("");
    } else {
  setCompleted(true);
}
  }

  if (completed) {
  return (
    <InterviewResult
      onPracticeAgain={() => {
        setCompleted(false);
        setCurrentQuestion(0);
        setAnswer("");
      }}
    />
  );
}

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Interview Question
        </h2>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          Question {currentQuestion + 1} of {questions.length}
        </span>

      </div>

      {/* Progress Bar */}

      <div className="mb-8 h-2 w-full rounded-full bg-gray-200">

        <div
          className="h-2 rounded-full bg-purple-600 transition-all duration-500"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />

      </div>

      {/* Question */}

      <div className="rounded-2xl bg-purple-50 p-6">

        <p className="text-xl font-semibold">
          {questions[currentQuestion]}
        </p>

      </div>

      {/* Answer */}

      <textarea
        rows={8}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="mt-8 w-full rounded-2xl border p-4"
      />

      <div className="mt-8">

        <ActionButton onClick={handleNext}>
          {currentQuestion === questions.length - 1
            ? "Finish Interview"
            : "Next Question"}
        </ActionButton>

      </div>

    </div>
  );
}