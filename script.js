// Botón para descargar PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.getElementById("cv-content");
  const opt = {
    margin: 0.4,
    filename: "CV_CarlosIsaacMendez.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, backgroundColor: "#ffffff" },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
});

// Animar secciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .card").forEach(el => observer.observe(el));
