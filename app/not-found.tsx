import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-black">404</h1>

      <p className="mt-4 text-muted-foreground">
        Sorry, this page doesn't exist.
      </p>

      <Link
        href="/career-assistant"
        className="mt-8 rounded-xl bg-gradient-primary px-6 py-3 text-white"
      >
        Back Home
      </Link>
    </main>
  );
}