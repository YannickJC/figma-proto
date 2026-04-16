import svgPaths from "./svg-j2wvmpu4w5";
import imgImage30 from "figma:asset/3cf2c92acf1c636a6994ba13b2dac45c2eaa99bc.png";
import imgMap from "figma:asset/c5ecc3a6c8273d1c3d8c9c82772788914dde3024.png";
import imgImage31 from "figma:asset/fa2dee19260044095edde95d2042c87d5f2c398e.png";

function Frame149() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="content-stretch flex gap-[4px] h-[44px] items-center relative shrink-0 w-full" data-name="Breadcrumb">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Atom/breadcrumb/category">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              <p className="leading-[1.3]">Root</p>
            </div>
          </div>
          <div className="h-[21px] relative shrink-0 w-[8px]" data-name="Atom/breadcrumb/separator">
            <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#64748b] text-[16px] whitespace-nowrap">
              <p className="leading-[21px]">/</p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Atom/breadcrumb/category">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              <p className="leading-[1.3]">Category1</p>
            </div>
          </div>
          <div className="h-[21px] relative shrink-0 w-[8px]" data-name="Atom/breadcrumb/separator">
            <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#64748b] text-[16px] whitespace-nowrap">
              <p className="leading-[21px]">/</p>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Atom/breadcrumb/category">
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
              <p className="leading-[1.3]">...</p>
            </div>
          </div>
          <div className="h-[21px] relative shrink-0 w-[8px]" data-name="Atom/breadcrumb/separator">
            <div className="absolute flex flex-col font-['Geist:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[#64748b] text-[16px] whitespace-nowrap">
              <p className="leading-[21px]">/</p>
            </div>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">
            <p className="leading-[1.3]">Category3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Salt. SA</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame20 />
      </div>
    </div>
  );
}

function CompanyInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[40px]">
      <div className="aspect-[40/40] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Size=20px, Weight=Regular">
              <div className="absolute inset-[45.31%_18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 1.875">
                  <path d={svgPaths.pae33500} fill="var(--fill-0, #020617)" id="Vector" />
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
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[64px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo />
      <Frame130 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Clock">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p1ba61200} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">80-100%</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/FileText">
        <div className="absolute inset-[9.38%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 16.25">
            <path d={svgPaths.p22c8cb80} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">Permanent</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MapPin">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 17.4998">
            <path d={svgPaths.p38861980} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">Zurich</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/Wallet">
        <div className="absolute inset-[12.5%_9.38%_18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.625 13.75">
            <path d={svgPaths.p36c03ef0} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">10k-35k/year</p>
      </div>
    </div>
  );
}

function TagChevron() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="TagChevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="TagChevron">
          <path d={svgPaths.p2ecf5f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0">
      <TagChevron />
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">IT/Telecom</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/CircleHalf">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p3ea27100} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative self-stretch text-[#020617] text-[14px]">
        <p className="leading-[1.3]">FR · DE</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="gap-x-[8px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full">
      <Frame23 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function PostInfo() {
  return (
    <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Post Info">
      <div className="flex flex-col justify-center relative shrink-0 text-[#64748b]">
        <p className="leading-[1.4]">Posted 2 days ago</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#64748b]">
        <p className="leading-[1.4]">·</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#067537]">
        <p className="leading-[1.4]">Actively recruiting</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <CompanyDetails />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[20px] w-full">
        <p className="leading-[1.3]">Mitarbeiter*in Facility / Anlagenunterhalt / Technischer Dienst (m/w/d) 100%</p>
      </div>
      <Frame135 />
      <PostInfo />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#9f0] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Sparkle">
        <div className="absolute inset-[4.17%_5.19%_5.19%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5025 14.5025">
            <path d={svgPaths.p2ecef980} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">Job summary</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] w-full">
        <p className="leading-[1.3]">Manor seeks a skilled Facility Technician for equipment upkeep in Hochdorf, requiring expertise in mechanics, electrics, IT, and German.</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame26 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame136 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
      <Frame134 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame133 />
    </div>
  );
}

function Toolbox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Toolbox">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Toolbox">
          <path d={svgPaths.p2b468100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame119() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center relative rounded-[8px] row-1 self-stretch shrink-0 w-[20px]">
      <Toolbox />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px relative text-[#020617] text-[16px]">Required Skills and Experience</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="col-[1/span_2] justify-self-stretch relative row-2 self-start shrink-0">
      <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] pl-[4px] relative size-full text-[#020617] text-[16px]">
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Completed bank apprenticeship with advanced training or a university degree.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">In-depth knowledge of asset servicing and strong client management abilities.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Fluent in German with excellent English communication skills.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <Frame119 />
      <Frame29 />
      <Frame120 />
    </div>
  );
}

function ListChecks() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ListChecks">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ListChecks">
          <path d={svgPaths.p2415e330} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-start relative rounded-[8px] row-1 self-stretch shrink-0">
      <ListChecks />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px relative text-[#020617] text-[16px]">Key Responsibilities</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="col-[1/span_2] justify-self-stretch relative row-2 self-start shrink-0">
      <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] pl-[4px] relative size-full text-[#020617] text-[16px]">
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Oversee major institutional clients in Global Custody and Private Label Funds.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Act as the main contact between clients and internal teams across different locations.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Create a webpage tailored for B2B customers.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <Frame121 />
      <Frame32 />
      <Frame122 />
    </div>
  );
}

function SketchLogo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SketchLogo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SketchLogo">
          <path d={svgPaths.p16428f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-start relative rounded-[8px] row-1 self-stretch shrink-0">
      <SketchLogo />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px relative text-[#020617] text-[16px]">Key benefits</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <Frame36 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="col-[1/span_2] justify-self-stretch relative row-2 self-start shrink-0">
      <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] pl-[4px] relative size-full text-[#020617] text-[16px]">
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Option to work from home two days per week.</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 w-full">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[1.3]">Cafeteria with a beautiful lake view.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[__fit-content(100%)_minmax(0,1fr)] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <Frame123 />
      <Frame35 />
      <Frame124 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
              <line id="Line 4" opacity="0.4" stroke="var(--stroke-0, #1E293B)" x2="319" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame28 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
              <line id="Line 4" opacity="0.4" stroke="var(--stroke-0, #1E293B)" x2="319" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame31 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
              <line id="Line 4" opacity="0.4" stroke="var(--stroke-0, #1E293B)" x2="319" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame34 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f7ffe4] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
        <Tag />
        <Frame132 />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame24 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[12px] w-full">
        <p className="leading-[1.4]">This summary was created by AI based on the job description and might have inaccuracies. Please refer to the full job ad below.</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/MapPin">
        <div className="absolute inset-[6.25%_15.63%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 20.9998">
            <path d={svgPaths.p34ccd800} fill="var(--fill-0, #475569)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.3] min-h-px min-w-px relative">
      <p className="relative shrink-0 text-[#475569] text-[14px] w-full">Location</p>
      <p className="relative shrink-0 text-[#020617] text-[16px] w-full">Pfingstweidstrasse 60b, 8005 Zürich</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame125 />
      <Frame42 />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="House">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="House">
          <path d={svgPaths.p2d56cd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[8px] shrink-0">
      <House />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f7ffe4] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Sparkle">
        <div className="absolute inset-[4.17%_5.19%_5.19%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5025 14.5025">
            <path d={svgPaths.p3eb9400} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">2 days a week</p>
      <Tag1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#475569] text-[14px] w-full">Homeoffice</p>
      <Frame44 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame126 />
      <Frame43 />
    </div>
  );
}

function Path() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Path">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Path">
          <path d={svgPaths.p21a31380} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[8px] shrink-0">
      <Path />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.3] min-h-px min-w-px relative">
      <p className="relative shrink-0 text-[#475569] text-[14px] w-full">Commute time</p>
      <p className="decoration-solid relative shrink-0 text-[#020617] text-[16px] underline w-full">Calculate</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame127 />
      <Frame45 />
    </div>
  );
}

function ContainerMap() {
  return (
    <div className="h-[180.5px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container / Map">
      <div className="absolute left-[-127px] size-[616px] top-[-203px]" data-name="Map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap} />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">See all jobs in [location]</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame47 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
        <p className="leading-[1.3]">Work location(s)</p>
      </div>
      <Frame19 />
      <Frame138 />
      <Frame139 />
      <ContainerMap />
      <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame46 />
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Wallet">
        <div className="absolute inset-[12.5%_9.38%_18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 16.5">
            <path d={svgPaths.p200e7700} fill="var(--fill-0, #475569)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-start leading-[1.3] min-h-px min-w-px relative self-stretch">
      <p className="relative shrink-0 text-[#475569] text-[14px] w-full">Salary (estimated)</p>
      <p className="relative shrink-0 text-[#020617] text-[16px] w-full">80k-100k CHF/year</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame128 />
      <Frame49 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-h-px min-w-px relative text-[#1736b6] text-[14px]" data-name="Text Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 w-full">
        <p className="leading-[1.3]">This salary is an estimation</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[1.3]">Not supplied by the company. Estimated for full workload using data from jobs.ch and partners, updated regularly.</p>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
        <p className="leading-[1.3]">Salary</p>
      </div>
      <Frame48 />
      <div className="bg-[#eef5ff] content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Infobox">
        <TextContainer />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <path d={svgPaths.p3d646d70} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f7ffe4] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Sparkle">
        <div className="absolute inset-[4.17%_5.19%_5.19%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5025 14.5025">
            <path d={svgPaths.p3eb9400} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Image />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Cantine with lake view</p>
      </div>
      <Tag2 />
    </div>
  );
}

function House1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="House">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="House">
          <path d={svgPaths.p3d5f1bf0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f7ffe4] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/Sparkle">
        <div className="absolute inset-[4.17%_5.19%_5.19%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5025 14.5025">
            <path d={svgPaths.p3eb9400} fill="var(--fill-0, #020617)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <House1 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Working from home</p>
      </div>
      <Tag3 />
    </div>
  );
}

function Train() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Train">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Train">
          <path d={svgPaths.p192ec072} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Train />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Half-fare train pass</p>
    </div>
  );
}

function GraduationCap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GraduationCap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="GraduationCap">
          <path d={svgPaths.p143eb100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <GraduationCap />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Training</p>
      </div>
    </div>
  );
}

function GraduationCap1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GraduationCap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="GraduationCap">
          <path d={svgPaths.p143eb100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <GraduationCap1 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Training budget per employee</p>
    </div>
  );
}

function Medal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Medal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Medal">
          <path d={svgPaths.p6346f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Medal />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Great Place to Work Award</p>
    </div>
  );
}

function PiggyBank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PiggyBank">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PiggyBank">
          <path d={svgPaths.p2d1fc200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <PiggyBank />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Employee discount</p>
    </div>
  );
}

function ClockCountdown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ClockCountdown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ClockCountdown">
          <path d={svgPaths.p9e63480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <ClockCountdown />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Flexible working hours</p>
    </div>
  );
}

function Ticket() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Ticket">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Ticket">
          <path d={svgPaths.p2ee80100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Ticket />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">REKA checks</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[343px]">
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
        <p className="leading-[1.3]">Benefits</p>
      </div>
      <Frame141 />
      <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
          <p className="leading-[1.3]">See more benefits</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#64748b] text-[12px] w-full">Language</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#64748b] text-[12px] w-full">Min. Level required</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full">
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(7,fit-content(100%))] px-[8px] py-[12px] relative size-full">
        <Frame60 />
        <p className="col-2 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-3 self-start shrink-0 text-[#020617] text-[16px]">Fluent</p>
        <p className="col-2 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-5 self-start shrink-0 text-[#020617] text-[16px]">Advanced</p>
        <Frame61 />
        <p className="col-1 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-7 self-start shrink-0 text-[#020617] text-[16px]">French</p>
        <p className="col-1 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-3 self-start shrink-0 text-[#020617] text-[16px]">German</p>
        <p className="col-1 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-5 self-start shrink-0 text-[#020617] text-[16px]">{`English `}</p>
        <p className="col-2 font-['Geist:Regular',sans-serif] font-normal justify-self-stretch leading-[1.3] relative row-7 self-start shrink-0 text-[#020617] text-[16px]">Basic</p>
        <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                <line id="Line 4" stroke="var(--stroke-0, #F1F5F9)" x2="337" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-4 self-start shrink-0" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                <line id="Line 4" stroke="var(--stroke-0, #F1F5F9)" x2="337" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-6 self-start shrink-0" data-name="Divider">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                <line id="Line 4" stroke="var(--stroke-0, #F1F5F9)" x2="337" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full">
        <p className="leading-[1.3]">Language(s)</p>
      </div>
      <Frame59 />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Phone">
          <path d={svgPaths.pcc49600} fill="var(--fill-0, #020617)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">0790000000</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Phone />
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame66 />
      </div>
    </div>
  );
}

function EnvelopeSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="EnvelopeSimple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="EnvelopeSimple">
          <path d={svgPaths.p43bc400} fill="var(--fill-0, #020617)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Write an email</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame70 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <EnvelopeSimple />
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame69 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Recruiter name</p>
      <Frame65 />
      <Frame68 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#020617] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[28px] text-center text-white whitespace-nowrap">JC</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Frame64 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full">
        <p className="leading-[1.3]">Decription</p>
      </div>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#020617] text-[16px] w-full">
        <p className="leading-[1.3] mb-0">Hochdorf | Vollzeit | 100% | unbefristet | per sofort</p>
        <p className="leading-[1.3] mb-0">Jeder Besuch ist etwas Besonderes – und genau daran richten wir unseren Service aus. Mit Teamgeist, Agilität und echter Kundennähe gestalten wir bei Manor das Nr. 1 Warenhaus für den Alltag, in unseren Läden genauso wie online. Du liebst ein dynamisches Umfeld und möchtest deine Stärken einbringen? Dann gestalte mit uns das Einkaufserlebnis von morgen!</p>
        <p className="leading-[1.3] mb-0">Zur Verstärkung unseres Teams im Bereich Facility/Anlagenunterhalt suchen wir per sofort, am Standort Hochdorf, eine*n motivierte*n und engagierte*n Mitarbeiter*in Facility, 100%.</p>
        <p className="leading-[1.3] mb-0">Deine Verantwortung</p>
        <p className="leading-[1.3] mb-0">Du gewährleistest die technische Verfügbarkeit der Anlagen im Tagesgeschäft (Störungsbehebung, Betreuung und Wartung sowie Instandsetzung unserer Maschinen und Anlagen).</p>
        <p className="leading-[1.3] mb-0">Du führst selbstständig Instandhaltungs- und Instandsetzungsarbeiten an Förderanlagen, Bindeanlagen, Anpassrampen und Toren sowie an Betriebseinrichtungen durch.</p>
        <p className="leading-[1.3] mb-0">Du erledigst allgemeine oder zusätzliche Arbeiten im Zusammenhang mit der Abteilung und unterstützt dein Team beim Fahrzeugunterhalt, den Transportanlagen und der Entsorgung.</p>
        <p className="leading-[1.3] mb-0">Du bist bereit nebst der Tagesarbeit auch alternierenden Pikettdienst und Schichtdienst zu übernehmen.</p>
        <p className="leading-[1.3] mb-0">Du setzt technische Verbesserungsmassnahmen aktiv und pflichtbewusst um.</p>
        <p className="leading-[1.3] mb-0">Dein Profil</p>
        <p className="leading-[1.3] mb-0">Du verfügst idealerweise über eine abgeschlossene Grundausbildung im handwerklichen oder technischen Bereich.</p>
        <p className="leading-[1.3] mb-0">Du bringst bereits Berufserfahrung im Bereich Elektrik oder Mechanik mit.</p>
        <p className="leading-[1.3] mb-0">Du bringst eine hohe Lernbereitschaft mit und hast Freude an einem dynamischen und lebhaften Arbeitsalltag.</p>
        <p className="leading-[1.3] mb-0">Du bist körperlich belastbar und ausdauernd bei der Arbeit.</p>
        <p className="leading-[1.3] mb-0">Du verfügst über gute IT-Kenntnisse inkl. aller gängigen Office-Anwendungen.</p>
        <p className="leading-[1.3] mb-0">Du beherrschst die deutsche Sprache in Wort und Schrift.</p>
        <p className="leading-[1.3] mb-0">Unser Angebot</p>
        <p className="leading-[1.3] mb-0">Personalrabatte von 10 bis 25% auf alle Produktgruppen, inkl. Manora Restaurants und Food Märkte</p>
        <p className="leading-[1.3] mb-0">Aus- und Weiterbildungsprogramme für alle Stufen und Funktionen</p>
        <p className="leading-[1.3] mb-0">5 bis 7 Wochen Ferien</p>
        <p className="leading-[1.3] mb-0">{`3 Wochen bezahlter Vaterschaftsurlaub & bis zu 4 Monate zusätzlicher unbezahlter Mutterschaftsurlaub möglich`}</p>
        <p className="leading-[1.3] mb-0">Sabbatical von 1-6 Monate ab Vollendung des 3. Anstellungsjahres möglich</p>
        <p className="leading-[1.3]">{`Firmeneigene Pensionskasse mit sehr solidem Deckungsgrad und überdurchschnittlicher Verzinsung des Sparguthabens</`}</p>
      </div>
      <Frame62 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
        <p className="leading-[1.3]">Salt. SA</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame72 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame71 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[2px] items-center px-[8px] relative size-full">
          <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
            <p className="leading-[1.3]">Zurich</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function CompanyDetails1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[64px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo1 />
    </div>
  );
}

function TagChevron1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="TagChevron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="TagChevron">
          <path d={svgPaths.p2ecf5f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">IT / Telecommunication</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame75 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TagChevron1 />
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame74 />
      </div>
    </div>
  );
}

function UsersFour() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UsersFour">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UsersFour">
          <path d={svgPaths.p1fa41a00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">500-1000 employees</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame78 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <UsersFour />
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame77 />
      </div>
    </div>
  );
}

function ReadCvLogo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ReadCvLogo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ReadCvLogo">
          <path d={svgPaths.pda05000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">9 offers online</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame81 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ReadCvLogo />
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame80 />
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame73 />
      <Frame76 />
      <Frame79 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full">
        <p className="leading-[1.3]">Company information</p>
      </div>
      <CompanyDetails1 />
      <Frame143 />
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#020617] text-[0px] w-full whitespace-pre-wrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] mb-0 text-[16px]">About Us:</p>
        <p className="leading-[1.3] mb-0 text-[16px]">Mein Luxus Reisen AG is a Super Luxury Car and Limousine Rental Service based in Zürich, Switzerland.</p>
        <p className="leading-[1.3] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.3] mb-0 text-[16px]">We offer High-End Cars and Limousine Rental Services with and without Professional Chauffeur Services for Special Events, Corporate Travel, or Leisure.</p>
        <p className="leading-[1.3] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.3] mb-0 text-[16px]">Mein Luxus Reisen AG stands out in the Luxury Car Rental Industry by providing Exclusive Luxury Vehicles, Excellent Quality, Great Customer Service, and very Competitive Prices.</p>
        <p className="leading-[1.3] mb-0 text-[16px]">Mein Luxus Reisen AG values efficiency, reliability, punctuality, and customer satisfaction, making it a top choice for luxury transportation options in Switzerland.</p>
        <p className="leading-[1.3] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[1.3] mb-0 text-[16px]">We also offer Tour Guides and Tour Managers along with Meet and Greet VIP Services.</p>
        <p className="leading-[1.3] text-[16px]">Our team of specialists provides Swiss Rail Tours, Swiss Mountain Excursions, and Swiss Package Tours, including Coach Excursions and Escorted Coach Package Tours.</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full">
        <p className="leading-[1.3]">Skills</p>
      </div>
    </div>
  );
}

function PuzzlePiece() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PuzzlePiece">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PuzzlePiece">
          <path d={svgPaths.p20a15f80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <PuzzlePiece />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Core skills</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Design system</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame87 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame86 />
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Ai knowledge</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame90 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame89 />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Design hinking</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame93 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame92 />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Communication skills</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame96 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame95 />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_8px] items-center relative shrink-0 w-full">
      <Frame85 />
      <Frame88 />
      <Frame91 />
      <Frame94 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function PuzzlePiece1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PuzzlePiece">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PuzzlePiece">
          <path d={svgPaths.p20a15f80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <PuzzlePiece1 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">Core skills</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Design system</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame101 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame100 />
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Ai knowledge</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame104 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame103 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Design hinking</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame107 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame106 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Communication skills</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 1">
            <line id="Line 5" stroke="var(--stroke-0, #020617)" x2="154" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame110 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pr-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link">
        <Frame109 />
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_8px] items-center relative shrink-0 w-full">
      <Frame99 />
      <Frame102 />
      <Frame105 />
      <Frame108 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame82 />
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[311px]" data-name="Label">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#111] text-[0px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0 text-[14px]">
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3]">Clearly demonstrate technical experience</span>
          <span className="leading-[1.3]">
            <br aria-hidden="true" />
            Specifically highlight the equipment, machines, or systems you have worked with (e.g. conveyor systems, gates, mechanics, electrical work, maintenance, troubleshooting) – practical experience outweighs theory.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </p>
        <p className="text-[14px]">
          <span className="font-['Geist:Bold',sans-serif] font-bold leading-[1.3]">Actively mention shift and on-call duties</span>
          <span className="leading-[1.3]">
            <br aria-hidden="true" />
            Explicitly show that you are familiar with shift work, on-call duties, and physical labour, and that you have no issues with them – this is a key decision factor.
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Label />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] w-[311px]">
        <p className="leading-[1.3]">Top 2 Bewerbungstipps für die Stelle Facility Techniker (m/w/d)</p>
      </div>
      <Frame111 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="bg-[#eef5ff] max-h-[343px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center max-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center max-h-[inherit] p-[16px] relative size-full">
          <div className="bg-[#d9e9ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/PresentationChart">
              <div className="absolute inset-[4.58%_10.03%_11.04%_8.72%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13.5002">
                  <path d={svgPaths.p2bd9f00} fill="var(--fill-0, #1736B6)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1736b6] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[1.4]">Carreer insights</p>
            </div>
          </div>
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">Tesla</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Palo Alto, CA</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function CompanyDetails2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo2 />
    </div>
  );
}

function JobDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[58px] justify-center leading-[0] max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">Mechanical Engineer with a focus on electric vehicle design and development</p>
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">2 weeks ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PostInfo1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">Tesla</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Palo Alto, CA</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function CompanyDetails3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo3 />
    </div>
  );
}

function JobDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[58px] justify-center leading-[0] max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">Mechanical Engineer with a focus on electric vehicle design and development</p>
      </div>
    </div>
  );
}

function Lightning1() {
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning1 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">2 weeks ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PostInfo2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">Tesla</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Palo Alto, CA</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function CompanyDetails4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo4 />
    </div>
  );
}

function JobDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[58px] justify-center leading-[0] max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">Mechanical Engineer with a focus on electric vehicle design and development</p>
      </div>
    </div>
  );
}

function Lightning2() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning2 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">2 weeks ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PostInfo3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">Tesla</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Palo Alto, CA</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function CompanyDetails5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo5 />
    </div>
  );
}

function JobDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[58px] justify-center leading-[0] max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">Mechanical Engineer with a focus on electric vehicle design and development</p>
      </div>
    </div>
  );
}

function Lightning3() {
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning3 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">2 weeks ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PostInfo4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#020617] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[1.3]">Tesla</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-center flex flex-wrap font-['Geist:Regular',sans-serif] font-normal gap-[2px] items-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">Palo Alto, CA</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-ellipsis">
        <p className="leading-[1.3] overflow-hidden text-ellipsis">+ 2 locations</p>
      </div>
    </div>
  );
}

function CompanyInfo6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Company Info">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function CompanyDetails6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Company Details">
      <div className="bg-white relative rounded-[8px] shrink-0 size-[48px]" data-name="Avatar">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="image 30">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <CompanyInfo6 />
    </div>
  );
}

function JobDetails4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Job Details">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold h-[58px] justify-center leading-[0] max-h-[64px] overflow-hidden relative shrink-0 text-[#020617] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.2]">Mechanical Engineer with a focus on electric vehicle design and development</p>
      </div>
    </div>
  );
}

function Lightning4() {
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

function Frame17() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Lightning4 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">Easy apply</p>
      </div>
    </div>
  );
}

function PostInfo5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Post Info">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">2 weeks ago</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
        <p className="leading-[1.4]">·</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PostInfo5 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[18px] w-full">
        <p className="leading-[1.3]">Similar jobs</p>
      </div>
      <div className="bg-white max-w-[640px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="SERP-item">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
            <CompanyDetails2 />
            <JobDetails />
            <Container />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white max-w-[640px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="SERP-item">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
            <CompanyDetails3 />
            <JobDetails1 />
            <Container1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white max-w-[640px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="SERP-item">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
            <CompanyDetails4 />
            <JobDetails2 />
            <Container2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white max-w-[640px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="SERP-item">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
            <CompanyDetails5 />
            <JobDetails3 />
            <Container3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="bg-white max-w-[640px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="SERP-item">
        <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] min-w-[inherit] p-[16px] relative size-full">
            <CompanyDetails6 />
            <JobDetails4 />
            <Container4 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.07),0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
            <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
              <p className="leading-[1.3]">See more similar jobs</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
      <div className="bg-[#f8fafc] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Link button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon/MagnifyingGlass">
          <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2676 16.2676">
              <path d={svgPaths.p397dcfc0} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] min-h-px min-w-px relative text-[#020617] text-[14px]">
          <p className="leading-[1.3]">Frontend developer in San Francisco</p>
        </div>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip pb-[24px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] w-full">
        <p className="leading-[1.2]">Related searches</p>
      </div>
      <Frame129 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] px-[16px] relative size-full">
          <Frame21 />
          <Frame153 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame137 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame140 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame151 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame152 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame131 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame142 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame144 />
          <Frame147 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame148 />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="337" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame150 />
        </div>
      </div>
    </div>
  );
}

function IconButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Icon Button Container">
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Size=20px, Weight=Fill">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p11f90b00} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
          <p className="leading-[1.3]">Change theme</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Size=20px, Weight=Regular">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3ea27100} fill="var(--fill-0, #020617)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[16px] whitespace-nowrap">
          <p className="leading-[1.3]">English</p>
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Terms of Use</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Data privacy notice</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Legal notice</p>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Cookie settings</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">Contact</p>
      </div>
    </div>
  );
}

function TextLinkContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-center py-[12px] relative shrink-0 w-full" data-name="Text Link Container">
      <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
        <Frame112 />
      </div>
      <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
        <Frame113 />
      </div>
      <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
        <Frame114 />
      </div>
      <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
        <Frame115 />
      </div>
      <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
        <Frame116 />
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#020617] text-[14px] whitespace-nowrap">
        <p className="leading-[1.3]">© 2026 JobCloud AG</p>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative size-full">
          <div className="h-[40px] overflow-clip relative shrink-0 w-[121px]" data-name="Logo">
            <div className="absolute inset-[13.29%_4.84%_15.54%_2.71%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.869 28.4691">
                <g id="Vector">
                  <path d={svgPaths.p16b6a900} fill="#020617" />
                  <path d={svgPaths.p2483e9f0} fill="#020617" />
                  <path d={svgPaths.p1d46ff00} fill="#020617" />
                  <path d={svgPaths.p24890500} fill="#020617" />
                  <path d={svgPaths.p247a500} fill="#020617" />
                  <path d={svgPaths.p1ca4d850} fill="#020617" />
                  <path d={svgPaths.pe2f7880} fill="#020617" />
                  <path d={svgPaths.p19436e80} fill="#99FF00" />
                  <path d={svgPaths.p36dab480} fill="var(--fill-0, #020617)" />
                  <path d={svgPaths.p16231980} fill="var(--fill-0, #020617)" />
                  <path d={svgPaths.p18c07a00} fill="var(--fill-0, #020617)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="343" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <IconButtonContainer />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
                  <line id="Line 4" stroke="var(--stroke-0, #E2E8F0)" x2="343" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <TextLinkContainer />
          <div className="content-stretch flex flex-col h-[44px] items-start justify-center px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Link/Standard/No/No">
            <Frame117 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobAdDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] size-full" data-name="Job ad details">
      <div className="bg-white relative shrink-0 w-[375px]" data-name="MainNav">
        <div className="content-stretch flex items-center justify-between overflow-clip p-[8px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Size=20px, Weight=Regular">
              <div className="absolute inset-[21.88%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11.25">
                  <path d={svgPaths.p277b2500} fill="var(--fill-0, #020617)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[32px] overflow-clip relative shrink-0 w-[97px]" data-name="Logo">
            <div className="absolute inset-[13.29%_4.84%_15.54%_2.71%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.6799 22.7753">
                <g id="Vector">
                  <path d={svgPaths.p1374aa00} fill="#020617" />
                  <path d={svgPaths.p3b16a480} fill="#020617" />
                  <path d={svgPaths.p1c23dc40} fill="#020617" />
                  <path d={svgPaths.p261e4500} fill="#020617" />
                  <path d={svgPaths.p18cbb200} fill="#020617" />
                  <path d={svgPaths.p30fe2700} fill="#020617" />
                  <path d={svgPaths.pd846f00} fill="#020617" />
                  <path d={svgPaths.pdae1380} fill="#99FF00" />
                  <path d={svgPaths.p5cde000} fill="var(--fill-0, #020617)" />
                  <path d={svgPaths.p29c4b800} fill="var(--fill-0, #020617)" />
                  <path d={svgPaths.p260b0100} fill="var(--fill-0, #020617)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Size=16px, Weight=Regular">
              <div className="absolute inset-[9.36%_9.34%_12.43%_9.34%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2657 15.6414">
                  <path d={svgPaths.p16626080} fill="var(--fill-0, #020617)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Frame149 />
      <Frame118 />
      <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[375px]" data-name="Footer">
        <MainContainer />
      </div>
    </div>
  );
}