export default function smoothScroll() {
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const topOffset = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: topOffset,
          behavior: "smooth",
        });
      }
    });
  });
}