import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="text-blue-400 text-lg">Hi, my name is</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Kanika Prabhakar
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
            Full Stack Developer & CSE Student
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            I'm a Computer Science Engineering student at Chitkara University, passionate about 
            building innovative web applications and solving complex problems. Experienced 
            in full-stack development with a strong foundation in DSA and modern web technologies.
          </p>
          <Link 
            href="/projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition"
          >
            View My Work
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                I'm currently pursuing my Bachelor's degree in Computer Science and 
                Engineering at Chitkara University. I specialize in full-stack development and have 
                hands-on experience building scalable web applications using modern technologies.
              </p>
              <p className="text-gray-400 mb-4">
                With a strong foundation in Data Structures & Algorithms (solved 600+ problems) 
                and experience in technologies like React, Next.js, Node.js, and MongoDB, I'm 
                passionate about creating efficient and user-friendly solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Git', 'DSA'].map((skill) => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-gray-400 mb-8">
            I'm currently looking for internship opportunities and collaborations
          </p>
          <Link 
            href="/contact"
            className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium px-8 py-3 rounded-lg transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
