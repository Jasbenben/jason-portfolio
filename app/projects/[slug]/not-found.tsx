import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
          404
        </h1>
        <p className="text-text-secondary mb-8">
          Project not found. It may have been removed or the link is incorrect.
        </p>
        <Link
          href="/"
          className="inline-block border border-text-primary text-text-primary px-6 py-3 text-sm uppercase tracking-wider hover:bg-text-primary hover:text-bg-main transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

