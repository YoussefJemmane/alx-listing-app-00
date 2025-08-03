import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        
        {/* Left Column - Property Details */}
        <div className="md:col-span-2">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
            {/* Add more images */}
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="mt-4 text-gray-700">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap gap-4 mt-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Section */}
          {property.reviews && (
            <ReviewSection reviews={property.reviews} />
          )}
        </div>

        {/* Right Column - Booking Section */}
        <div className="md:col-span-1">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
