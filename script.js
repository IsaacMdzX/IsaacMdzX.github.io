// Botón para descargar PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  // Clonamos el contenido del CV
  const cv = document.getElementById("cv-content").cloneNode(true);

  // Aplicamos un estilo temporal claro SOLO para el PDF
  const lightStyle = document.createElement("style");
  lightStyle.textContent = `
    body { background: #fff !important; color: #000 !important; }
    .section { background: #fff !important; color: #000 !important; box-shadow: none !important; border: 1px solid #ddd; }
    h1, h2, h3 { color: #000 !important; }
    a, .link { color: #0077cc !important; text-decoration: underline !important; }
    ul li { color: #000 !important; }
  `;
  cv.appendChild(lightStyle);

  // Creamos un contenedor invisible para renderizar
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.appendChild(cv);
  document.body.appendChild(container);

  // Configuración del PDF
  const opt = {
    margin: 0.4,
    filename: "CV_CarlosIsaacMendez.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, backgroundColor: "#ffffff" },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };

  // Generar PDF desde el clon en modo claro
  html2pdf().set(opt).from(cv).save().then(() => {
    document.body.removeChild(container); // Limpia el DOM
  });
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .card").forEach(el => observer.observe(el));
