document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;

      // Chiude eventuali altri accordion aperti
      document.querySelectorAll(".accordion-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      // Alterna quello cliccato
      item.classList.toggle("active");
    });
  });
});
