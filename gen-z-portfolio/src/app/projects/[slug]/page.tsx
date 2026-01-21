import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/lib/projects";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Anil Magar`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Anil Magar`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <ProjectDetail
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
