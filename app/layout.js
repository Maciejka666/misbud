import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'misbud',
  description: 'Nowoczesne mieszkania od dewelopera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="font-sans bg-gray-50 text-gray-800">
        <Header />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t">
          &copy; {new Date().getFullYear()} Deweloper Prestige
        </footer>
      </body>
    </html>
  )
}

