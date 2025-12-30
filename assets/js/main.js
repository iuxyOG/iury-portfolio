const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const linkMap = new Map(
  navLinks.map((link) => [link.getAttribute("href").slice(1), link])
);

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

// Scroll spy for the current section in view.
if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActiveLink(visible[0].target.id);
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: [0.25, 0.5, 0.75] }
  );

  sections.forEach((section) => observer.observe(section));
}

const initialSection = location.hash ? location.hash.slice(1) : sections[0]?.id;
if (initialSection && linkMap.has(initialSection)) {
  setActiveLink(initialSection);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").slice(1);
    if (linkMap.has(id)) {
      setActiveLink(id);
    }
  });
});
