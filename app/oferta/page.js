const lokale = [
  { nr: 1,  adres: "25A/1", metraz: "115.78 m²", cena: "910 000 zł", status: "wolny", ogrodek: "35m²", parking: "2 miejsce" },
  { nr: 2,  adres: "25A/2", metraz: "116.59 m²", cena: "910 000 zł", status: "zarezerwowany", ogrodek: "35m²", parking: "2 miejsca" },
  { nr: 3,  adres: "25B/1", metraz: "116.59 m²", cena: "910 000 zł", status: "wolny", ogrodek: "35m²", parking: "2 miejsca" },
  { nr: 4,  adres: "25B/2", metraz: "116.59 m²", cena: "910 000 zł", status: "wolny", ogrodek: "35m²", parking: "2 miejsca" },
  { nr: 5,  adres: "25C/1", metraz: "116.59 m²", cena: "910 000 zł", status: "wolny", ogrodek: "35m²", parking: "2 miejsca" },
  { nr: 6,  adres: "25C/2", metraz: "115.78 m²", cena: "985 000 zł", status: "wolny", ogrodek: "105m²", parking: "2 miejsca" },
]

export default function OfertaPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Oferta segmentów przy ul. 11 Listopada 25 w Markach</h2>

      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Nr lokalu</th>
            <th className="p-3">Metraż</th>
            <th className="p-3">Cena</th>
            <th className="p-3">Status</th>
            <th className="p-3">Ogródek</th>
            <th className="p-3">Miejsca postojowe</th>
          </tr>
        </thead>
        <tbody>
          {lokale.map((lokal) => (
            <tr key={lokal.nr} className={lokal.status === "wolny" ? "bg-green-50" : "bg-red-50"}>
              <td className="p-3 text-center">{lokal.adres}</td>
              <td className="p-3 text-center">{lokal.metraz}</td>
              <td className="p-3 text-center">{lokal.cena}</td>
              <td className="p-3 text-center">{lokal.status}</td>
              <td className="p-3 text-center">{lokal.ogrodek}</td>
              <td className="p-3 text-center">{lokal.parking}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Standard */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Standard wykończenia</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Podłogi przygotowane pod położenie paneli lub parkietu</li>
          <li>Ściany otynkowane - tynk gipsowy</li>
          <li>Nowoczesne okna trzyszybowe</li>
          <li>ocieplone i wykończone płytą gipsową poddasze użytkowe</li>
          <li>Instalacja elektryczna, wodno-kanalizacyjna, światłowodowa</li>
          <li>Ogrzewanie podłogowe na całym przyziemiu i w łazienkach</li>
          <li>zamontowany piec CO 2-funkcyjny z wbudowanym zasobnikiem wodnym</li>

        </ul>
      </section>

      {/* Galeria */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Galeria inwestycji</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
<img src="/img/IMG_0055.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0057.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0059.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0063.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0064.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0066.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
          <img src="/img/IMG_0072.jpg" alt="" className="rounded-lg shadow-md hover:scale-105 transition"/>
        </div>
      </section>
    </div>
  )
}
          