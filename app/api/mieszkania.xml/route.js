import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  // Ścieżka do pliku JSON
  const filePath = path.join(process.cwd(), "data", "lokale.json");

  // Wczytujemy dane z JSON
  const fileData = await fs.readFile(filePath, "utf-8");
  const mieszkania = JSON.parse(fileData);

  // Tworzymy XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<mieszkania>\n`;
  mieszkania.forEach((m) => {
    xml += `  <mieszkanie>\n`;
    xml += `    <id>${m.id}</id>\n`;
    xml += `    <inwestycja>${m.inwestycja}</inwestycja>\n`;
    xml += `    <numer_lokalu>${m.numer}</numer_lokalu>\n`;
    xml += `    <powierzchnia_m2>${m.powierzchnia}</powierzchnia_m2>\n`;
    xml += `    <cena_brutto>${m.cena}</cena_brutto>\n`;
    xml += `    <data_aktualizacji>${m.dataAktualizacji}</data_aktualizacji>\n`;
    xml += `    <status>${m.status}</status>\n`;
    xml += `  </mieszkanie>\n`;
  });
  xml += `</mieszkania>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
