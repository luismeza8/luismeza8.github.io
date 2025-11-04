window.addEventListener("scroll", function () {
  var top = window.scrollY;
  var bottom = top + window.innerHeight;
  var arr = [];

  document.querySelectorAll("div").forEach(function (div) {
    if (
      (div.offsetTop < top && top < div.offsetTop + div.offsetHeight) ||
      (div.offsetTop < bottom && bottom < div.offsetTop + div.offsetHeight)
    ) {
      arr.push(div);
    }
  });

  console.log(arr);
  changeSectionsColor(arr[0]);
});

function changeSectionsColor(div) {
  const aboutLink = document.getElementById("about-link");
  const experienceLink = document.getElementById("experience-link");
  const projectsLink = document.getElementById("projects-link");
  const contactLink = document.getElementById("contact-link");

  const about = document.getElementById("about");
  const experience = document.getElementById("experience");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const fakeTitle = document.getElementById("fake-title");
  const sections = document.getElementById("sections");

  switch (div) {
    case sections:
      console.log("asdf");
      aboutLink.classList.add("about-active");
      experienceLink.classList.remove("experience-active");
      projectsLink.classList.remove("projects-active");
      contactLink.classList.remove("contact-active");
      break;
    case fakeTitle:
      aboutLink.classList.add("about-active");
      experienceLink.classList.remove("experience-active");
      projectsLink.classList.remove("projects-active");
      contactLink.classList.remove("contact-active");
      console.log("fake");
      break;
    case about:
      aboutLink.classList.add("about-active");
      experienceLink.classList.remove("experience-active");
      projectsLink.classList.remove("projects-active");
      contactLink.classList.remove("contact-active");
      break;
    case experience:
      aboutLink.classList.remove("about-active");
      experienceLink.classList.add("experience-active");
      projectsLink.classList.remove("projects-active");
      contactLink.classList.remove("contact-active");
      break;
    case projects:
      aboutLink.classList.remove("about-active");
      experienceLink.classList.remove("experience-active");
      projectsLink.classList.add("projects-active");
      contactLink.classList.remove("contact-active");
      break;
    case contact:
      aboutLink.classList.remove("about-active");
      experienceLink.classList.remove("experience-active");
      projectsLink.classList.remove("projects-active");
      contactLink.classList.add("contact-active");
      break;
  }
}
