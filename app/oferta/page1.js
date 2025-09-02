"use client"
import { useState, useEffect } from "react"
import lokaleData from "@/data/lokale.json"

export default function OfertaPage() {
  const [lokale, setLokale] = useState([])

  useEffect(() => {
    setLokale(lokaleData)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Oferta segmentów przy ul. 11 Listopada 25 w Markach
      </h2>

      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Nr lokalu</th>
            <th className="p-3">Metraż</th>
            <th className="p-3">Cena</th>
            <th className="p-3">Status</th>
            <th className="p-3">Historia cen</th>
          </tr>
        </thead>
        <tbody>
          {lokale.map((lokal) => (
            <tr
              key={lokal.id}
              className={lokal.status === "wolny" ? "bg-green-50" : "bg-red-50"}
            >
              <td className="p-3 text-center">{lokal.adres}</td>
              <td className="p-3 text-center">{lokal.metraz_m2} m²</td>
              <td className="p-3 text-center">{lokal.cena_brutto.toLocaleString()} zł</td>
              <td className="p-3 text-center">{lokal.status}</td>
              <td className="p-3 text-center">
                {lokal.historiaCen?.length > 0 ? (
                  <details className="cursor-pointer">
                    <summary className="text-blue-600 hover:underline">
                      Pokaż historię
                    </summary>
                    <ul className="text-sm mt-2 space-y-1">
                      {lokal.historiaCen.map((h, idx) => (
                        <li key={idx}>
                          {h.data}: <strong>{h.cena.toLocaleString()} zł</strong>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <span className="text-gray-500 italic">brak</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
