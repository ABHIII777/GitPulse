import Header from "./components/Header"
import Hero from "./components/Hero"
import GeometricGrid from "./components/GeometricGrid"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <Hero />
        <GeometricGrid />
      </main>
      <Footer />
    </div>
  )
}
