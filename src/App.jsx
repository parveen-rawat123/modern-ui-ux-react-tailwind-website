import ButtonGradient from "./assets/svg/ButtonGradient";
import Hearder from "./components/hearder.jsx"
import Hero from "./components/hero.jsx"
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx"
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Hearder/>
        <Hero/>
            </div>
      <ButtonGradient />
      <Benefits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </>
  );
};

export default App;
