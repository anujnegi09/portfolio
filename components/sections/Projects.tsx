export default function Projects() {
  const projects = [
    {
      title: "Fixora",
      description:
        "A full-stack local services marketplace where users can discover, book, and create services.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/anujnegi09/Fixora",
      live: "https://fixora-xxyt.onrender.com",
    },
    {
      title: "Shortlist",
      description:
        "A community ideas platform built with Next.js and Firebase where users can create, explore, and vote on ideas.",
      tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "https://shortlist-five-eta.vercel.app/",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application with authentication, messaging, and image sharing.",
      tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-15 w-full bg-background text-foreground px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Some of the projects I have built while learning and working
            with modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
            >
              {/* Project title */}
              <h3 className="text-2xl font-semibold text-white group-hover:text-violet-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-violet-400"
                >
                  GitHub →
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-violet-400"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}