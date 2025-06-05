document.addEventListener("DOMContentLoaded", () => {
  // Scroll 등장 효과 (Intersection Observer)
  const sections = document.querySelectorAll(".fade-section");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // 한 번만 실행되도록 해줌
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  } else {
    // Fallback for older browsers
    sections.forEach((section) => section.classList.add("visible"));
  }

  // 페이지 새로고침 시 항상 맨 위로 이동
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
});
