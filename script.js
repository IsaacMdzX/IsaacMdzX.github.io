<!-- Botón -->
<button id="downloadPDF" class="btn">Descargar PDF</button>

<!-- Script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.body; // puedes cambiarlo a un div específico
  const opt = {
    margin: 0.3,
    filename: 'CV_CarlosIsaacMendez.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});
</script>
