import './App.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Other Projects', href: '#other-projects' },
  { label: 'Contact', href: '#contact' },
]

const highlights = [
  { label: 'Years in industry', value: '9' },
  { label: 'Years in cloud & software', value: '2+' },
]

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'Vite',],
  },
  {
    title: 'Backend',
    items: ['Python','FastAPI', 'PostgreSQL', 'REST',],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure', 'GCP', 'CLI Deployment', 'CI/CD'],
  },
]

const projects = [
  {
    title: 'Crossword League',
    description:
      'A results tracking app and dashboard for the New York Times Mini Crossword built to assign a score to those on my New York Times Crossword friends list',
    impact: 'Bragging rights over my friends.',
    stack: ['React', 'FastAPI', 'Google Cloud Platform', 'ECS', 'Python Backend'],
    url: 'https://crosswordboys.com',
  },
]

const experience = [
  {
    role: 'Cloud/Cybersecurity Engineer',
    company: 'Booz Allen Hamilton',
    timeframe: '2022 — Present',
    summary:
      'Assessed, planned, and developed cloud and cybersecurity implementations for government clients.',
    tools: ['AWS', 'Azure', 'Python', 'RMF', 'CLI Deployment', 'REST API', 'Palantir Foundry'],
  },
  {
    role: 'Power and Propulsion Engineer',
    company: 'Serco Inc',
    timeframe: '2019 — 2022',
    summary:
      'Analyzed marine vessel fuel consumption for various design scenarios within a selected trade space.',
    tools: ['MATLAB', 'VBA', 'Engineering Simulation', 'Fuel Modeling', 'Product Integration'],
  },
  {
    role: 'Assistant Mechanical Engineer',
    company: 'WSP USA',
    timeframe: '2017 — 2019',
    summary:
      'Oversaw the design and implementation of mechanical systems for large scale critical infrastructure projects.',
    tools: ['Autodesk Inventor', 'SOLIDWORKS', 'Project Management', 'System Design'],
  },
]

const otherProjects = [
  {
    title: 'The Dylboy X30',
    description: 'Designed and prototyped a custom gameboy utilizing raspberry pi. Built custom case and button interface. Utilized open source tools for OS and pin mapping.',
    videoUrl: 'https://youtu.be/n03Py4CDRLk',
    technologies: ['CAD Design', 'Prototyping', 'Circuitry', 'Raspberry Pi', 'Embedded Systems'],
  },
]

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
  },
  {
    title: 'Security +',
    issuer: 'CompTIA',
    date: '2025',
  },
]


function App() {
  return (
    <div className="page">
      <div className="background">
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <span className="grid" />
      </div>

      <header className="nav">
        <div className="brand">
          <span className="brand-mark">DP</span>
          <div>
            <div className="brand-title">Dylan Pollock</div>
            <div className="brand-subtitle">Cloud Solutions Engineer</div>
          </div>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="button ghost" href="#contact">
            Let&apos;s talk
          </a>
          <a className="button primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <span className="pill">Open to new opportunities</span>
            <h1>
              I build scalable, cloud native systems to meet real user needs.
            </h1>
            <p>
              Engineer and developer with 9 years of industry experience — from mechanical design to cloud architecture. I bring a systems thinker's approach to building software that's fast, secure, and built to last.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View projects
              </a>
              <a className="button ghost" href="#contact">
                Schedule a chat
              </a>
            </div>
            <div className="hero-stats">
              {highlights.map((item) => (
                <div key={item.label} className="stat">
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <div className="card-header">
              <div>
                <h2>Currently building</h2>
                <p>Deploying using modern cloud platforms and scalable practices.</p>
              </div>
              <span className="chip">Development Tools</span>
            </div>
            <div className="card-grid">
              <div className="card-tile">
                <span>Frontend</span>
                <strong>React + Vite</strong>
              </div>
              <div className="card-tile">
                <span>Backend</span>
                <strong>FastAPI</strong>
              </div>
              <div className="card-tile">
                <span>Infra</span>
                <strong>Terraform</strong>
              </div>
              <div className="card-tile">
                <span>Delivery</span>
                <strong>CI/CD Pipelines</strong>
              </div>
            </div>
            <div className="card-footer">
              <span>Based in the U.S.</span>
              <span>Open to remote or hybrid roles</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Building user-centric solutions with the mindset of an engineer.</h2>
          </div>
          <div className="about-content">
            <div className="about-photo">
              <img 
                src="/profile-photo.jpg"
                alt="Dylan Pollock" 
                className="profile-image"
              />
            </div>
            <div className="about-body">
              <p>
                I started my career in mechanical design — working on infrastructure and marine engineering projects where precision and systematic problem-solving weren't optional.
              </p>
              <p>
                That foundation carried into a move into IT, where I spent two years supporting enterprise cybersecurity for naval platform systems, applying rigorous design processes to mission-critical environments.
              </p>
              <p>
                Today I work in cloud architecture, helping government clients design and deliver scalable, secure cloud solutions — and building my own software projects on the side.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Where I&apos;ve worked.</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <div key={job.role} className="timeline-item">
                <div className="timeline-header">
                  <h3>{job.role}</h3>
                  <span>{job.timeframe}</span>
                </div>
                <div className="timeline-company">{job.company}</div>
                <p>{job.summary}</p>
                {job.tools && (
                  <div className="chip-row">
                    {job.tools.map((tool) => (
                      <span key={tool} className="chip subtle">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Tools I work with.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <div className="chip-row">
                  {skill.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-impact">{project.impact}</div>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span key={item} className="chip subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-head">
            <p className="eyebrow">Certifications</p>
            <h2>Credentials and certifications.</h2>
          </div>
          <div className="certification-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="certification-card">
                <h3>{cert.title}</h3>
                <div className="certification-details">
                  <div className="certification-issuer">{cert.issuer}</div>
                  <div className="certification-date">{cert.date}</div>
                  {cert.credentialId && (
                    <div className="certification-id">ID: {cert.credentialId}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="other-projects" className="section">
          <div className="section-head">
            <p className="eyebrow">Other Projects</p>
            <h2>Beyond software engineering.</h2>
          </div>
          <div className="other-project-grid">
            {otherProjects.map((project) => (
              <article key={project.title} className="other-project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.videoUrl && (
                  <div className="project-video">
                    {project.videoUrl.includes('youtube') || project.videoUrl.includes('youtu.be') ? (
                      <iframe
                        className="video-player"
                        src={project.videoUrl.includes('youtu.be')
                          ? `https://www.youtube.com/embed/${project.videoUrl.split('youtu.be/')[1]}`
                          : `https://www.youtube.com/embed/${project.videoUrl.split('v=')[1]?.split('&')[0]}`
                        }
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        controls
                        className="video-player"
                        src={project.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}
                <div className="chip-row">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something together.</h2>
          </div>
          <div className="contact-card">
            <p>
              Reach out for collaboration, roles, or just to compare notes on
              AWS, Python, or developer experience.
            </p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:dylan.pollock.biz@gmail.com">
                Email me
              </a>
              <a className="button social" href="https://github.com/dpollock1108"
              target="_blank"
              rel="noopener noreferrer">
                GitHub
              </a>
              <a
                className="button social"
                href="https://www.linkedin.com/in/dylan-pollock/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Built with React, FastAPI, and AWS.</span>
        <span>© 2026 Dylan Pollock</span>
      </footer>
    </div>
  )
}

export default App
