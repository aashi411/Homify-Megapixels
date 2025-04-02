import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
}

function TestimonialCard({
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  author = "XYZ",
  company = "ABC Company",
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative p-6 rounded-3xl bg-[#e6f4f4] shadow-sm">
        {/* Quote marks */}
        <div className="absolute top-4 left-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 34H5.5C4.11929 34 3 32.8807 3 31.5V25.5C3 24.1193 4.11929 23 5.5 23H11.5C12.8807 23 14 24.1193 14 25.5V29.5C14 31.9853 11.9853 34 9.5 34H9"
              stroke="#8DD3C7"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M28 34H21.5C20.1193 34 19 32.8807 19 31.5V25.5C19 24.1193 20.1193 23 21.5 23H27.5C28.8807 23 30 24.1193 30 25.5V29.5C30 31.9853 27.9853 34 25.5 34H25"
              stroke="#8DD3C7"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Avatar circle */}
        <div className="absolute top-4 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
          {avatarUrl ? (
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`${author}'s avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : null}
        </div>

        {/* Quote text */}
        <div className="mt-12 mb-6 text-gray-700 text-sm leading-relaxed">
          {quote}
        </div>

        {/* Author and company */}
        <div className="text-right">
          <p className="font-medium text-gray-800">{author}</p>
          <p className="text-xs text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-4 px-5">
      <p className="font-[700] text-[58px] leading-[73px] tracking-[6%]">
        Hear from Students Who Found Their Perfect Stay!
      </p>

      <div className="max-w-screen mx-8">
        <Carousel>
          <CarouselContent>
            {/* Generate 30 cards */}
            {new Array(30).fill(null).map((_, index) => {
              return (
                <CarouselItem className="basis-1/3" key={index}>
                  <TestimonialCard
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                    author="XYZ"
                    company="ABC Company"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
