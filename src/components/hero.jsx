import Section from "./Section.jsx";
import Button from "./button.jsx";
import { curve, heroBackground } from "../assets/index.js";
import {robot} from "../assets/index.js"
import  Generating  from "./Generating";
const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25]"
      customPaddings
      id="hero"
    >
      <div className="container relative"
      >
        <div
          className="relative z-1 max-w-[62rem]  
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
        >
          <h2 className="h1 mb-6 mt-10 ">
            {" "}
            Explore the Possibilites of AI Chatting with Brainwave
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full 
                xl:mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h2>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button white>Get Started</Button>
        </div>
        <div className="relative max-w-[23rem] m-auto md:max-w-2xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem">
              <div className="h-[1.rem] bg-n-10 rounded-t-[0.9rem]"/>
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img src={robot} 
                alt="AI" 
                className="w-full scale-[1.7] translate-y-[8%] 
                md:scale-[1]
                md:tranlate-y-[10%]
                lg:-translate-y-[23%]"
                width={1024}
                height={490}
                />
              <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:translate-x-1/2"/>
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:w-[104%]  lg:-top-[166%]">
         <img src={heroBackground} 
                className="w-full" 
                width={1440}
                height={1800}
         alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
