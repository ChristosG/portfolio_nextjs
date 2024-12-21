import projects from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params as it's a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Find the project based on the slug
  const project = projects.find((p) => p.slug === slug);

  // If no project is found, render a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
      <h1 className="text-4xl font-extrabold text-lime-400 mb-4">
        {project.title}
      </h1>
      {project.layout.map((block, i) => {
        if (block.type === "text") {
          return (
            <div key={i} className="my-4">
              <p className="text-gray-300 whitespace-pre-line">
                {block.content}
              </p>
            </div>
          );
        } else if (block.type === "image") {
          return (
            <div key={i} className="my-4 relative w-full h-64">
              <Image
                src={block.src || "/images/placeholder.jpg"}
                alt="block image"
                fill
                className="object-cover rounded"
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
