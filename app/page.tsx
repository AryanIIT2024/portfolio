// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main>
//       <Hero />
//       <Skills />
//       <Projects/>
//       <Contact/>
//       <Footer/>
//       </main>
    

//     </>
//   );
// }
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
