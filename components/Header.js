import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / nazwa */}
        <h1 className="text-3xl font-bold tracking-wide">
          Mis-Bud
        </h1>

        {/* Menu */}
        <nav className="space-x-6 text-lg">
          <a href="/" className="hover:underline">Strona główna</a>
          <a href="/oferta" className="hover:underline">Oferta</a>
          <a href="/kontakt" className="hover:underline">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
