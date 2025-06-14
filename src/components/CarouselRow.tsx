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

  // Use carousel mode if more items than view
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

  // Fallback: all other sections with 1–3 items use the EXACT Resources row UI/layout/behaviour
  // Uniform edge-to-edge gradient background, center snap, horizontal scroll ONLY, always the same height.
  return (
    <div
      className={`relative left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none overflow-x-clip py-0 ${className ?? ""}`}
      style={{
        background: "linear-gradient(90deg,#edf2fb 10%, #fff 90%)"
      }}
    >
      <div
        className="
          flex flex-row flex-nowrap
          overflow-x-auto
          gap-4 sm:gap-6 md:gap-8
          py-4 sm:py-6 md:py-8
          px-4 sm:px-8 md:px-14 lg:px-28
          scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-white
          snap-x snap-mandatory
        "
        style={{
          WebkitOverflowScrolling: "touch",
          minHeight: "1px",
        }}
        tabIndex={0}
        aria-label="carousel row"
      >
        {items.map((elem, i) => (
          <div
            key={i}
            className={`
              shrink-0 snap-center
              w-[min(20rem,90vw)] sm:w-72 md:w-80
              max-w-xs md:max-w-sm
              transition-transform duration-300
              ${itemClassName ?? ""}
            `}
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
