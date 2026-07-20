import type { NextConfig } from "next";

const coursesBaseUrl = "https://www.courses.growvelt.com";

const coursePageRedirects = [
  ["index.html", ""],
  ["courses", "courses.html"],
  ["courses.html", "courses.html"],
  ["about", "aboutus.html"],
  ["aboutus", "aboutus.html"],
  ["aboutus.html", "aboutus.html"],
  ["reviews", "reviews.html"],
  ["reviews.html", "reviews.html"],
  ["partnerwithus", "partnerwithus.html"],
  ["partnerwithus.html", "partnerwithus.html"],
  ["contact", "contact.html"],
  ["contact.html", "contact.html"],
  ["registration", "registration.html"],
  ["registration.html", "registration.html"],
  ["verification", "verification.html"],
  ["verification.html", "verification.html"],
  ["blog", "blog.html"],
  ["blog.html", "blog.html"],
  ["privacy-policy", "privacy-policy.html"],
  ["privacy-policy.html", "privacy-policy.html"],
  ["terms-of-service", "terms-of-service.html"],
  ["terms-of-service.html", "terms-of-service.html"],
  ["how-to-stand-out-as-a-data-analyst-2025", "how-to-stand-out-as-a-data-analyst-2025.html"],
  ["how-to-stand-out-as-a-data-analyst-2025.html", "how-to-stand-out-as-a-data-analyst-2025.html"],
  ["data-analyst-career-path", "data-analyst-career-path.html"],
  ["data-analyst-career-path.html", "data-analyst-career-path.html"],
  ["top-5-data-analytics-trends-2025", "top-5-data-analytics-trends-2025.html"],
  ["top-5-data-analytics-trends-2025.html", "top-5-data-analytics-trends-2025.html"],
  ["SQL-Tricks-Every-Analyst-Must-Know", "SQL-Tricks-Every-Analyst-Must-Know.html"],
  ["SQL-Tricks-Every-Analyst-Must-Know.html", "SQL-Tricks-Every-Analyst-Must-Know.html"],
  ["break_into_Data_Analytics", "break_into_Data_Analytics.html"],
  ["break_into_Data_Analytics.html", "break_into_Data_Analytics.html"],
  ["blog-powerbi-vs-tableau", "blog-powerbi-vs-tableau.html"],
  ["blog-powerbi-vs-tableau.html", "blog-powerbi-vs-tableau.html"],
  ["The%20Future%20of%20Data%20Analytics.html", "The%20Future%20of%20Data%20Analytics.html"],
  ["paystack-callback.html", "paystack-callback.html"],
];

const nextConfig: NextConfig = {
  turbopack: {},
  async redirects() {
    return [
      ...coursePageRedirects.map(([source, destination]) => ({
        source: `/${source}`,
        destination: destination ? `${coursesBaseUrl}/${destination}` : `${coursesBaseUrl}/`,
        permanent: true,
      })),
      {
        source: "/jobs.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
