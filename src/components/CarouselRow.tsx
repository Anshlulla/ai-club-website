
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

// Responsive number of slides shown, based on screen size
type CarouselRowProps = {
  items: React.ReactNode[];
  slidesPerView?: { base?: number; sm?: number; md?: number; lg?: number };
  className?: string;
  itemClassName?: string;
  showArrowsAbove?: boolean;
};

function useSlidesPerView(custom?: CarouselRowProps["slidesPerView"]) {
  const [slides, setSlides] = React.useState(1);

  React.useEffect(() => {
    function update() {
      const width = window.innerWidth;
      let count = custom?.base ?? 1;
      if (custom?.lg && width >= 1024) count = custom.lg;
      else if (custom?.md && width >= 768) count = custom.md;
      else if (custom?.sm && width >= 640) count = custom.sm;
      setSlides(count);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [custom]);
  return slides;
}

const CarouselRow: React.FC<CarouselRowProps> = ({
  items,
  slidesPerView = { base: 1, md: 2, lg: 3 },
  className,
  itemClassName,
  showArrowsAbove = false,
}) => {
  const slides = useSlidesPerView(slidesPerView);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.getBoundingClientRect().width || 320;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.getBoundingClientRect().width || 320;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  if (!items.length) return null;

  // Use carousel mode if more items than view
  if (items.length > slides) {
    return (
      <div className={`relative w-full max-w-7xl mx-auto ${className ?? ""}`}>
        <Carousel 
          className="w-full mx-auto relative"
          opts={{
            align: "start",
            loop: false,
            skipSnaps: false,
            dragFree: false
          }}
        >
          {showArrowsAbove && (
            <div className="flex justify-between mb-3 px-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          )}
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((elem, i) => (
              <CarouselItem
                key={i}
                className={`pl-2 md:pl-4 ${itemClassName ?? ""}`}
                style={{
                  flex: `0 0 calc(100% / ${slides} - 0.5rem)`
                }}
              >
                {elem}
              </CarouselItem>
            ))}
          </CarouselContent>
          {!showArrowsAbove && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
      </div>
    );
  }

  // Fallback: Fixed window with internal horizontal scrolling - only 3 cards visible
  return (
    <div className={`relative w-full max-w-7xl mx-auto ${className ?? ""}`}>
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Scroll left"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Fixed viewport showing exactly 3 cards */}
      <div className="overflow-hidden px-12 md:px-16 py-4 md:py-6">
        <div
          ref={scrollContainerRef}
          className="
            flex flex-row flex-nowrap
            gap-4 md:gap-6
            transition-transform duration-300 ease-out
          "
          style={{
            width: `calc(${items.length} * (320px + 1.5rem))`,
            WebkitOverflowScrolling: "touch"
          }}
        >
          {items.map((elem, i) => (
            <div
              key={i}
              className={`
                shrink-0
                w-80
                ${itemClassName ?? ""}
              `}
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselRow;
