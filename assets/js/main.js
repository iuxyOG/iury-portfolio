document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const progressBar = document.querySelector(".scroll-progress span");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const playerCard = document.querySelector(".player-card");

const closeMenu = () => {
  if (!menuToggle || !navMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
};

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
    navMenu.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) closeMenu();
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
);

reveals.forEach((item) => revealObserver.observe(item));

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveLink(current.target.id);
    },
    { threshold: [0.18, 0.4], rootMargin: "-25% 0px -55% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

const animateCounter = (element) => {
  const target = Number(element.dataset.target || 0);
  if (reducedMotion) {
    element.textContent = target.toLocaleString("pt-BR");
    return;
  }

  const duration = 1300;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    element.textContent = Math.round(target * eased).toLocaleString("pt-BR");
    if (elapsed < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const metricBlock = document.querySelector(".metrics");
if (metricBlock) {
  const metricObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".counter").forEach(animateCounter);
      observer.unobserve(entry.target);
    },
    { threshold: 0.35 }
  );
  metricObserver.observe(metricBlock);
}

const skillBranches = document.querySelectorAll(".skill-branch");
if (skillBranches.length) {
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("skills-loaded");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );
  skillBranches.forEach((branch) => skillObserver.observe(branch));
}

const updateScrollProgress = () => {
  if (!progressBar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });

if (playerCard && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
  playerCard.addEventListener("pointermove", (event) => {
    const rect = playerCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    playerCard.style.transform = `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 4}deg) translateY(-2px)`;
  });

  playerCard.addEventListener("pointerleave", () => {
    playerCard.style.transform = "";
  });
}
