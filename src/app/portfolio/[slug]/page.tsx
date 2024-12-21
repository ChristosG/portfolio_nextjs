// src/app/portfolio/[slug]/page.tsx

import { notFound } from "next/navigation";

// We'll just re-use the data from the main page for demonstration.
// In a real app, you might store this in a separate file or database.
const allProjects: Project[] = [
    {
      title: "Epic Fantasy Board Game Art",
      slug: "epic-fantasy",
      category: "board-game",
      image: "/images/fantasy-board-game.jpg",
      description: "Immersive fantasy characters & environments for a tabletop RPG.",
    },
    {
      title: "Sci-Fi Game Interface",
      slug: "scifi-interface",
      category: "ux-ui",
      image: "/images/scifi-ui.jpg",
      description: "Futuristic UI designs for a space exploration video game.",
    },
    {
      title: "Cartoon Character Illustrations",
      slug: "cartoon-characters",
      category: "illustration",
      image: "/images/cartoon-illustrations.jpg",
      description: "Playful, vibrant illustrations for a kids’ board game.",
    },
    {
      title: "Dungeon Crawler Concept",
      slug: "dungeon-crawler",
      category: "board-game",
      image: "/images/dungeon-crawler.jpg",
      description: "Dark, gritty board game design for deep dungeon quests.",
    },
    {
      title: "Minimalist Mobile UI",
      slug: "minimalist-mobile",
      category: "ux-ui",
      image: "/images/minimalist-mobile-ui.jpg",
      description: "Sleek, user-friendly interface for iOS and Android devices.",
    },
    {
      title: "Cyberpunk Poster Art",
      slug: "cyberpunk-poster",
      category: "illustration",
      image: "/images/cyberpunk-art.jpg",
      description: "High-contrast, neon-lit illustrations inspired by cyberpunk vibes.",
    },
    // ...add as many as you like!
  ];
  
export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
      <h1 className="text-4xl font-extrabold text-lime-400 mb-4">
        {project?.title}
      </h1>
      <img
        src={project?.image}
        alt={project?.title}
        className="w-full max-w-4xl mb-6 rounded-lg"
      />
      <p className="text-lg text-gray-300 mb-8">{project?.description}</p>

      {/* Extra details, maybe a carousel, paragraphs about the project, etc. */}
    </div>
  );
}
