// Descarga PDF (usa html2pdf)
document.getElementById('download-btn').addEventListener('click', () => {
  const element = document.getElementById('cv-container'); // solo la tarjeta hero
  const opt = {
    margin: 0.4,
    filename: 'Carlos_Isaac_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, logging: false },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});

// Mock enviar contacto (solo demo)
document.getElementById('contact-send')?.addEventListener('click', () => {
  const name = document.getElementById('contact-name').value || 'Anon';
  const email = document.getElementById('contact-email').value || 'sin correo';
  alert(`Gracias ${name} — esto es un demo. Mensaje: ${email}`);
});
