function changeColorSection(section) {
  const links = {
    about: document.getElementById("about-link"),
    experience: document.getElementById("experience-link"),
    projects: document.getElementById("projects-link"),
    contact: document.getElementById("contact-link"),
  };

  Object.values(links).forEach((link) =>
    link.classList.remove("active-section"),
  );

  links[section.id]?.classList.add("active-section");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        changeColorSection(entry.target);
      }
    });
  },
  { threshold: 0.4 },
);

["about", "experience", "projects", "contact"].forEach((id) => {
  observer.observe(document.getElementById(id));
});
