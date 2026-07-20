import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    companyName,
    jobTitle,
  } = await request.json();

  return NextResponse.json({
    success: true,

    coverLetter: `Dear Hiring Manager,

I am excited to apply for the ${jobTitle} position at ${companyName}.

Based on my background and experience, I believe I can contribute positively to your team. My analytical skills, problem-solving ability, and commitment to continuous learning make me a strong candidate for this opportunity.

I am passionate about delivering quality work and would welcome the opportunity to discuss how my skills align with your organization's goals.

Thank you for your time and consideration.

Sincerely,

Your Name`,
  });
}