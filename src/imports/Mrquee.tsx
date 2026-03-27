import {
  logoSketch,
  logoFramer,
  logoWebflow,
  logoZapier,
  logoRealityComposer,
  logoCoda,
  logoGithub,
  logoFigma,
  logoSlack,
  logoNotion,
} from "../app/data/images";

function Frame() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[51px]" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoSketch} />
      </div>
      <div className="relative shrink-0 size-[51px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoFramer} />
      </div>
      <div className="relative shrink-0 size-[51px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoWebflow} />
      </div>
      <div className="h-[53px] relative shrink-0 w-[51px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoZapier} />
      </div>
      <div className="relative shrink-0 size-[51px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoRealityComposer} />
      </div>
      <div className="h-[50px] relative shrink-0 w-[51px]" data-name="image 41">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={logoCoda} />
      </div>
      <div className="relative shrink-0 size-[51px]" data-name="image 43">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoGithub} />
      </div>
      <div className="h-[51px] relative shrink-0 w-[35px]" data-name="image 42">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={logoFigma} />
      </div>
      <div className="h-[52px] relative shrink-0 w-[51px]" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logoSlack} />
      </div>
      <div className="relative shrink-0 size-[51px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={logoNotion} />
      </div>
    </div>
  );
}

export default function Mrquee() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[49px] py-[32px] relative shadow-[0px_8.979px_52.522px_0px_rgba(0,0,0,0.12)] size-full" data-name="Mrquee">
      <Frame />
    </div>
  );
}