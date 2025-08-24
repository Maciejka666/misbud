import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-700">PHU MIŚ-BUD</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <Link href="/oferta" className="hover:text-blue-600">Oferta</Link>
          <Link href="/kontakt" className="hover:text-blue-600">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
