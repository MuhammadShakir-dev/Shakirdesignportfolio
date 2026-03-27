import { shakirHeroPicture } from "../app/data/images";

export default function Pic() {
  return (
    <div className="bg-[#9fe870] overflow-clip relative rounded-[100px] size-full" data-name="PIC">
      <div className="absolute h-[271px] left-[-23px] top-[18px] w-[197px]" data-name="My picture 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.91%] left-[-31.02%] max-w-none top-[-17.91%] w-[131.02%]" src={shakirHeroPicture} />
        </div>
      </div>
    </div>
  );
}