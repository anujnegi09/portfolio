export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.IO",
        "JWT Authentication",
      ],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "MongoDB Atlas",
        "Firebase",
        "Firestore",
        "SQL",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Docker",
        "AWS",
        "Vercel",
        "Render",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-15 w-full bg-background text-foreground px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to build modern, responsive,
            and scalable web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-violet-500/50"
            >
              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-violet-500 hover:text-violet-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}