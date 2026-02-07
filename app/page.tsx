'use client';

export default function Home() {
  return (
    <main>
      <section className="section hero">
        <div className="hero-left">
          <h1 className="hero-name">Kanika<br />Prabhakar</h1>
          <div className="hero-pills">
            <span className="pill undergrad-pill">Comp Sci undergrad</span>
          </div>
          <button 
            className="pill read-more-btn" 
            onClick={() => document.querySelector('.about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            read more
          </button>
        </div>
        <div className="hero-right">
          <img src="/images/p1.JPG" alt="Hero image" className="hero-image" />
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
          <img src="/images/p2.JPG" alt="About image" className="about-image" />
        </div>
      </section>

      <section className="section skills">
        <span className="pill skills-pill">what i do</span>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/images/fs.JPG" alt="Full Stack Development" className="skill-image" />
            <h3 className="skill-title">Full Stack Development</h3>
            <p className="skill-text">
              I build scalable web applications with Next.js, React, Node.js, and Spring Boot. Experienced with REST APIs, SQL, Hibernate ORM, and modern frontend technologies.
            </p>
          </div>
          <div className="skill-card dsa-card">
            <img src="/images/dsa.JPG" alt="Problem Solving DSA" className="skill-image" />
            <h3 className="skill-title">Problem Solving (DSA)</h3>
            <p className="skill-text">
              Strong foundation in Data Structures & Algorithms, System Design Fundamentals, and efficient problem-solving with clean, optimized code.
            </p>
          </div>
          <div className="skill-card comm-card">
            <img src="/images/debate.JPG" alt="Communication & Leadership" className="skill-image" />
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
          <div className="project-card">
            <img src="/images/evalora.JPG" alt="Evalora" className="project-image" style={{objectFit: 'cover', height: '100%'}} />
            <span className="project-label">Evalora</span>
            <div style={{display: 'flex', gap: '8px', marginTop: '8px', marginLeft: '16px'}}>
              <a href="https://github.com/kanikaprabhakar/Online-Exam-App" target="_blank" rel="noreferrer" style={{fontSize: '14px', textDecoration: 'underline'}}>GitHub</a>
              <a href="https://evalora.up.railway.app/" target="_blank" rel="noreferrer" style={{fontSize: '14px', textDecoration: 'underline'}}>Live</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/images/wamg.png" alt="WAMG" className="project-image" />
            <span className="project-label">Wireless Assistive Messaging Glove</span>
          </div>
          <div className="project-card">
            <img src="/images/java.png" alt="Java - SpringBoot" className="project-image" />
            <span className="project-label">Java - SpringBoot</span>
          </div>
          <div className="project-card">
            <img src="/images/fs-2.png" alt="Full Stack Dev" className="project-image" />
            <span className="project-label">Full Stack Dev</span>
          </div>
          <div className="project-card">
            <img src="/images/db.png" alt="Databases & ORM" className="project-image" />
            <span className="project-label">Databases & ORM</span>
          </div>
          <div className="project-card">
            <img src="/images/aws.png" alt="AWS Cloud" className="project-image" />
            <span className="project-label">AWS Cloud</span>
          </div>
        </div>
      </section>

      <section className="section now">        <img src="/images/p3.JPG" alt="Current work" className="now-image" />        <div className="now-header">
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
            <a href="/contact-form" className="pill note-btn">
              send me a note
            </a>
            <div className="socials">
              <a className="social-dot" href="https://www.linkedin.com/in/kanika-prabhakar-4899942a8/" target="_blank" rel="noreferrer">
                in
              </a>
              <a className="social-dot" href="https://github.com/kanikaprabhakar" target="_blank" rel="noreferrer">
                gh
              </a>
              <a className="social-dot" href="https://leetcode.com/u/qQDuXeOdiy/" target="_blank" rel="noreferrer">
                lc
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <img src="/images/p4.JPG" alt="Contact image" className="contact-image" />
        </div>
      </section>
    </main>
  );
}
