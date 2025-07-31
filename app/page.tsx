import NavBar from "@/components/navbar";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar/>
      <Hero/>
      <Testimonials />
      <Stats />
      <Faq />
      <Footer />
    </main>
  );
}
