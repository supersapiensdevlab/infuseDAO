import Footer from "./Componants/Footer";
import Hero from "./Componants/Hero";
import Navbar from "./Componants/Navbar";
import Section1 from "./Componants/Section1";
import Section2 from "./Componants/Section2";
import Section3 from "./Componants/Section3";
import Section4 from "./Componants/Section4";

export default function App() {
  return (
    <div className="bg-[url('./Assets/bg.svg')] w-screen h-fit relative bg-cover">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
