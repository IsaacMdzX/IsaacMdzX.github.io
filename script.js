document.getElementById('download-btn').addEventListener('click', () => {
  const element = document.getElementById('cv-container');
  const opt = {
    margin: 0.4,
    filename: 'Carlos_Isaac_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});
