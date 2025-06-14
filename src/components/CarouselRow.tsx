
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
  if (!items.length) return null;

  // Carousel: show & arrows if more items than slides available
  if (items.length > slides) {
    return (
      <div className={className}>
        <Carousel className="w-full max-w-5xl mx-auto relative">
          {showArrowsAbove && (
            <div className="flex justify-between mb-3 px-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          )}
          <CarouselContent>
            {items.map((elem, i) => (
              <CarouselItem
                key={i}
                className={`basis-full sm:basis-1/${slidesPerView.sm ?? 2} md:basis-1/${slidesPerView.md ?? 2} lg:basis-1/${slidesPerView.lg ?? 3} px-2 ${itemClassName ?? ""}`}
                style={{
                  flex: `0 0 calc(100% / ${slides})`
                }}
              >
                {elem}
              </CarouselItem>
            ))}
          </CarouselContent>
          {!showArrowsAbove && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    );
  }

  // Fallback: for 1–3 items (or fewer than slidesPerView), lay them out in a single horizontal scrollable row, edge-to-edge background
  return (
    <div
      className={`relative left-0 right-0 w-screen max-w-none -mx-4 sm:-mx-8 md:-mx-14 lg:-mx-28 px-0 py-0 ${className ?? ""}`}
      style={{
        background: "linear-gradient(90deg,#edf2fb 10%, #fff 90%)", // subtle gradient, adjust as needed
      }}
    >
      <div
        className="flex flex-row flex-nowrap overflow-x-auto gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-14 lg:px-28 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-white"
        style={{ WebkitOverflowScrolling: "touch", minHeight: 1 }}
        tabIndex={0}
        aria-label="carousel row"
      >
        {items.map((elem, i) => (
          <div
            key={i}
            className={`shrink-0 w-64 sm:w-72 max-w-[90vw] sm:max-w-xs md:max-w-sm ${itemClassName ?? ""} transition-transform duration-300`}
            style={{
              scrollSnapAlign: "center"
            }}
          >
            {elem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselRow;

