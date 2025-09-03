import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'misbud',
  description: 'Nowoczesne mieszkania od dewelopera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="font-sans bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Header />

        {/* Szerszy układ i elastyczne zdjęcia */}
        <main className="flex-grow max-w-7xl w-full mx-auto p-6">
          {children}
        </main>

        {/* Mniejsza stopka */}
        <footer className="text-center text-xs text-gray-500 py-2 border-t">
          &copy; {new Date().getFullYear()} phu Miś-Bud
        </footer>
      </body>
    </html>
  )
}


