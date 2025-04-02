import { Check, Dot, Star } from "lucide-react";
import type React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col h-full">
      <h3 className="text-2xl text-gray-900 mb-2 text-[50.32px] font-[600] leading-[57px]">
        {title}
      </h3>
      <div className="flex flex-row gap-4">
        <p className="text-gray-700 mb-4 max-w-[70%] font-[400] text-[30.94px]">
          {description}
        </p>
        <div className="">{icon}</div>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <div className="px-5 py-10 bg-gradient-to-b from-[#E5F4F7] to-[#93D8DB]">
      <div className="flex flex-col gap-4 justify-center w-full items-center py-10">
        <p className="text-[25.97px] font-[600] leading-[6%]">
          The Better Way to Find Your Stay
        </p>
        <p className="flex flex-row">
          <Dot className="w-3 h-3" />
          <Dot className="w-3 h-3" />
          <Dot className="w-3 h-3" />
          <hr className="w-48 h-1 mt-1 mx-auto border-black border-b-1" />
          <Dot className="w-3 h-3" />
          <Dot className="w-3 h-3" />
          <Dot className="w-3 h-3" />
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Verified Listings */}
        <FeatureCard
          title="Verified Listings"
          description="Genuine properties & real reviews"
          icon={
            <div className="relative w-16 h-16">
              <div className="absolute right-0 top-0 w-10 h-10 bg-gray-200 rounded-full opacity-30"></div>
              <div className="absolute left-0 bottom-0 top-[1] flex flex-col">
                <div className="flex items-center mb-1">
                  <Check className="w-8 h-10 mr-2" />
                  <div className="w-10 h-0.5 bg-gray-400"></div>
                </div>
                <div className="flex items-center mb-1">
                  <Check className="w-8 h-10 mr-2" />
                  <div className="w-10 h-0.5 bg-gray-400"></div>
                </div>
                <div className="flex items-center">
                  <Check className="w-8 h-10 mr-2" />
                  <div className="w-10 h-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          }
        />

        {/* AI-powered recommendations */}
        <FeatureCard
          title="AI-powered recommen-dations"
          description="Personalized hostel suggestions"
          icon={
            <div className="relative w-16 h-16 flex items-center justify-end">
              <Star className="w-8 h-8 stroke-1" />
              <Star className="w-5 h-5 absolute top-0 right-8 stroke-1" />
            </div>
          }
        />
        {/* Virtual Room Tours */}
        <FeatureCard
          title="Virtual Room Tours"
          description="Explore before booking"
          icon={
            <div className="w-16 h-16 flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="5"
                  width="30"
                  height="25"
                  rx="2"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 30C10 30 15 35 20 35C25 35 30 30 30 30"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          }
        />
        {/* Review Summarization */}
        <FeatureCard
          title="Review Summarization"
          description="AI-generated key takeaways"
          icon={
            <div className="w-16 h-16 flex items-center justify-center">
              <div className="relative">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="10"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M25 25L32 32"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 28C18 28 28 23 28 18C28 13 23 8 18 8"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 10L18 8L16 13"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          }
        />

        {/* Flexible Lease & Easy Booking */}
        <FeatureCard
          title="Flexible Lease & Easy Booking"
          description="Seamless digital agreements"
          icon={
            <div className="w-16 h-16 flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="10"
                  width="30"
                  height="20"
                  rx="2"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                />
                <path d="M10 16H30" stroke="#6B7280" strokeWidth="1.5" />
                <circle
                  cx="15"
                  cy="23"
                  r="3"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                />
                <path
                  d="M21 23H25"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
}
