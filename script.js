// Descargar PDF
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.getElementById("cv-content");
  const opt = {
    margin: 0.3,
    filename: 'CV_CarlosIsaacMendez.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});
