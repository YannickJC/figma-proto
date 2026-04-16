import svgPaths from "./svg-wonaqbgh2d";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#cbd5e1] text-[12px] w-full">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px overflow-hidden relative text-ellipsis">
        <p className="leading-[1.4] overflow-hidden text-ellipsis">Zurich, Lausanne, Genève, Biel/Bi</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4]">+99 filters</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[35px] items-start leading-[0] min-h-px min-w-px relative whitespace-nowrap">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white w-full">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">Product manager</p>
      </div>
      <Frame1 />
    </div>
  );
}

export default function SearchButton() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative rounded-[9999px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.09),0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] size-full" data-name="Search button">
      <div aria-hidden="true" className="absolute bg-[#020617] inset-0 pointer-events-none rounded-[9999px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
        <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
            <path d={svgPaths.p397dcfc0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.04)]" />
    </div>
  );
}