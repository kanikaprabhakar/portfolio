export default function Home() {
  return (
    <main>
      <section className="section hero">
        <div className="hero-left">
          <h1 className="hero-name">Kanika<br />Prabhakar</h1>
          <div className="hero-pills">
            <span className="pill">Comp Sci undergrad</span>
            <span className="pill">read more</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="tile black" />
          <div className="tile cream" />
          <div className="tile pink" />
          <div className="tile cream" />
        </div>
      </section>

      <section className="section about">
        <div className="about-text">
          <p>
            Hello! I’m Kanika!
          </p>
          <p>
            I’m a CSE undergrad based in Chandigarh. I’m passionate about building meaningful
            digital experiences through web development and exploring how technology shapes the
            way we communicate. Alongside coding, I’m part of the core team of my university’s
            debating society, where I work as the Social Media Manager, combining creativity and
            strategy to spark conversations that matter.
          </p>

          <p>
            When I’m not working (or debugging), you’ll probably find me keeping up with what’s
            happening around the world, connecting it back to how stories unfold online, or
            sharpening my public speaking through debating.
          </p>
        </div>
        <div className="about-right">
          <div className="image-placeholder" />
          <div className="small-tiles">
            <div className="tile pink" />
            <div className="tile cream" />
          </div>
        </div>
      </section>

      <section className="section skills">
        <span className="pill">what i do</span>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-image" />
            <h3 className="skill-title">Full Stack Development</h3>
            <p className="skill-text">
              I build responsive web apps with Next.js, Node.js, and Spring Boot, focusing on
              clean UI and strong backend systems.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-image" />
            <h3 className="skill-title">Problem Solving (DSA)</h3>
            <p className="skill-text">
              I enjoy solving DSA challenges to sharpen my logic and write efficient, structured
              code.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-image" />
            <h3 className="skill-title">Communication & Leadership</h3>
            <p className="skill-text">
              As Social Media Manager and a core debating society member, I combine creativity,
              teamwork, and public speaking.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects">
        <span className="pill">what i’ve done</span>
        <div className="projects-grid">
          {[
            "Online Exam App",
            "Wireless Assistive Messaging Glove",
            "Ads",
            "Videos",
            "Translation Work",
            "Songs",
          ].map((title) => (
            <div key={title} className="project-card">
              <div className="project-image" />
              <span className="project-label">{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section now">
        <div className="now-header">
          <span className="pill">what i’m doing right now</span>
        </div>
        <div className="now-grid">
          <div>
            <h3 className="now-title">Agile Development</h3>
            <p className="now-text">
              I’m actively working on agile-based software projects, learning how real teams
              collaborate through sprints, task breakdown, and continuous improvement. I enjoy
              the fast-paced workflow of building, testing, and iterating on features that
              actually solve problems.
            </p>
          </div>
          <div>
            <h3 className="now-title">Backend + System Design</h3>
            <p className="now-text">
              I’m strengthening my backend development skills with Spring Boot, while also
              exploring how scalable systems are structured. From REST APIs and authentication
              architectures to microservices, I love understanding what happens behind the
              scenes of modern applications.
            </p>
          </div>
          <div>
            <h3 className="now-title">DSA + Cloud</h3>
            <p className="now-text">
              Alongside development, I consistently practice data structures and algorithms to
              sharpen my problem-solving mindset. I’m also building my foundation in cloud
              technologies like AWS, exploring how applications are deployed, scaled, and managed
              in real-world environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="contact-left">
          <h2>get in touch</h2>
          <div className="contact-details">
            <span className="pill">Chitkara University, Punjab</span>
            <span className="pill">kanikaprabhakar<span className="no-watermark">2005</span>@gmail.com</span>
            <div className="socials">
              <span className="social-dot">t</span>
              <span className="social-dot">ig</span>
              <span className="social-dot">f</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="corner-tile" />
          <div className="corner-tile black" />
          <div className="corner-tile pink" />
          <div className="corner-tile" />
        </div>
      </section>
    </main>
  );
}
