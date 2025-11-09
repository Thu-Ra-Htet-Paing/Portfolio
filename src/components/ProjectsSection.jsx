import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chat App",
    description:
      "A real-time chat application built with the MERN stack and Socket.io for instant messaging.",
    image: "/projects/ChatApp.png",
    tags: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    demoUrl: "https://chat-app-0yae.onrender.com",
    githubUrl: "https://github.com/Thu-Ra-Htet-Paing/Chat-App",
  },
  {
    id: 2,
    title: "Meal Recipes App",
    description:
      "A React app for searching foods and viewing recipes, ingredients, and prices using the Spoonacular API.",
    image: "/projects/MealRecipesApp.png",
    tags: ["React", "SpoonacularAPI"],
    demoUrl: "https://meal-recipes-hub.netlify.app/",
    githubUrl: "https://github.com/Thu-Ra-Htet-Paing/MEAL-API",
  },
  {
    id: 3,
    title: "Thinkboard",
    description:
      "A simple and interactive web app for creating and organizing your ideas on a virtual board.",
    image: "/projects/Thinkboard.png",
    tags: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://mern-thinkboard-68l7.onrender.com",
    githubUrl: "https://github.com/Thu-Ra-Htet-Paing/mern-thinkboard",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, demonstrating my experience across
          front-end, back-end, and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Thu-Ra-Htet-Paing"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
