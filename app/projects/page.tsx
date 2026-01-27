export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Medium Clone",
      description: "A full-stack blogging platform inspired by Medium. Features include user authentication, rich text editor, blog creation and management, and responsive design. Built with modern web technologies for optimal performance.",
      tech: ["React", "Cloudflare Workers", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
      github: "https://github.com/adityashankar0103",
      demo: "#"
    },
    {
      id: 2,
      title: "Paytm Clone",
      description: "A comprehensive digital wallet application replicating core Paytm functionalities. Implements secure transactions, user authentication, wallet management, and transaction history with a clean, intuitive interface.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/adityashankar0103",
      demo: "#"
    },
    {
      id: 3,
      title: "AnonySend",
      description: "An anonymous messaging platform built with Next.js that allows users to send and receive anonymous messages securely. Features include message moderation, user dashboard, and real-time updates.",
      tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
      github: "https://github.com/adityashankar0103",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">
            Here are some of the full-stack applications I've built, showcasing my skills in modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  View Code →
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
