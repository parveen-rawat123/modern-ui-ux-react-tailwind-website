import { smallSphere,stars} from "../assets"
import Heading from "./Heading"
import Section from "./Section"
import Pricinglist from "./Pricinglist.jsx"
import {LeftLine,RightLine} from  './design/Pricing'
const Pricing = () => {
  return (
        <Section className="overflow-hidden" id="pricing">
         <div className="contauber relative z-2 ">
          <div className="hidden relative mb-[6.5rem] lg:flex justify-center">
            <img src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere" />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars" />
            </div>
          </div>
          <Heading
          tag="get started with Brainwave"
          title="pay once , use forever"
          />
          <div className="relative ">
            <Pricinglist/>
            <LeftLine/>
            <RightLine/>
          </div>
          <div className="flex justify-center mt-10">
 <a href="" className="text-xs font-code font-bold border-b  tracking-wider uppercase">See the full details</a>
          </div>
         </div>
        </Section>
    )
}

export default Pricing
