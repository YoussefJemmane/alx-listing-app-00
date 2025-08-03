import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  
  // Calculate number of nights
  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const timeDiff = end.getTime() - start.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysDiff > 0 ? daysDiff : 0;
    }
    return 7; // Default to 7 nights if no dates selected
  };

  const nights = calculateNights();
  const totalPrice = price * nights;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border">
      <h3 className="text-2xl font-semibold">${price}/night</h3>
      
      {/* Date inputs */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <input 
            type="date" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <input 
            type="date" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
          />
        </div>
      </div>

      {/* Pricing breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>${price} x {nights} nights</span>
          <span>${price * nights}</span>
        </div>
        <div className="border-t pt-2 mt-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Reserve button */}
      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300">
        Reserve now
      </button>
      
      <p className="text-center text-sm text-gray-500 mt-3">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;
