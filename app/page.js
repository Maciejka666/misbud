export default function HomePage() {
  return (
    <div
      className="h-[70vh] flex items-center justify-center text-center text-white relative"
      style={{ backgroundImage: "url('/img/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-black/50 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Nowoczesne mieszkania w atrakcyjnej lokalizacji</h2>
        <p className="mb-6 text-lg">Znajdź wymarzone mieszkanie dla siebie i swojej rodziny</p>
        <a href="/oferta" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full">
          Zobacz ofertę
        </a>
      </div>
    </div>
  )
}
