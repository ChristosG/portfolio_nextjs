// src/data/projects.ts

export interface Project {
    slug: string;
    title: string;
    category: string;
    layout: Array<{ 
      type: "text" | "image";
      content?: string;
      src?: string;
    }>;
  }
  
  const projects: Project[] = [
    {
      slug: "epic-fantasy",
      title: "Epic Fantasy Board Game Art",
      category: "board-game",
      layout: [
        {
          type: "image",
          src: "/images/fantasy.jpg",
        },
        {
          type: "text",
          content: "Immersive fantasy characters & environments for a tabletop RPG.",
        },
      ],
    },
    {
      slug: "scifi-interface",
      title: "Sci-Fi Game Interface",
      category: "ux-ui",
      layout: [
        {
          type: "image",
          src: "/images/fantasy.jpg",
        },
        {
          type: "text",
          content: "Futuristic UI designs for a space exploration game.",
        },
      ],
    },
    {
      slug: "cartoon-characters",
      title: "Cartoon Character Illustrations",
      category: "illustration",
      layout: [
        {
          type: "image",
          src: "/images/fantasy.jpg",
        },
        {
          type: "text",
          content: "Playful, vibrant illustrations for a kids’ board game.",
        },
      ],
    },
    {
      slug: "cyberpunk-poster",
      title: "Cyberpunk Poster Art",
      category: "illustration",
      layout: [
        {
          type: "image",
          src: "/images/fantasy.jpg",
        },
        {
          type: "text",
          content: "High-contrast, neon-lit illustrations inspired by cyberpunk vibes.",
        },
      ],
    },
  ];
  
  export default projects;
  