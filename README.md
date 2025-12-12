<style>
/* Simplified CSS for GitHub README layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12-column layout */
    gap: 15px;
    margin: 20px 0;
}
.card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header-card {
    grid-column: span 12;
    background-color: #2c2c3e;
    color: #f0f0f0;
}
.input-card {
    grid-column: span 12;
    min-height: 150px;
}
.name-card { background-color: #ef4444; color: white; grid-column: span 3; }
.image-card { background-image: linear-gradient(to bottom right, #f59e0b, #e11d48); color: white; grid-column: span 3; }
.github-card { background-color: #10b981; color: white; grid-column: span 3; }
.twitter-card { background-color: #3b82f6; color: white; grid-column: span 3; }
.linkedin-card { background-image: linear-gradient(to bottom right, #3b82f6, #8b5cf6); color: white; grid-column: span 3; }
.website-card { background-image: linear-gradient(to bottom right, #f3f4f6, #9ca3af); color: #1f2937; grid-column: span 3; }
.full-img-card { grid-column: span 6; padding: 0; }
.doc-card { 
    grid-column: span 3; 
    color: white; 
    min-height: 200px;
    margin-bottom: 15px; /* Separate the two small cards */
}
.doc-card-1 { background-image: linear-gradient(to bottom right, #06b6d4, #10b981); }
.doc-card-2 { background-image: linear-gradient(to bottom right, #8b5cf6, #5b21b6); }

/* Final Demo Grid (The actual Bento Grid) */
.demo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 50px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
.demo-item {
    padding: 15px;
    border-radius: 8px;
    color: white;
    min-height: 100px;
    text-align: center;
    overflow: hidden;
}
.demo-name { background-image: linear-gradient(to bottom right, #06b6d4, #3b82f6, #8b5cf6); grid-column: span 1; padding-top: 30px; }
.demo-image { grid-column: span 2; grid-row: span 2; background-color: #333; padding: 0; }
.demo-twitter { background-image: linear-gradient(to bottom right, #000, #3b82f6); }
.demo-github { grid-row: span 2; background-color: #333; padding: 0; }
.demo-linkedin { background-image: linear-gradient(to bottom right, #000, #1d4ed8); }
.demo-graph { grid-column: span 2; background-color: #111; padding: 0; }
.demo-website { background-image: linear-gradient(to bottom right, #f3f4f6, #9ca3af); color: black; }

/* Media Query for Mobile Responsiveness (adjusts all 12-column sections to 1 column) */
@media (max-width: 768px) {
    .grid-container, .demo-grid {
        grid-template-columns: 1fr;
    }
    .name-card, .image-card, .github-card, .twitter-card, .linkedin-card, .website-card, .full-img-card, .doc-card {
        grid-column: span 1;
    }
    .demo-image, .demo-github, .demo-graph {
        grid-row: span 1; /* Disable row span on mobile */
        grid-column: span 1;
    }
}
</style>

<div class="grid-container">

    <div class="header-card" style="grid-column: span 12 / span 12;">
        <h1>Make your Github Profile <span style="background-image: linear-gradient(to right, #6366f1, #c084fc); background-clip: text; color: transparent;">modern and trendy!</span></h1>
        <p style="margin-top: 20px;">Build your own bento grid, copy the code and paste it on to the top of your GitHub Profile readme to make your Github profile look cool. ✨</p>
        <div style="margin-top: 30px;">
            <p><strong>100+</strong> Github users love this!</p>
        </div>
    </div>
    
    <div class="name-card card">
        <h2 style="font-size: 1.5em; margin-bottom: 10px;">Your Name</h2>
        <input type="text" placeholder="Enter your first Name" value="[Your Name]" style="background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 8px; border-radius: 5px; color: white; width: 100%;"/>
    </div>

    <div class="image-card card">
        <h2 style="font-size: 1.5em; margin-bottom: 10px;">Image URL</h2>
        <input type="url" placeholder="Enter your image url" value="[Image URL]" style="background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 8px; border-radius: 5px; color: white; width: 100%;"/>
    </div>

    <div class="github-card card">
        <h2 style="font-size: 1.5em; margin-bottom: 10px;">Github Username</h2>
        <input type="text" placeholder="Enter your username" value="[GitHub Username]" style="background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 8px; border-radius: 5px; color: white; width: 100%;"/>
    </div>

    <div class="twitter-card card">
        <h2 style="font-size: 1.5em; margin-bottom: 10px;">Twitter Username</h2>
        <input type="text" placeholder="Enter your username" value="[Twitter Username]" style="background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 8px; border-radius: 5px; color: white; width: 100%;"/>
    </div>

    <div class="doc-card-container" style="grid-column: span 3;">
        <div class="linkedin-card card doc-card">
            <h2 style="font-size: 1.5em; margin-bottom: 10px;">LinkedIn Username</h2>
            <input type="url" placeholder="Enter your username" value="[LinkedIn Username]" style="background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 8px; border-radius: 5px; color: white; width: 100%;"/>
        </div>
        <div class="website-card card doc-card">
            <h2 style="font-size: 1.5em; margin-bottom: 10px; color: #1f2937;">Your Website URL</h2>
            <input type="url" placeholder="Enter your portfolio url" value="[Website URL]" style="background-color: rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.3); padding: 8px; border-radius: 5px; color: #1f2937; width: 100%;"/>
        </div>
    </div>
    
    <div class="full-img-card card" style="grid-column: span 6;">
        <img src="[Your Main Bento Grid Preview Image URL]" alt="Bento Grid Preview" style="width: 100%; height: auto; border-radius: 10px; object-fit: cover;"/>
    </div>

    <div class="doc-card-container" style="grid-column: span 3;">
        <div class="doc-card-1 card doc-card">
            <h2 style="font-size: 1.5em; margin-bottom: 10px;">Documentation</h2>
            <p style="font-size: 0.9em;">We have a guide for you get started with the project.</p>
            <a href="/guide" style="text-decoration: none; padding: 8px 15px; background-color: rgba(0,0,0,0.2); border-radius: 5px; color: white; display: block; text-align: center; margin-top: 10px;">Read Guide</a>
        </div>
        <div class="doc-card-2 card doc-card">
            <h2 style="font-size: 1.5em; margin-bottom: 10px;">Open Source</h2>
            <p style="font-size: 0.9em;">It's fully open source and you can contribute to it.</p>
            <a href="https://github.com/edgexhq/opbento" style="text-decoration: none; padding: 8px 15px; background-color: rgba(0,0,0,0.2); border-radius: 5px; color: white; display: block; text-align: center; margin-top: 10px;">Begin Your Journey</a>
        </div>
    </div>

</div>

<div class="demo-grid">
    <div class="demo-name demo-item">
        <p style="font-size: 0.9em;">Hey I'm</p>
        <h2 style="font-size: 2.5em; margin-top: 5px;">USER</h2>
    </div>

    <div class="demo-image demo-item">
        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"/>
    </div>

    <div class="demo-twitter demo-item">
        <p style="font-size: 1.5em; margin-top: 20px;">@TWITTER_HANDLE</p>
    </div>

    <div class="demo-github demo-item">
        <img src="https://i.postimg.cc/NGK80VQ1/cf954b8923fbafc5cfc0c66344b6a6f9.jpg" alt="GitHub Image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"/>
        <p style="position: absolute; bottom: 15px; width: 100%; text-align: center;">
            <a href="https://github.com/[YOUR_USERNAME]" style="background-color: #ec4899; padding: 5px 10px; border-radius: 5px; text-decoration: none; color: white;">@[YOUR_USERNAME]</a>
        </p>
    </div>

    <div class="demo-linkedin demo-item">
        <p style="font-size: 1.5em; margin-top: 20px;">@LINKEDIN_HANDLE</p>
    </div>

    <div class="demo-graph demo-item">
        <img src="https://github-readme-activity-graph.vercel.app/graph?username=[YOUR_USERNAME]&bg_color=030312&color=ff8080&line=e00a60&point=ff7171&area=true&hide_border=true" alt="GitHub Activity Graph" style="width: 100%; height: 100%; object-fit: cover;"/>
    </div>

    <div class="demo-website demo-item">
        <h1 style="color: black; font-size: 1.2em;">WEBSITE.COM</h1>
    </div>
</div>
<!-- BENTO_IMAGE -->
![Daily Bento](https://firebasestorage.googleapis.com/v0/b/smartkaksha-fe32c.appspot.com/o/opbento%2Fhemchdev1b50e.png?alt=media)
<!-- /BENTO_IMAGE -->

<h1 align="left">Tech Stack</h1>

###

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts" height="60" alt="typescript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=nextjs" height="60" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="60" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=py" height="60" alt="python logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=bootstrap" height="60" alt="bootstrap logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/canva/00C4CC" height="60" alt="canva logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=docker" height="60" alt="docker logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=fastapi" height="60" alt="fastapi logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=git" height="60" alt="git logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=github" height="60" alt="github logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=java" height="60" alt="java logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="60" alt="javascript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=mysql" height="60" alt="mysql logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=notion" height="60" alt="notion logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg" height="60" alt="podman logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=react" height="60" alt="react logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=redis" height="60" alt="redis logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=redux" height="60" alt="redux logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=spring" height="60" alt="spring logo"  />
</div>

###

<div align="center">
  <a href="https://www.linkedin.com/in/hemanthsaich/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
  <a href="mailto:hemanthsai1566@gmail.com?subject=Project%20Collaboration%20Request" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo"  />
  </a>
</div>

###

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/hemchdev/hemchdev/output/pacman-contribution-graph-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/hemchdev/hemchdev/output/pacman-contribution-graph.svg">
  <img alt="pacman contribution graph" src="https://raw.githubusercontent.com/hemchdev/hemchdev/output/pacman-contribution-graph.svg">
</picture>


