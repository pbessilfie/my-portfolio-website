import fs from 'node:fs';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  throw new Error('Usage: node scripts/update-cv-date.mjs <input.pdf> <output.pdf>');
}

const document = await PDFDocument.load(fs.readFileSync(inputPath));
const page = document.getPage(3);
document.registerFontkit(fontkit);
const font = await document.embedFont(
  fs.readFileSync('/System/Library/Fonts/Supplemental/Times New Roman.ttf'),
  { subset: true },
);

// Cover only the original "Present" token in the Bespoke Labs date line.
page.drawRectangle({
  x: 497,
  y: 657,
  width: 60,
  height: 18,
  color: rgb(1, 1, 1),
});

page.drawText('June 2026', {
  x: 499.5,
  y: 659,
  size: 12,
  font,
  color: rgb(0, 0, 0),
});

fs.writeFileSync(outputPath, await document.save());
