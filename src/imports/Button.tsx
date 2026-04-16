export default function Button() {
  return (
    <div className="relative rounded-[12px] size-full" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
          <p className="leading-[1.3]">See more jobs</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}