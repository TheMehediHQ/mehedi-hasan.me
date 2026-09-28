const section = document.querySelector<HTMLElement>("[data-bento-section]");

if (section) {
  const animatedElements = Array.from(
    section.querySelectorAll<HTMLElement>(".bento-animate"),
  );

  animatedElements.forEach((element) => {
    const delay = element.dataset.delay;
    if (delay) {
      element.style.setProperty("--animation-delay", delay);
    }
  });

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    animatedElements.forEach((element) => {
      element.classList.add("has-motion");
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 40px 0px" },
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
