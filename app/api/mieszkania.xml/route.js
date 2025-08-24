import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  // Wczytanie JSON z pliku
  const filePath = path.join(process.cwd(), "data", "mieszkania1.json")
  const file = await fs.readFile(filePath, "utf-8")
  const mieszkania = JSON.parse(file)

  // Budowanie XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<mieszkania>\n`

  mieszkania.forEach((m) => {
    xml += `  <mieszkanie>\n`
    xml += `    <id>${m.id}</id>\n`
    xml += `    <adres>${m.adres}</adres>\n`
    xml += `    <inwestycja>${m.inwestycja}</inwestycja>\n`
    xml += `    <metraz_m2>${m.metraz_m2}</metraz_m2>\n`
    xml += `    <cena_brutto>${m.cena_brutto}</cena_brutto>\n`
    xml += `    <cena_brutto_m2>${m.cena_brutto_m2}</cena_brutto_m2>\n`
    xml += `    <status>${m.status}</status>\n`
    xml += `    <ogrodek_m2>${m.ogrodek_m2}</ogrodek_m2>\n`
    xml += `    <parking_miejsca>${m.parking_miejsca}</parking_miejsca>\n`

    // Koszty dodatkowe
    if (m.kosztyDodatkowe?.length > 0) {
      xml += `    <koszty_dodatkowe>\n`
      m.kosztyDodatkowe.forEach((k) => {
        xml += `      <koszt>\n`
        xml += `        <nazwa>${k.nazwa}</nazwa>\n`
        xml += `        <cena>${k.cena}</cena>\n`
        xml += `      </koszt>\n`
      })
      xml += `    </koszty_dodatkowe>\n`
    }

    // Historia cen
    if (m.historiaCen?.length > 0) {
      xml += `    <historia_cen>\n`
      m.historiaCen.forEach((h) => {
        xml += `      <pozycja>\n`
        xml += `        <data>${h.data}</data>\n`
        xml += `        <cena>${h.cena}</cena>\n`
        xml += `      </pozycja>\n`
      })
      xml += `    </historia_cen>\n`
    }

    xml += `  </mieszkanie>\n`
  })

  xml += `</mieszkania>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
