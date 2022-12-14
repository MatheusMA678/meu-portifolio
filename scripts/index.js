document.getElementById('app').innerHTML = `
  <header>
    <div class="container">
      <div class="logo">
        <a href="index.html">
          <span>Meu Portifólio</span>
        </a>
      </div>
    </div>
  </header>
  <main>
    <section id="section-1">
      <div class="card user-info">
        <img src="assets/matheus.png" alt="Foto de Matheus">
        <div class="info">
          <span>Matheus</span>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div class="card-2 social">
        <span><img src="assets/map-pin.svg" alt="Map Pin"> Brasil</span>
        <span><img src="assets/briefcase.svg" alt="Briefcase"> Estudante</span>
        <span><img src="assets/github.svg" alt="GitHub"><a href="https://github.com/MatheusMA678"> MatheusMA678</a></span>
        <span><img src="assets/linkedin.svg" alt="Linkedin"> MatheusMA678</span>
        <span><img src="assets/twitter.svg" alt="Linkedin"> MatheusMA678</span>
        <span><img src="assets/globe.svg" alt="Globe"> <a href="https://matheusma678.github.io">matheusma678.github.io</a></span>
        <span><img src="assets/mail.svg" alt="Mail"> <a href="mailto:matheusma2510@hotmail.com">matheusma2510@hotmail.com</a></span>
      </div>
      <div class="card tech">
        <h2>Tecnologias</h2>
        <div class="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>Node</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </div>
      <div class="card education">
        <h2>Educação</h2>
        <ul>
          <li>
            <span>Curso em Video</span>
            <p>2022 - Atualmente</p>
            <p>HTML e CSS</p>
          </li>
          <li>
            <span>Rocketseat</span>
            <p>2022 - Atualmente</p>
            <p>Explorer</p>
          </li>
          <li>
            <span>FreeCodeCamp</span>
            <p>2022 - Atualmente</p>
            <p>Dev. Web</p>
          </li>
        </ul>
      </div>
    </section>
    <section id="section-2">
      <div class="card card-2 full-card">
        <h2>My Projects</h2>
        <a href="#">Veja todos</a>
      </div>
      <div class="projects">
        <div class="card-2">
          <div class="project-info">
            <span>
              <img src="assets/folder.svg" alt="Folder"> discord-site
            </span>
            <p>Site de convite para o Sever do Discord chamado Cidade dos Memes.</p>
          </div>
          <div class="project-stats">
            <div class="info">
              <span>
                <img src="assets/star.svg" alt="Star"> 5
              </span>
              <span>
                <img src="assets/git-branch.svg" alt="Fork"> 0
              </span>
            </div>
            <div class="language-css">
              <div class="circle-lang"></div>
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="project-info">
            <span>
              <img src="assets/folder.svg" alt="Folder"> nlw-10-copa
            </span>
            <p>Projeto da NLW Copa Explorer 2022 apresentado por Mayk Brito - Rocketseat.</p>
          </div>
          <div class="project-stats">
            <div class="info">
              <span>
                <img src="assets/star.svg" alt="Star"> 2
              </span>
              <span>
                <img src="assets/git-branch.svg" alt="Fork"> 0
              </span>
            </div>
            <div class="language-css">
              <div class="circle-lang"></div>
              <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-2 full-card">
        <h2>Recent Posts</h2>
      </div>
        <div class="card card-2 post">
          <img src="assets/matheus.png" alt="Foto de Matheus">
          <div class="post-text">
            <div class="top">
              <h2>Site para o Sever Privado do Discord chamado Cidade dos Memes</h2>
              <span>1 mês atrás</span>
            </div>
            <div class="bottom">
              <p>Site para o Sever Privado do Discord chamado Cidade dos Memes</p>
              <span>#html</span>
              <span>#css</span>
            </div>
          </div>
        </div>
        <div class="card social-2">
          <div>
            <h2>Social</h2>
          </div>
          <span><img src="assets/map-pin.svg" alt="Map Pin"> Brasil</span>
          <span><img src="assets/briefcase.svg" alt="Briefcase"> Estudante</span>
          <span><img src="assets/github.svg" alt="GitHub"><a href="https://github.com/MatheusMA678"> MatheusMA678</a></span>
          <span><img src="assets/linkedin.svg" alt="Linkedin"> MatheusMA678</span>
          <span><img src="assets/twitter.svg" alt="Linkedin"> MatheusMA678</span>
          <span><img src="assets/globe.svg" alt="Globe"> <a href="https://matheusma678.github.io">matheusma678.github.io</a></span>
          <span><img src="assets/mail.svg" alt="Mail"> <a href="mailto:matheusma2510@hotmail.com">matheusma2510@hotmail.com</a></span>
      </div>
    </section>
  </main>
  <footer>
    <p>Feito com 💜 por Matheus</p>
  </footer>
`;