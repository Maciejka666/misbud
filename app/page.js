export default function HomePage() {
  return (
  <div
  className="min-h-screen flex items-center justify-center text-center text-white relative"
style={{
  backgroundImage: "url('/img/background.jpg')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
}}

>



      <div className="bg-black/50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Nowoczesne mieszkania w atrakcyjnej lokalizacji w Markach przy ul. 11 listopada</h2>
        <p className="mb-6 text-lg">Znajdź wymarzone mieszkanie dla siebie i swojej rodziny</p>
        <a href="/oferta" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full">
          Zobacz ofertę
        </a>
      </div>
    </div>
  )
}
