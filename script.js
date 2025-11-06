document.getElementById("downloadPDF").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const azul = [0, 122, 255];
  const grisOscuro = [50, 50, 50];
  const grisClaro = [90, 90, 90];

  // Fondo lateral
  doc.setFillColor(240, 247, 255);
  doc.rect(0, 0, 210, 297, "F");

  // Barra superior
  doc.setFillColor(...azul);
  doc.rect(0, 0, 210, 25, "F");

  // Encabezado
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Carlos Isaac Méndez Davila", 105, 15, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Estudiante de Ingeniería en Sistemas Computacionales", 105, 22, { align: "center" });

  // Contacto
  let y = 35;
  doc.setTextColor(...grisOscuro);
  doc.setFontSize(10);
  doc.text("Correo contacto:isaacmdz.music29a@gmail.com", 20, y);
  y += 6;
  doc.text("Github:github.com/IsaacMdzX", 20, y);

  // Línea divisoria
  y += 8;
  doc.setDrawColor(...azul);
  doc.setLineWidth(0.4);
  doc.line(20, y, 190, y);
  y += 10;

  const addSection = (title) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...azul);
    doc.text(title, 20, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...grisOscuro);
  };

  // PERFIL
  addSection("Perfil Profesional");
  const perfil = `Soy estudiante de Ingeniería en Sistemas Computacionales con interés en el desarrollo web, 
la creación de APIs, desarrollo de interfaces y aplicaciones con Flask y Flutter. 
Me motiva aprender nuevas tecnologías y resolver problemas con creatividad.`;
  doc.text(doc.splitTextToSize(perfil, 170), 20, y);
  y += 25;

  // HABILIDADES
  addSection("Habilidades Técnicas");
  const habilidades = [
    "Python", "Flask", "Flutter", "Git", "GitHub",
    "HTML", "CSS", "JavaScript", "Java", "C++",
    "C#", "C", "MySQL", "PostgreSQL"
  ];
  doc.setTextColor(...grisClaro);
  doc.text(habilidades.join(" • "), 25, y);
  y += 15;

  // PROYECTOS
  addSection("Proyectos Destacados");
  const proyectos = [
    ["Tienda de Sneakers", "Tienda online con Flask y JS, integración de pagos."],
    ["Tienda Gamer", "Plataforma para venta de consolas (Backbone.js + Flask)."],
    ["Analizador Léxico", "Herramienta para análisis gramatical en Flask."]
  ];
  proyectos.forEach(([titulo, desc]) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...grisOscuro);
    doc.text(`• ${titulo}`, 25, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grisClaro);
    doc.text(doc.splitTextToSize(desc, 160), 30, y);
    y += 10;
  });

  // EDUCACIÓN
  addSection("Educación");
  doc.setTextColor(...grisOscuro);
  doc.text("Tecnológico Nacional de México Campus Iztapalapa", 25, y);
  y += 6;
  doc.text("Ingeniería en Sistemas Computacionales (2022 - Actualidad)", 25, y);
  y += 12;

  // CERTIFICACIONES
  addSection("Certificaciones y Cursos");
  const cursos = [
    "Python - SoloLearn",
    "Java - SoloLearn",
    "SQL - SoloLearn",
    "Flask",
    "Inteligencia Artificial"
  ];
  cursos.forEach(curso => {
    doc.setTextColor(...grisClaro);
    doc.text(`• ${curso}`, 25, y);
    y += 6;
  });

  y += 10;

  // EXPERIENCIA
  addSection("Experiencia");
  const exp = "Desarrollo de aplicaciones y páginas web para personas cercanas, prácticas de programación y clases básicas de bases de datos.";
  doc.setTextColor(...grisClaro);
  doc.text(doc.splitTextToSize(exp, 170), 20, y);

  // Pie
  doc.setFontSize(9);
  doc.setTextColor(150);
  doc.text("© 2025 Carlos Isaac Méndez — Portafolio Profesional", 105, 290, { align: "center" });

  doc.save("CV_CarlosIsaacMendez.pdf");
});
