import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/footer/page";
import Information from "@/components/Introduction/page";
import Navbar from "@/components/Navbar/page";
import Works from "@/components/Work/page";


export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Information />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
