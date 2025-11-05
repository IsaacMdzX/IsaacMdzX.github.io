// Generar PDF con html2pdf.js
document.getElementById("download-btn").addEventListener("click", () => {
  const element = document.body;
  const options = {
    margin: 0.5,
    filename: "Carlos_Isaac_CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(element).save();
});
