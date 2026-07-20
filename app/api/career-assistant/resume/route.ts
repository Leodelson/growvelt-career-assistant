import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { resume, jobDescription } = body;

    // Temporary mock response
    return NextResponse.json({
      success: true,
      analysis: {
        score: 87,
        atsScore: 91,

        strengths: [
          "Strong SQL and Power BI experience",
          "Well-structured resume",
          "Relevant portfolio projects",
        ],

        missingSkills: [
          "Azure",
          "Data Warehousing",
          "Advanced Python",
        ],

        recommendations: [
          "Add more measurable achievements.",
          "Improve the professional summary.",
          "Include additional ATS keywords.",
        ],

        summary:
          "Your resume demonstrates strong analytical skills and relevant project experience. Adding more quantified achievements and industry-specific keywords will improve your ATS performance."
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to analyze resume.",
      },
      { status: 500 }
    );
  }
}