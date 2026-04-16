function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] w-full">Overview</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full">The search button is a floating button anchored to the bottom of the screen. It summarizes the active search state and responds to scroll direction, moving out of the way while browsing and returning to full context when the user scrolls up.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[32px] w-full">States</p>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] w-full">
        <p className="leading-[1.3] mb-0 text-[18px] whitespace-pre-wrap">
          The search button has two states:
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <ul className="leading-[1.3] list-disc text-[18px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Geist:Bold',sans-serif] font-bold">Expanded</span>
            <span>
              {` (default): Shows the active query on line 1 and location + filter count on line 2. This is the resting state when the page loads or when the user scrolls up.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Geist:Bold',sans-serif] font-bold">Compact</span>
            {` (scroll triggered): Collapses to a single line reading "Modify search". Triggered after 60px of continuous downward scroll. Signals that search is available without demanding attention. The collapsed state is also used as the “empty state” (no job title, filter, or location).`}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[32px] w-full">Content Rules</p>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] w-full">
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Geist:Bold',sans-serif] font-bold leading-[1.3] text-[18px]">Expanded State:</span>
          </li>
          <ul>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Icon: 20px (always MagnifyingGlass)</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Line 1:</span>
            </li>
            <ul>
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">Display active query text, truncate with ellipsis.</span>
              </li>
              <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">If no query text, replace with fixed text: All jobs (en) / Tous les jobs (fr) / Alle jobs (de)</span>
              </li>
            </ul>
          </ul>
        </ul>
        <p className="leading-[1.3] mb-0 text-[18px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.3] text-[18px]">
              Line 2: Location and filters text blocks, horizontally stacked. Truncate location with ellipsis before the filter count; the filter count never truncates.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
          <ul>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Location:</span>
            </li>
            <ul className="mb-0">
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">No location: Don’t display location text block.</span>
              </li>
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">1 location: Display the location name.</span>
              </li>
              <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">
                  {`> 1 locations: Display location names, separated by a comma (Zurich, Lausanne, Geneva).`}
                  <br aria-hidden="true" />
                  <br aria-hidden="true" />
                </span>
              </li>
            </ul>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Filters count:</span>
            </li>
            <ul>
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">No filters: Don’t display location text block.</span>
              </li>
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*3)]">
                <span className="leading-[1.3] text-[18px]">{`> 1 filter: Display the number of active filters (+1 filter, to +99 filters).`}</span>
              </li>
              <ul>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*4)]">
                  <span className="leading-[1.3] text-[18px]">Translations:</span>
                </li>
                <ul>
                  <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*5)]">
                    <span className="leading-[1.3] text-[18px]">+1 filter (en) / +1 filtre (fr) / +1 Filter (de)</span>
                  </li>
                  <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*5)]">
                    <span className="leading-[1.3] text-[18px]">+X filters (en) / +X filtres (fr) / +X Filter (de)</span>
                  </li>
                </ul>
              </ul>
            </ul>
          </ul>
        </ul>
        <p className="leading-[1.3] mb-0 text-[18px] whitespace-pre-wrap">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Geist:Bold',sans-serif] font-bold leading-[1.3] text-[18px]">Collapsed State:</span>
          </li>
          <ul>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Icon: 20px (always MagnifyingGlass)</span>
            </li>
            <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">{`Line 1 compact: always "Modify search" (en) / “Modifier recherche” (fr) / “Suche ändern” (de)`}</span>
            </li>
            <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
              <span className="leading-[1.3] text-[18px]">Line 2 is absent in compact state</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] w-full">Interaction</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full">Tapping the button in either state opens the filter drawer. There is no distinction between states; the destination and drawer are the same.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[32px] w-full">Scroll Animation Logic</p>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[1.3] mb-0">The search button:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.3]">Shrinks after 60px cumulative downward scroll</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.3]">Expands immediately on any upward scroll</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.3]">Accumulator resets on direction change</span>
          </li>
        </ul>
      </div>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[18px] w-full whitespace-pre-wrap">
        {`Animation: `}
        <br aria-hidden="true" />
        Single fluid transition, all properties animate together at 380ms ease-in-out. Width, height, padding, and subtitle collapse simultaneously; the button contracts in all directions at once rather than sequencing.
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[700px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[32px] w-full">Placement</p>
      <div className="font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[1.3] mb-0">The search button:</p>
        <ul>
          <ul className="list-disc">
            <li className="mb-0 ms-[54px]">
              <span className="leading-[1.3]">Is mobile-only and does not exist on desktop or tablet</span>
            </li>
            <li className="mb-0 ms-[54px]">
              <span className="leading-[1.3]">Is centered horizontally with a fixed distance from the bottom = 24px</span>
            </li>
            <li className="ms-[54px]">
              <span className="leading-[1.3]">Has a bottom offset that accounts for the iOS safe area inset</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 text-[#020617] w-[1401px]">
      <p className="font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[64px] whitespace-nowrap">Search Button</p>
      <Frame1 />
      <Frame2 />
      <Frame4 />
      <Frame3 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function SearchButtonDocumentation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center justify-center px-[64px] py-[120px] relative size-full" data-name="Search button / Documentation">
      <Frame />
      <div className="h-0 relative shrink-0 w-[1400px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1">
            <line id="Line 7" stroke="var(--stroke-0, #CBD5E1)" x2="1400" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[1400px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 1">
            <line id="Line 7" stroke="var(--stroke-0, #CBD5E1)" x2="1400" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}