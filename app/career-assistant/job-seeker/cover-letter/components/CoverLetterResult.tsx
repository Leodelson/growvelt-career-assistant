"use client";

import { useState, type MouseEvent } from "react";
import {
  CheckCircle2,
  Copy,
  Check,
  Download,
  RotateCcw,
} from "lucide-react";
import NextActions from "../../cover-letter/components/NextActions";

type CoverLetterResultProps = {
  coverLetter: string;
  onGenerateAnother: () => void;
};

export default function CoverLetterResult({
  coverLetter,
  onGenerateAnother,
}: CoverLetterResultProps) {
  const [copied, setCopied] = useState(false);

  if (!coverLetter) return null;

  async function handleCopy() {
    await navigator.clipboard.writeText(coverLetter);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleDownloadPDF(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    const escapedLines = coverLetter
      .split("\n")
      .map((line) =>
        line
          .replace(/\\/g, "\\\\")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
      );

    const wrappedLines = escapedLines.flatMap((line) => {
      const maxCharsPerLine = 90;
      const words = line.split(" ");
      const lines: string[] = [];
      let currentLine = "";

      words.forEach((word) => {
        const nextLine = currentLine ? `${currentLine} ${word}` : word;
        if (nextLine.length > maxCharsPerLine && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = nextLine;
        }
      });

      if (currentLine) lines.push(currentLine);
      if (lines.length === 0) lines.push("");

      return lines;
    });

    const content = `BT\n/F1 12 Tf\n50 742 Td\n${wrappedLines
      .map((line) => `(${line}) Tj`)
      .join("\n0 -14 Td\n")}\nET\n`;

    const pdfObjects = [
      `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`,
      `2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] /MediaBox [0 0 612 792] >>\nendobj\n`,
      `3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`,
      `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`,
      `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`,
    ];

    let pdf = "%PDF-1.3\n";
    const offsets: number[] = [];
    let position = pdf.length;

    pdfObjects.forEach((object) => {
      offsets.push(position);
      pdf += object;
      position = pdf.length;
    });

    const xrefStart = position;
    pdf += `xref\n0 ${pdfObjects.length + 1}\n0000000000 65535 f \n`;
    offsets.forEach((offset) => {
      pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
    });
    pdf += `trailer\n<< /Size ${pdfObjects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    const blob = new Blob([pdf], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cover-letter.pdf";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      {/* Success Banner */}

      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5">

        <CheckCircle2 className="h-8 w-8 text-green-600" />

        <div>

          <h2 className="text-xl font-bold text-green-700">
            Cover Letter Generated Successfully
          </h2>

          <p className="text-sm text-green-700">
            Your personalized cover letter is ready.
          </p>

        </div>

      </div>

      {/* Heading */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">


          <h2 className="text-3xl font-bold">
            Growvelt Cover Letter
          </h2>

        </div>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-100"
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>

          <button
  onClick={handleDownloadPDF}
  className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
>
            <Download size={18} />

            PDF
          </button>

          <button
            onClick={onGenerateAnother}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-gray-100"
          >
            <RotateCcw size={18} />

            Generate Another
          </button>

        </div>

      </div>

      {/* Letter */}

      <div className="mt-10 rounded-2xl bg-gray-50 p-8">

        <pre className="whitespace-pre-wrap font-sans leading-8 text-gray-700">
          {coverLetter}
        </pre>

      </div>

      <NextActions />

    </div>
  );
}