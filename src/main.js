function changeColorSection(section) {
  const links = {
    about: document.getElementById("about-link"),
    experience: document.getElementById("experience-link"),
    projects: document.getElementById("projects-link"),
    contact: document.getElementById("contact-link"),
  };

  Object.values(links).forEach((link) =>
    link.classList.remove(
      "about-active",
      "experience-active",
      "projects-active",
      "contact-active",
    ),
  );

  links[section.id]?.classList.add(`${section.id}-active`);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        changeColorSection(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

["about", "experience", "projects", "contact"].forEach((id) => {
  observer.observe(document.getElementById(id));
});
