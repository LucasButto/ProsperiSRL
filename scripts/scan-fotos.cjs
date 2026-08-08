// Scans the user-provided public/assets/fotos tree (already converted to
// webp/mov by the user) and emits src/data/proyectos.json describing it.
const fs = require("fs");
const path = require("path");

const FOTOS_FOLDER = "Fotos";
const ROOT = path.join(__dirname, "..", "public", "assets", FOTOS_FOLDER);
const DATA_OUT = path.join(__dirname, "..", "src", "data", "proyectos.json");

const CATEGORIAS = [
  { folder: "Alb", tipo: "Albañilería" },
  { folder: "Pintura", tipo: "Pintura" },
  { folder: "Revestimientos", tipo: "Revestimientos" },
  {
    folder: "Trabajos en Altura",
    tipo: "Trabajos de Altura",
    singleProject: true,
  },
];

const NOMBRE_OVERRIDES = {
  "Kentucky P": "Kentucky",
  "La paz": "La Paz",
  VConstitución: "V. Constitución",
  "Funes-Gringa": "Funes - Gringa",
};

const ANIO_DEFAULT = "2026";

function isPortada(filename) {
  return /^foto[-\s]*portada/i.test(filename);
}

function isVideo(filename) {
  return /\.mov$/i.test(filename);
}

function numericSortKey(filename) {
  const n = parseInt(path.basename(filename), 10);
  return Number.isNaN(n) ? Number.MAX_SAFE_INTEGER : n;
}

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildProject(categoriaFolder, tipo, proyectoFolder, dirPath, nested) {
  const files = fs
    .readdirSync(dirPath)
    .filter((f) => fs.statSync(path.join(dirPath, f)).isFile());
  const portadaFile = files.find(isPortada);
  const mediaFiles = files
    .filter((f) => !isPortada(f))
    .sort((a, b) => numericSortKey(a) - numericSortKey(b));

  const nombre = NOMBRE_OVERRIDES[proyectoFolder] ?? proyectoFolder.trim();
  const publicBase = nested
    ? `/assets/${FOTOS_FOLDER}/${categoriaFolder}/${proyectoFolder}`
    : `/assets/${FOTOS_FOLDER}/${categoriaFolder}`;

  // Some projects were exported without an explicit cover photo; fall back to
  // the first image so every project still has a thumbnail.
  const portadaSourceFile = portadaFile || mediaFiles.find((f) => !isVideo(f));
  const portada = portadaSourceFile
    ? `${publicBase}/${portadaSourceFile}`
    : null;

  const media = [];
  if (portadaFile)
    media.push({ type: "image", src: `${publicBase}/${portadaFile}` });
  for (const f of mediaFiles) {
    media.push({
      type: isVideo(f) ? "video" : "image",
      src: `${publicBase}/${f}`,
    });
  }

  return {
    id: nested
      ? `${slugify(categoriaFolder)}-${slugify(proyectoFolder)}`
      : slugify(proyectoFolder),
    nombre,
    anio: ANIO_DEFAULT,
    tipo,
    portada,
    media,
  };
}

const result = [];
for (const cat of CATEGORIAS) {
  const catPath = path.join(ROOT, cat.folder);
  if (!fs.existsSync(catPath)) continue;

  if (cat.singleProject) {
    result.push(buildProject(cat.folder, cat.tipo, cat.folder, catPath, false));
    continue;
  }

  const subdirs = fs
    .readdirSync(catPath)
    .filter((f) => fs.statSync(path.join(catPath, f)).isDirectory());
  for (const sub of subdirs) {
    result.push(
      buildProject(cat.folder, cat.tipo, sub, path.join(catPath, sub), true),
    );
  }
}

fs.writeFileSync(DATA_OUT, JSON.stringify(result, null, 2) + "\n");
console.log(`Listo. ${result.length} proyectos escritos en ${DATA_OUT}`);
