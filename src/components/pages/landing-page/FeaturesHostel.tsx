import {
  MapPin,
  MessageCircleQuestion,
  PhoneCall,
  Star,
  ThumbsUp,
} from "lucide-react";

interface PropertyCardProps {
  imageUrl: string;
  propertyName: string;
  rating: number;
  reviewCount: number;
  address: string;
  isTopRated?: boolean;
  onCall?: () => void;
  onEnquiry?: () => void;
}

function PropertyCard({
  imageUrl = "",
  propertyName = "Name of the property",
  rating = 4.7,
  reviewCount = 312,
  address = "Address of the property",
  isTopRated = true,
  onCall = () => console.log("Call now clicked"),
  onEnquiry = () => console.log("Send an enquiry clicked"),
}: PropertyCardProps) {
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-xl shadow-md bg-white ">
      {/* Property Image */}
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={propertyName}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4 space-y-3">
        {/* Top Rated Badge */}
        {isTopRated && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-800 mb-2">
            <Star
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
            />
            <span>Top rated</span>
          </div>
        )}

        {/* Property Name */}
        <div className="flex items-center space-x-2">
          <ThumbsUp className="w-5 h-5 text-gray-800" />
          <h3 className="text-lg font-medium text-gray-800">{propertyName}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <span className="text-sm bg-[#314D60] font-semibold text-white rounded-lg p-1 flex flex-row gap-1 items-center">
            {rating}
            <Star className="w-4 h-4" fill="white" />
          </span>
          <span className="text-gray-500 text-sm">{reviewCount} ratings</span>
        </div>

        {/* Address */}
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span>{address}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button
            className="px-8 py-2  bg-[#314D60] text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex flex-row gap-2 items-center"
            onClick={onCall}
          >
            <PhoneCall className="w-4 h-4 mr-1" />
            Call Now
          </button>

          <button
            className="px-8 py-2  bg-[#314D60] text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex flex-row gap-2 items-center"
            onClick={onEnquiry}
          >
            <MessageCircleQuestion />
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesHostel() {
  return (
    <div className="bg-gradient-to-b from-[#93D8DB] t-[white] px-5 pt-10">
      <p className="font-[600] text-[72px] leading-[100%] tracking-[0%]">
        Featured Hostels & PG&#39;s
      </p>
      <div className="grid grid-cols-3 gap-4 w-full justify-evenly py-10">
        <PropertyCard
          imageUrl={"/room1.png"}
          propertyName="Name of the property"
          rating={4.7}
          reviewCount={312}
          address="Address of the property"
          isTopRated={true}
        />

        <PropertyCard
          imageUrl={"/room2.png"}
          propertyName="Name of the property"
          rating={4.7}
          reviewCount={312}
          address="Address of the property"
          isTopRated={true}
        />
        <PropertyCard
          imageUrl={"/room3.png"}
          propertyName="Name of the property"
          rating={4.7}
          reviewCount={312}
          address="Address of the property"
          isTopRated={true}
        />
      </div>
    </div>
  );
}
