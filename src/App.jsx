import ButtonGradient from "./assets/svg/ButtonGradient";
import Hearder from "./components/hearder.jsx"
import Hero from "./components/hero.jsx"
import Benefits from "./components/Benefits.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Hearder/>
        <Hero/>
            </div>
      <ButtonGradient />
      <Benefits/>
    </>
  );
};

export default App;
