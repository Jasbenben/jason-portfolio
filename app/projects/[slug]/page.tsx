import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs, getAdjacentProjects } from "@/types/project";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} · Jason Bennet`,
    description: project.information[0].substring(0, 160),
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(params.slug);

  return (
    <div className="min-h-screen bg-bg-main">
      {/* Header / Navigation */}
      <header className="sticky top-0 bg-bg-main z-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Home button */}
          <div className="w-20">
            <Link
              href="/#projects"
              className="text-xs md:text-sm text-text-secondary hover:text-text-primary transition-all flex items-center gap-1"
            >
              <span>⌂</span>
              <span>Home</span>
            </Link>
          </div>

          {/* Center: Name */}
          <div className="text-center">
            <h1 className="text-sm md:text-base font-medium text-text-primary uppercase tracking-[0.2em]">
              Jason Bennet
            </h1>
          </div>

          {/* Right: Empty spacer for centering */}
          <div className="w-20"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 mt-12 mb-16">
        {/* Card Container */}
        <article className="bg-bg-card rounded-2xl border border-border p-5 md:p-8 shadow-2xl shadow-black/20">
          {/* Hero Image */}
          <div className="mb-8">
            <div className="relative w-full h-72 md:h-80 rounded-xl border border-border overflow-hidden bg-black/40">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Project Title + Meta */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4 font-heading">
              {project.title}
            </h2>
            <div className="text-xs tracking-[0.2em] uppercase text-text-meta-label">
              <span className="text-text-meta-label">ROLE:</span>{" "}
              <span className="text-text-meta-value">{project.role}</span>
              {" · "}
              <span className="text-text-meta-label">YEAR:</span>{" "}
              <span className="text-text-meta-value">{project.year}</span>
              {" · "}
              {project.category ? (
                <>
                  <span className="text-text-meta-label">CATEGORY:</span>{" "}
                  <span className="text-text-meta-value">{project.category}</span>
                </>
              ) : project.network ? (
                <>
                  <span className="text-text-meta-label">NETWORK:</span>{" "}
                  <span className="text-text-meta-value">{project.network}</span>
                </>
              ) : (
                <>
                  <span className="text-text-meta-label">TYPE:</span>{" "}
                  <span className="text-text-meta-value">{project.type}</span>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-10"></div>

          {/* Information Section */}
          <section className="mb-8">
            <h3 className="text-sm uppercase tracking-wide text-text-meta-label mb-4">
              Information
            </h3>
            <div className="space-y-4">
              {project.information.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-text-body text-sm md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Credits Section */}
          <section className="mt-8">
            <h3 className="text-sm uppercase tracking-wide text-text-meta-label mb-4">
              Credits
            </h3>
            <div className="space-y-2">
              {project.credits.map((credit, index) => (
                <div
                  key={index}
                  className="text-sm text-text-body flex items-start"
                >
                  <span className="flex-shrink-0 mr-2">
                    {credit.role} →
                  </span>
                  <span className="text-text-meta-value">{credit.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          {project.links && project.links.length > 0 ? (
            <section className="mt-8">
              <h3 className="text-sm uppercase tracking-wide text-text-meta-label mb-4">
                Links
              </h3>
              <div className="space-y-2">
                {project.links.map((link, index) => (
                  <div
                    key={index}
                    className="text-sm text-text-body flex items-start"
                  >
                    <span className="flex-shrink-0 mr-2">
                      {link.label} →
                    </span>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-meta-value hover:text-text-primary hover:underline transition-colors"
                    >
                      {link.url}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="mt-8">
              {project.type?.includes("ARCHIVED") ? (
                <p className="text-sm text-text-meta-label italic">
                  This prototype has been archived and is no longer live.
                </p>
              ) : project.type?.includes("PERSONAL") ? (
                <p className="text-sm text-text-meta-label italic">
                  This project was for personal experimentation and was never publicly released.
                </p>
              ) : null}
            </section>
          )}

          {/* Project Navigation */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-between gap-4">
              {/* Previous Project */}
              {previous ? (
                <Link
                  href={`/projects/${previous.slug}`}
                  className="flex items-center gap-2 text-xs md:text-sm text-text-secondary hover:text-text-primary transition-all group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <div className="text-left">
                    <div className="uppercase tracking-wider text-[10px] text-text-meta-label">Previous</div>
                    <div className="font-medium">{previous.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-2 text-xs md:text-sm text-text-meta-label/40 opacity-50 cursor-not-allowed">
                  <span>←</span>
                  <div className="text-left">
                    <div className="uppercase tracking-wider text-[10px]">Previous</div>
                    <div className="font-medium">N/A</div>
                  </div>
                </div>
              )}

              {/* Next Project */}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="flex items-center gap-2 text-xs md:text-sm text-text-secondary hover:text-text-primary transition-all group"
                >
                  <div className="text-right">
                    <div className="uppercase tracking-wider text-[10px] text-text-meta-label">Next</div>
                    <div className="font-medium">{next.title}</div>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ) : (
                <Link
                  href="/#projects"
                  className="flex items-center gap-2 text-xs md:text-sm text-text-secondary hover:text-text-primary transition-all group"
                >
                  <div className="text-right">
                    <div className="uppercase tracking-wider text-[10px] text-text-meta-label">End of Portfolio</div>
                    <div className="font-medium">Back to Home</div>
                  </div>
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

