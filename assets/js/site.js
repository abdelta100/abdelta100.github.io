(() => {
  const projects = window.PROJECTS || [];
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const categoryNames = { research: "Research", academic: "Academic project", professional: "Professional", "computational-design": "Computational design" };

  function visualMarkup(project) {
    if (project.cover) {
      return `<div class="project-cover"><img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.coverAlt || project.title)}" loading="lazy" data-cover><div class="cover-fallback cover-${escapeHTML(project.visual)}" aria-hidden="true"><span class="cover-kicker">${escapeHTML(project.visualLabel || "Project visual")}</span><span class="cover-code">${escapeHTML(project.visual || "MA")}</span><span class="cover-caption">Image coming soon</span></div></div>`;
    }
    return `<div class="project-cover"><div class="cover-fallback cover-${escapeHTML(project.visual)}" role="img" aria-label="Abstract visual placeholder: ${escapeHTML(project.visualLabel || project.title)}"><span class="cover-kicker">${escapeHTML(project.visualLabel || "Project visual")}</span><span class="cover-code">${escapeHTML(project.visual || "MA")}</span><span class="cover-caption">Visual to be added</span></div></div>`;
  }

  function cardMarkup(project) {
    const chips = (project.tags || []).slice(0, 3).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("");
    return `<article class="project-card"><button type="button" class="project-open" data-project-id="${escapeHTML(project.id)}" aria-label="View details: ${escapeHTML(project.title)}">${visualMarkup(project)}<div class="project-content"><div class="project-meta"><span>${escapeHTML(project.type)}</span><span>${escapeHTML(project.year)}</span></div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.summary)}</p><div class="tag-row">${chips}</div><span class="card-cta">Explore project <span aria-hidden="true">↗</span></span></div></button></article>`;
  }

  document.querySelectorAll('[data-project-list]').forEach(list => {
    const mode = list.dataset.projectList;
    const items = mode === "featured" ? projects.filter(project => project.featured) : projects;
    list.innerHTML = items.map(cardMarkup).join("");
  });

  const dialog = document.querySelector(".project-dialog");
  const dialogBody = dialog?.querySelector(".dialog-body");
  function openProject(project) {
    if (!dialog || !dialogBody) return;
    dialogBody.innerHTML = `<div class="dialog-cover">${visualMarkup(project)}</div><div class="dialog-copy"><p class="eyebrow">${escapeHTML(project.type)} <span class="eyebrow-separator">/</span> ${escapeHTML(project.year)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-summary">${escapeHTML(project.summary)}</p><div class="dialog-rule"></div><h3>Approach & contribution</h3><p>${escapeHTML(project.details)}</p><p class="dialog-contribution">${escapeHTML(project.contribution)}</p><div class="tag-row">${(project.tags || []).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div></div>`;
    dialog.showModal();
    dialog.querySelector(".dialog-close")?.focus();
  }

  document.addEventListener("click", event => {
    const projectButton = event.target.closest("[data-project-id]");
    if (projectButton) {
      const project = projects.find(item => item.id === projectButton.dataset.projectId);
      if (project) openProject(project);
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      const chosen = filter.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(button => {
        const active = button === filter;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      let count = 0;
      document.querySelectorAll(".archive-grid .project-card").forEach(card => {
        const item = projects.find(project => project.id === card.querySelector("[data-project-id]")?.dataset.projectId);
        const visible = chosen === "all" || (item?.categories || []).includes(chosen);
        card.hidden = !visible;
        if (visible) count++;
      });
      const note = document.querySelector("[data-results-note]");
      if (note) note.textContent = `${count} ${count === 1 ? "project" : "projects"}`;
    }
  });

  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.querySelectorAll("[data-cover]").forEach(image => image.addEventListener("error", () => {
    image.hidden = true;
    const fallback = image.parentElement.querySelector(".cover-fallback");
    if (fallback) fallback.classList.add("is-visible");
  }));

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    navLinks?.classList.toggle("is-open", !expanded);
  });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
  }));

  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(node => { node.textContent = year; });
  const filterCount = document.querySelector('[data-filter-count="all"]');
  if (filterCount) filterCount.textContent = `(${projects.length})`;
  document.querySelectorAll("[data-nav-project-count]").forEach(node => { node.textContent = String(projects.length).padStart(2, "0"); });
  const results = document.querySelector("[data-results-note]");
  if (results) results.textContent = `${projects.length} projects`;
})();
