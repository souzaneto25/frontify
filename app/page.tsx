import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Businesses from "@/components/Businesses";


export default function Home() {
  return (
    <div className="scroll-snap-y-mandatory text-white">
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Businesses />
      <Footer />
    </div>
  )
}
