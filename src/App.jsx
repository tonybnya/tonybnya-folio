import Navbar from "./components/Navbar";
import { Hero, Skills, Projects, Contact, Footer } from "./sections";

const App = () => (
  <main className="relative">
    <Navbar />

    <section className="xl:padding-1 wide:padding-r padding-b bg-pale-blue">
      <Hero />
    </section>

    <section className="padding">
      <Skills />
    </section>

    <section className="padding">
      <Projects />
    </section>

    <section className="padding">
      <Contact />
    </section>

    <section className="padding padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
