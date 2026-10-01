import Hero from "@/components/Hero";
import SearchProperties from "@/components/SearchProperties";
import FeaturedProperties from "@/components/FeaturedProperties";
import Services from "@/components/Services";
import About from "@/components/About";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchProperties />
      <FeaturedProperties />
      <Services />
      <About />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}