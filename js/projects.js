fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {

        const workGrid = document.querySelector(".work-grid");

        if (!workGrid) return;

        workGrid.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("article");
            card.className = "project-card";

            let imageHTML = `
                <div class="project-image">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}"
                    >
                    ${project.video ? '<span class="play-badge" aria-hidden="true">▶</span>' : ''}
                </div>
            `;

            if (project.video) {
                imageHTML = `
                    <a 
                        href="${project.link}" 
                        class="project-media-link"
                        target="_blank"
                        rel="noopener"
                    >
                        ${imageHTML}
                    </a>
                `;
            }

            card.innerHTML = `
                ${imageHTML}

                <div class="project-info">

                    <span class="project-category">
                        ${project.category}
                    </span>

                    <h3>${project.title}</h3>

                    <p>
                        ${project.description}
                    </p>

                    <a 
                        href="${project.link}"
                        class="project-link"
                        target="_blank"
                        rel="noopener"
                    >
                        ${project.video ? "View Project →" : 
                          project.category === "DESIGN" ? "View Published Work →" : 
                          "View Project →"}
                    </a>

                </div>
            `;

            workGrid.appendChild(card);
        });

    })
    .catch(error => {
        console.error("Projects could not be loaded:", error);
    });