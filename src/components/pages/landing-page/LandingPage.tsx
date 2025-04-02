import { Card } from "@heroui/react";
import FeaturesHostel from "./FeaturesHostel";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Testimonials from "./Testimonials";

export default function LandingPage() {
  return (
    <>
      <div className="flex relative flex-col">
        {/* Put the greenish color on top of the image */}
        <img
          src="/landing-banner.png"
          alt="Landing Page Image"
          className="w-full"
        />
        <div className="w-full h-full bg-[#2D555DB8] absolute opacity-[0.72]"></div>

        {/* Added the text */}
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-[10%]">
          <p className="font-[600] text-[63.18px] leading-[93px] text-[#F9F9F9]">
            Find Your Perfect Stay Hassle-Free & Personalized!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[#FFFFFF] font-[600] text-[32.18px] leading-[47px]">
                Discover the best hostels and PGs tailored for college students.
                Safe, affordable, and comfortable stays—just a click away!
              </p>
              <button className="px-8 py-2 bg-[#1F323F] text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                Explore Now!
              </button>
            </div>
            <div>
              <Card className="border-none max-w-fit" radius="lg">
                <img
                  alt="Woman listing to music"
                  className="object-cover"
                  height={395}
                  src="/room-image.png"
                  width={395}
                />
              </Card>
            </div>
          </div>
        </div>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <Hero1 />
        <Hero2 />
        <div className="h-full flex flex-col gap-10">
          <FeaturesHostel />
          <div className="border-b px-5"></div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}
