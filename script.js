document.getElementById("downloadPDF").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const margin = 20;
  let y = 30;
  const azul = [0, 122, 255];
  const gris = [60, 60, 60];

  // Encabezado
  doc.setFillColor(...azul);
  doc.rect(0, 0, 210, 25, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Carlos Isaac Méndez", margin, 17);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Estudiante de Ingeniería en Sistemas Computacionales", margin, 23);

  // Contacto
  y += 15;
  doc.setTextColor(...gris);
  doc.setFontSize(10);
  doc.text("📧 isaacmdz.music29a@gmail.com", margin, y);
  y += 5;
  doc.text("💻 github.com/IsaacMdzX", margin, y);
  y += 10;

  const addSection = (title) => {
    y += 8;
    doc.setDrawColor(...azul);
    doc.setLineWidth(0.4);
    doc.line(margin, y, 190, y);
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...azul);
    doc.text(title, margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
  };

  // Secciones
  addSection("Perfil Profesional");
  doc.text(doc.splitTextToSize(
    "Soy estudiante de Ingeniería en Sistemas Computacionales con interés en el desarrollo web, la creación de APIs, desarrollo de interfaces y aplicaciones con Flask y Flutter. Me motiva aprender nuevas tecnologías y resolver problemas con creatividad.",
    170
  ), margin, y);
  y += 22;

  addSection("Habilidades Técnicas");
  doc.text("Python, Flask, Flutter, Git, GitHub, HTML, CSS, JavaScript, Java, C++, C#, C, MySQL, PostgreSQL.", margin, y);
  y += 15;

  addSection("Proyectos Destacados");
  const proyectos = [
    ["Tienda de Sneakers", "Tienda online con Flask y JS, integración de pagos."],
    ["Tienda Gamer", "Plataforma para venta de consolas (Backbone.js + Flask)."],
    ["Analizador Léxico", "Herramienta para análisis gramatical en Flask."]
  ];
  proyectos.forEach(([titulo, desc]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`• ${titulo}`, margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(desc, 170), margin + 5, y);
    y += 10;
  });

  addSection("Educación");
  doc.text("Tecnológico Nacional de México Campus Iztapalapa", margin, y);
  y += 6;
  doc.text("Ingeniería en Sistemas Computacionales (2022 - Actualidad)", margin, y);
  y += 15;

  addSection("Certificaciones y Cursos");
  [
    "Python - SoloLearn",
    "Java - SoloLearn",
    "SQL - SoloLearn",
    "Flask",
    "Inteligencia Artificial"
  ].forEach(curso => {
    doc.text(`• ${curso}`, margin + 3, y);
    y += 6;
  });

  addSection("Experiencia");
  const exp = "Desarrollo de aplicaciones y páginas web para personas cercanas, prácticas de programación y clases básicas de bases de datos.";
  doc.text(doc.splitTextToSize(exp, 170), margin, y);

  // Pie
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text("© 2025 Carlos Isaac Méndez - Portafolio Profesional", margin, 290);

  doc.save("CV_CarlosIsaacMendez.pdf");
});
