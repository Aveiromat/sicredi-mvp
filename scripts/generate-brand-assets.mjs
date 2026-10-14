// Derive web icon formats from the supplied artwork, preserving its colors and geometry.
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
const original = "public/brand/sicredi-symbol.jpg";
const symbol = await sharp(original)
  .extract({ left: 160, top: 140, width: 580, height: 620 })
  .png()
  .toBuffer();
for (const [file, size] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["apple-touch-icon.png", 180],
]) {
  await sharp(symbol)
    .resize(size, size, { fit: "contain", background: "#ffffff" })
    .png()
    .toFile(`public/brand/${file}`);
}
const png = await sharp(symbol)
  .resize(48, 48, { fit: "contain", background: "#ffffff" })
  .ensureAlpha()
  .png()
  .toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 48;
header[7] = 48;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await writeFile("src/app/favicon.ico", Buffer.concat([header, png]));
const embedded = (await readFile(original)).toString("base64");
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f8faf6"/><circle cx="1020" cy="290" r="290" fill="#e6efcf"/><rect x="60" y="55" width="1080" height="520" rx="30" fill="none" stroke="#d8e3cd"/><image href="data:image/jpeg;base64,${embedded}" x="80" y="70" width="115" height="115"/><g font-family="Arial,sans-serif" fill="#153d31"><text x="205" y="143" font-size="42" font-weight="700">sicredi <tspan font-weight="400">play</tspan></text><text x="100" y="255" font-size="62" font-weight="700">Dê play no desafio.</text><text x="100" y="333" font-size="62" font-weight="700" fill="#528243">Desbloqueie seu brinde.</text><text x="100" y="393" font-size="24" fill="#61725f">6 desafios financeiros. Menos de 3 minutos. Sem cadastro.</text><rect x="100" y="433" width="410" height="61" rx="14" fill="#216849"/><text x="130" y="472" fill="white" font-size="23" font-weight="700">Jogar e desbloquear meu brinde</text><text x="100" y="545" fill="#61725f" font-size="18">Protótipo demonstrativo · Brindes ilustrativos, sem entrega real.</text></g></svg>`;
await sharp(Buffer.from(card)).png().toFile("public/brand/social-card.png");
console.log("Ícones, favicon e imagem social gerados.");

