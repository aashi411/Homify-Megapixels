import { Card } from "@heroui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";

export default function Hero1() {
  return (
    <div className="justify-center items-center grid grid-cols-2 py-16 gap-4 px-5">
      <Carousel className="m-10">
        <CarouselContent>
          {new Array(10).fill(null).map((_, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="border-none w-fit" radius="lg">
                  <img
                    alt="house-img"
                    className="object-cover"
                    // height={40}
                    src={`/house${(index % 2) + 1}.png`}
                    width={500}
                  />
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
        <p className="text-[51.81px] leading-[67.8px] tracking-[8%] font-[600]">
          We Can Help You Feel More Comfortable!
        </p>
        <p className="font-[400] text-[26.81px] leading-[36.8px] tracking-[4%]">
          Finding the perfect hostel or PG has never been easier! We help
          college students discover safe, affordable, and comfortable stays
          tailored to their needs.
        </p>
      </div>
    </div>
  );
}
