function Projects() {
  return (
    <section className="projects section" id="projects">
      <p className="subtitle">MY RECENT WORK</p>
      <h2>Projects</h2>

      <div className="projects-list">
        <div className="project">
          <span>01</span>
          <h3>Portfolio Website</h3>
          <p>Personal portfolio created with React.</p>
        </div>

        <div className="project">
          <span>02</span>
          <h3>Travel Website</h3>
          <p>A website for discovering new destinations.</p>
        </div>

        <div className="project">
          <span>03</span>
          <h3>Restaurant Website</h3>
          <p>A simple and modern restaurant website.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;