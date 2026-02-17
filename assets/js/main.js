const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const reveals = Array.from(document.querySelectorAll(".reveal"));

document.documentElement.classList.add("js");

reveals.forEach((item, index) => {
  const delay = Math.min(index * 0.05, 0.35);
  item.style.setProperty("--reveal-delay", `${delay}s`);
});

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: "-35% 0px -48% 0px",
      threshold: [0.25, 0.5, 0.75],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const initialId = location.hash ? location.hash.slice(1) : sections[0].id;
  setActiveLink(initialId);
}

if (reveals.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((item) => revealObserver.observe(item));
}
