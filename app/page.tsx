const experiences = [
  {
    company: "Amazon",
    role: "Software Engineer Intern",
    period: "Jan — Jun 2026",
    summary:
      "Built automation for cloud fleet ownership audits, migrated internal microservices across AWS regions, and resolved 72 production tickets across 10+ services.",
    tags: ["Python", "AWS", "REST APIs", "Automation"],
  },
  {
    company: "IIFL",
    role: "Software Engineer Intern",
    period: "May — Jul 2025",
    summary:
      "Developed and validated Flask APIs backed by MySQL, with reliable CRUD workflows tested across 15+ cases.",
    tags: ["Flask", "MySQL", "SQLAlchemy", "Postman"],
  },
  {
    company: "DRDO",
    role: "Software Engineer Intern",
    period: "Jun — Jul 2024",
    summary:
      "Designed a geospatial platform and applied machine learning to satellite imagery for terrain and land-cover analysis.",
    tags: ["Machine Learning", "PostgreSQL", "Geospatial"],
  },
];

const projects = [
  {
    number: "01",
    title: "Document Summarizer & Q&A",
    text: "A Flask-based intelligent document system that processes PDFs, preserves sessions, and answers natural-language questions with approximately 80% accuracy.",
    metric: "50+ PDFs",
    tags: ["Flask", "NLP", "REST APIs"],
  },
  {
    number: "02",
    title: "Crop Price Prediction",
    text: "An ensemble ML pipeline combining agricultural datasets and engineered features to surface seasonal and regional price patterns.",
    metric: "0.98 R²",
    tags: ["XGBoost", "Scikit-learn", "Data"],
  },
  {
    number: "03",
    title: "Gesture Volume Control",
    text: "A real-time, contactless interface that translates two-hand gestures into intuitive system volume controls.",
    metric: "Real time",
    tags: ["OpenCV", "Computer Vision", "MediaPipe"],
  },
];

const skills = [
  ["Languages", "Python · C++ · Java · JavaScript"],
  ["AI & Data", "Scikit-learn · XGBoost · NumPy · OpenCV"],
  ["Backend", "Flask · Node.js · REST APIs · SQLAlchemy"],
  ["Cloud & Tools", "AWS · Git · GitHub Actions · Postman"],
  ["Databases", "MySQL · PostgreSQL"],
  ["Foundations", "DSA · OOP · DBMS · OS · Networks"],
];

const achievements = [
  ["Dean’s List", "Academic Excellence · Semester 8"],
  ["SBI Scholar", "Selected from 500 students"],
  ["National Semi-Finalist", "Flipkart GRiD 7.0 · 2025"],
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Aanshi Soni home">AS<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk <span>↓</span></a>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Available for full-time opportunities</p>
          <h1>Software engineer<br />building <em>AI-powered</em><br />tools.</h1>
          <p className="hero-text">I turn ideas into practical internal tools, reliable backend systems, and intelligent applications that simplify real-world workflows.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <span>↓</span></a>
            <a className="button secondary" href="#contact">Get in touch <span>↓</span></a>
          </div>
          <div className="mini-proof">
            <div><strong>3</strong><span>Engineering<br />internships</span></div>
            <div><strong>8.65</strong><span>Academic<br />CGPA</span></div>
            <div><strong>72</strong><span>Production tickets<br />resolved</span></div>
          </div>
        </div>
        <div className="portrait-wrap reveal delay">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-card">
            <img src="/aanshi-ai-portrait.jpg" alt="AI illustrated portrait of Aanshi Soni" />
            <div className="portrait-label"><span>AI × Engineering</span><small>Ideas → Useful tools</small></div>
          </div>
          <div className="float-chip chip-one">Python</div>
          <div className="float-chip chip-two">AWS</div>
          <div className="float-chip chip-three">ML</div>
        </div>
      </section>

      <div className="stack-strip" aria-label="Core technology stack">
        <div className="stack-track">
          {['PYTHON','AWS','FLASK','MACHINE LEARNING','REST APIs','POSTGRESQL','AUTOMATION','REACT'].map((item) => <span key={item}>{item}<b>✦</b></span>)}
        </div>
      </div>

      <section className="about section container" id="about">
        <p className="section-label">01 / About</p>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
          <div className="about-copy">
            <p>I&apos;m a Computer Science student at Manipal University Jaipur, specialising in Computational Intelligence. I enjoy working where software engineering, automation, and AI meet.</p>
            <p>From cloud reliability at Amazon to document intelligence and machine learning projects, I focus on making complex systems clearer, faster, and genuinely useful.</p>
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-head">
          <div><p className="section-label">02 / Experience</p><h2>Learning by shipping.</h2></div>
          <p>Building across cloud infrastructure, backend systems, automation, and applied machine learning.</p>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="experience" key={item.company}>
              <div className="exp-index">0{index + 1}</div>
              <div><h3>{item.company}</h3><p className="role">{item.role}</p></div>
              <p className="exp-summary">{item.summary}</p>
              <div className="exp-meta"><span>{item.period}</span><div className="tags">{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-head">
            <div><p className="section-label">03 / Selected work</p><h2>Ideas made tangible.</h2></div>
            <p>Projects that combine thoughtful problem-solving with practical, working technology.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span>{project.number}</span><strong>{project.metric}</strong></div>
                <div className={`project-visual visual-${project.number}`} aria-hidden="true">
                  <span>{project.number === '01' ? 'DOC → AI' : project.number === '02' ? 'DATA ↗' : 'GESTURE ◌'}</span>
                  <i /><i /><i />
                </div>
                <h3>{project.title}</h3><p>{project.text}</p>
                <div className="tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="skills">
        <div className="section-head"><div><p className="section-label">04 / Toolkit</p><h2>What I build with.</h2></div></div>
        <div className="skills-grid">{skills.map(([title, list]) => <div className="skill-row" key={title}><span>{title}</span><p>{list}</p></div>)}</div>
      </section>

      <section className="section container achievements">
        <p className="section-label">05 / Highlights</p>
        <div className="achievement-grid">{achievements.map(([title, detail], i) => <article key={title}><span>✦ 0{i + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="education container">
        <div><p className="section-label">Education</p><h2>Manipal University Jaipur</h2><p>B.Tech in Computer Science & Engineering<br />Minor in Computational Intelligence</p></div>
        <div className="education-meta"><strong>2022 — 2026</strong><span>Jaipur, India</span><span>CGPA 8.65 / 10</span></div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-inner">
          <p className="section-label">06 / Contact</p>
          <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
          <p className="contact-note">I&apos;m currently open to full-time software engineering and AI tooling opportunities. The fastest way to reach me is by email.</p>
          <a className="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=aanshi18apr@gmail.com" target="_blank" rel="noreferrer">aanshi18apr@gmail.com <span>↗</span></a>
          <div className="contact-cards">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aanshi18apr@gmail.com" target="_blank" rel="noreferrer"><small>Email</small><strong>Send a message</strong><span>↗</span></a>
            <a href="https://www.linkedin.com/in/aanshisoni2004/" target="_blank" rel="noreferrer"><small>LinkedIn</small><strong>Let&apos;s connect</strong><span>↗</span></a>
            <a href="https://github.com/aanshisoni1804" target="_blank" rel="noreferrer"><small>GitHub</small><strong>Explore my code</strong><span>↗</span></a>
          </div>
          <div className="footer-bottom"><span>© 2026 Aanshi Soni</span><div><a href="https://www.linkedin.com/in/aanshisoni2004/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/aanshisoni1804" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
        </div>
      </footer>
    </main>
  );
}
