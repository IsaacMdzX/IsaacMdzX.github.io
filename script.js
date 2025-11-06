document.getElementById("downloadPDF").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const margin = 15;
  let y = 25;
  const lineColor = [0, 102, 204];

  // === ENCABEZADO ===
  doc.setFillColor(0, 102, 204);
  doc.rect(0, 0, 210, 25, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("Carlos Isaac Méndez", margin, 17);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Estudiante de Ingeniería en Sistemas Computacionales", margin, 23);

  // === INFORMACIÓN DE CONTACTO ===
  y += 10;
  doc.setFontSize(10);
  doc.setTextColor(80);
  doc.text("📧  isaacmdz.music29a@gmail.com", margin, y);
  y += 5;
  doc.text("💻  github.com/IsaacMdzX", margin, y);
  y += 10;

  // === PERFIL PROFESIONAL ===
  doc.setDrawColor(...lineColor);
  doc.setLineWidth(0.5);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...lineColor);
  doc.text("Perfil Profesional", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(0);
  const perfil = `Soy estudiante de Ingeniería en Sistemas Computacionales con interés en el desarrollo web, 
creación de APIs, desarrollo de interfaces y aplicaciones con Flask y Flutter. 
Me motiva aprender nuevas tecnologías, trabajar en equipo y resolver problemas con creatividad.`;
  const perfilText = doc.splitTextToSize(perfil, 180);
  doc.text(perfilText, margin, y);
  y += perfilText.length * 6 + 6;

  // === HABILIDADES TÉCNICAS ===
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Habilidades Técnicas", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  const tecnicas = [
    "Python", "Flask", "Flutter", "Git", "GitHub",
    "HTML", "CSS", "JavaScript", "Java", "C++", "C#", "C",
    "MySQL", "PostgreSQL"
  ];
  doc.text(tecnicas.join(" • "), margin, y);
  y += 12;

  // === HABILIDADES BLANDAS ===
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Habilidades Blandas", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  const blandas = "Buena comunicación, trabajo en equipo, liderazgo, adaptabilidad, empatía y compromiso.";
  const blandasText = doc.splitTextToSize(blandas, 180);
  doc.text(blandasText, margin, y);
  y += blandasText.length * 6 + 8;

  // === PROYECTOS ===
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Proyectos Destacados", margin, y);
  y += 7;

  const proyectos = [
    { titulo: "Tienda de Sneakers", desc: "Tienda en línea desarrollada con Python, Flask, HTML, CSS y JS. Incluye integración de pagos." },
    { titulo: "Tienda Gamer", desc: "Plataforma web en desarrollo para venta de accesorios y consolas. Usa Backbone.js, Flask y APIs de pago." },
    { titulo: "Analizador Léxico", desc: "Herramienta para corrección de texto y lógica gramatical. Desarrollada con Flask, Python y JS." },
    { titulo: "Pequeñas Prácticas", desc: "Ejercicios básicos en Java para reforzar fundamentos de programación." }
  ];

  proyectos.forEach(p => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(30);
    doc.text(`• ${p.titulo}`, margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    const desc = doc.splitTextToSize(p.desc, 175);
    doc.text(desc, margin + 5, y);
    y += desc.length * 6 + 3;
  });

  // === EDUCACIÓN ===
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Educación", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  doc.text("Tecnológico Nacional de México Campus Iztapalapa", margin, y);
  y += 6;
  doc.text("Ingeniería en Sistemas Computacionales (2022 - Actualidad)", margin, y);
  y += 10;

  // === CERTIFICACIONES ===
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Certificaciones y Cursos", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
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

  // === EXPERIENCIA ===
  y += 5;
  doc.setDrawColor(...lineColor);
  doc.line(margin, y, 195, y);
  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...lineColor);
  doc.text("Experiencia", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);
  const experiencia = "Desarrollo de aplicaciones y páginas web para personas cercanas, prácticas de programación y clases básicas de bases de datos.";
  const expText = doc.splitTextToSize(experiencia, 180);
  doc.text(expText, margin, y);

  // Pie
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text("© 2025 Carlos Isaac Méndez - Portafolio Profesional", margin, 290);

  doc.save("CV_CarlosIsaacMendez.pdf");
});
