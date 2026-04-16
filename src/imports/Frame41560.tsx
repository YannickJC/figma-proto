function Frame() {
  return (
    <div className="bg-[#f1f5f9] flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[8px]">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] min-h-[inherit] p-[12px] relative text-[16px] w-full">
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#020617]">
            <p className="leading-[1.3]">80</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] whitespace-nowrap">
            <p className="leading-[1.3]">Min %</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f1f5f9] flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[8px]">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] min-h-[inherit] p-[12px] relative text-[16px] w-full">
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#020617]">
            <p className="leading-[1.3]">100</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] whitespace-nowrap">
            <p className="leading-[1.3]">Max %</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}