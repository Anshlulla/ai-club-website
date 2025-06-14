
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

// Responsive number of slides shown, based on screen size
// Can override with slidesPerView if needed
type CarouselRowProps = {
  items: React.ReactNode[];
  slidesPerView?: { base?: number; sm?: number; md?: number; lg?: number };
  className?: string;
  itemClassName?: string;
  showArrowsAbove?: boolean;
};

const breakpoints = [
  { minWidth: 1024, slides: 3 }, // lg
  { minWidth: 768, slides: 2 },  // md
  { minWidth: 0, slides: 1 },    // base
];

// Helper to get slidesPerView for current screen width
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

  // Only show carousel & arrows if more items than slides available
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
  // If few items, just list them side-by-side without carousel
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${slidesPerView.md ?? 2} lg:grid-cols-${slidesPerView.lg ?? 3} gap-6 justify-items-center ${className ?? ""}`}
    >
      {items.map((elem, i) => (
        <div key={i} className={itemClassName}>{elem}</div>
      ))}
    </div>
  );
};

export default CarouselRow;
