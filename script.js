// Descargar solo el contenido del CV (cv-content) y exportar con fondo blanco limpio
document.getElementById('downloadPDF').addEventListener('click', async () => {
  const source = document.getElementById('cv-content');
  if (!source) return alert('No se encontró el contenido del CV.');

  // Clonar el nodo para evitar cambios en la página visible
  const clone = source.cloneNode(true);

  // Aplicar estilos en línea para impresión: fondo blanco, ancho A4 aproximado en px (794px @96dpi)
  const wrapper = document.createElement('div');
  wrapper.style.background = '#ffffff';
  wrapper.style.padding = '20px';
  wrapper.style.width = '794px';
  wrapper.style.boxSizing = 'border-box';
  wrapper.style.fontFamily = getComputedStyle(document.body).fontFamily || 'sans-serif';
  wrapper.appendChild(clone);

  // Insertar temporalmente fuera de la vista
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-9999px';
  document.body.appendChild(wrapper);

  // Opciones para html2pdf
  const opt = {
    margin: 0.4,
    filename: 'Carlos_Isaac_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, logging: false, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(opt).from(wrapper).save();
  } catch (err) {
    console.error('Error generando PDF:', err);
    alert('Ocurrió un error al generar el PDF. Revisa la consola para más detalles.');
  } finally {
    // Limpiar
    document.body.removeChild(wrapper);
  }
});
