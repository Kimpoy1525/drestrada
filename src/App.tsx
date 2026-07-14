import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clinics from './components/Clinics';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clinics />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
