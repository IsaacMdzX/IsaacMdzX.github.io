// Botón para descargar PDF formal
document.getElementById("downloadPDF").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const margin = 15;
  let y = 20;

  // Encabezado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(0, 102, 204);
  doc.text("Carlos Isaac Méndez", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(60);
  doc.text("Estudiante de Ingeniería en Sistemas Computacionales", margin, y);
  y += 6;

  doc.setTextColor(0, 0, 0);
  doc.text("Email: isaacmdz.music29a@gmail.com", margin, y);
  y += 6;
  doc.text("GitHub: github.com/IsaacMdzX", margin, y);
  y += 10;

  // Sección Sobre mí
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text("Perfil Profesional", margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  const perfil = "Soy estudiante de Ingeniería en Sistemas Computacionales con interés en el desarrollo web, creación de APIs, desarrollo de interfaces y aplicaciones con Flask y Flutter. Me motiva aprender nuevas tecnologías, trabajar en equipo y resolver problemas con creatividad.";
  const splitPerfil = doc.splitTextToSize(perfil, 180);
  doc.text(splitPerfil, margin, y);
  y += splitPerfil.length * 6 + 4;

  // Habilidades técnicas
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text("Habilidades Técnicas", margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const habilidades = [
    "Python", "Flask", "Flutter", "Git", "GitHub", "HTML", "CSS",
    "JavaScript", "Java", "C++", "C#", "C", "MySQL", "PostgreSQL"
  ];
  doc.text(habilidades.join(", "), margin, y);
  y += 10;

  // Habilidades blandas
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 102, 204);
  doc.text("Habilidades Blandas", margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const blandas = "Buena comunicación, trabajo en equipo, liderazgo, adaptabilidad, empatía y compromiso.";
  const splitBlandas = doc.splitTextToSize(blandas, 180);
  doc.text(splitBlandas, margin, y);
  y += splitBlandas.length * 6 + 4;

  // Proyectos
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 102, 204);
  doc.text("Proyectos Destacados", margin, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const proyectos = [
    { titulo: "Tienda de Sneakers", desc: "Tienda en línea desarrollada con Python, Flask, HTML, CSS y JS. Incluye integración de pagos." },
    { titulo: "Tienda Gamer", desc: "Plataforma web en desarrollo para venta de accesorios y consolas. Usa Backbone.js, Flask y APIs de pago." },
    { titulo: "Analizador Léxico", desc: "Herramienta para corrección de texto y lógica gramatical. Desarrollada con Flask, Python y JS." },
    { titulo: "Pequeñas Prácticas", desc: "Ejercicios básicos en Java para reforzar fundamentos de programación." }
  ];
  proyectos.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.text(`• ${p.titulo}`, margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    const desc = doc.splitTextToSize(p.desc, 180);
    doc.text(desc, margin + 5, y);
    y += desc.length * 6 + 2;
  });

  // Educación
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 102, 204);
  doc.text("Educación", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text("Tecnológico Nacional de México Campus Iztapalapa", margin, y);
  y += 6;
  doc.text("Ingeniería en Sistemas Computacionales (2022 - Actualidad)", margin, y);
  y += 10;

  // Certificaciones
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 102, 204);
  doc.text("Certificaciones y Cursos", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const cursos = [
    "Python - SoloLearn",
    "Java - SoloLearn",
    "SQL - SoloLearn",
    "Flask - Curso en línea",
    "Inteligencia Artificial - Curso complementario"
  ];
  cursos.forEach(curso => {
    doc.text(`• ${curso}`, margin + 3, y);
    y += 6;
  });
  y += 4;

  // Experiencia
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 102, 204);
  doc.text("Experiencia", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  const experiencia = "Desarrollo de aplicaciones y páginas web para personas cercanas, prácticas de programación y clases básicas de bases de datos.";
  const splitExp = doc.splitTextToSize(experiencia, 180);
  doc.text(splitExp, margin, y);

  // Pie
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text("© 2025 Carlos Isaac Méndez - Portafolio Profesional", margin, 290);

  // Guardar
  doc.save("CV_CarlosIsaacMendez.pdf");
});
