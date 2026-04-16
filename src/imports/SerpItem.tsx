import svgPaths from "./svg-r8q14435xh";
import imgImage30 from "figma:asset/7406c8fab537223de5b161a30153f3e2aff277b2.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">FREITAG lab. ag</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Zürich</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[40px]">
      <div className="aspect-[40/40] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Size=20px, Weight=Regular">
              <div className="absolute inset-[15.63%_6.25%_9.39%_6.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 14.9965">
                  <path d={svgPaths.p3326a000} fill="var(--fill-0, #020617)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyDetails() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo />
      <Frame3 />
    </div>
  );
}

function JobDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">{`Senior UX/UI Solution Designer - E-Commerce & Webshop 100% (w/d/m)`}</p>
      </div>
      <div className="font-['Geist:Regular',sans-serif] font-normal max-h-[58px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-full whitespace-pre-wrap">
        <p className="leading-[1.3] mb-0">Du gestaltest nicht nur unsere Online-Präsenz, du erschaffst digitale Einkaufserlebnisse. In dieser Rolle bist du massgeblich für die Gestaltung unserer digitalen Storefronts verantwortlich. Du übersetzt komplexe Geschäftsanforderungen und Kundenbedürfnisse in intuitive, konversionsstarke Design-Lösungen und bildest die Brücke zwischen Business, Design und technischer Entwicklung.</p>
        <p className="leading-[1.3] mb-0">&nbsp;</p>
        <p className="leading-[1.3] mb-0">&nbsp;</p>
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
    </div>
  );
}

function ContainerTags() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center py-[2px] relative shrink-0 w-full" data-name="Container / Tags">
      <div className="bg-[#f8fafc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Clock">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2d8df900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">80-100%</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/FileText">
          <div className="absolute inset-[9.38%_15.63%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
              <path d={svgPaths.p9b6bef0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">Part-time</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Wallet">
          <div className="absolute inset-[12.5%_9.38%_18.75%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 11">
              <path d={svgPaths.p31b5d180} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">90k-122k</p>
        </div>
      </div>
      <div className="bg-[#f7ffe4] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Sparkle">
          <div className="absolute inset-[4.17%_5.19%_5.19%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5025 14.5025">
              <path d={svgPaths.p3eb9400} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[0px] text-center whitespace-nowrap">
          <p className="leading-[1.4] text-[12px]">Half-fare train card</p>
        </div>
      </div>
    </div>
  );
}

function Lightning() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, #020617)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">3 days ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <ContainerTags />
      <PostInfo />
    </div>
  );
}

export default function SerpItem() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="SERP-item">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <CompanyDetails />
        <JobDetails />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}