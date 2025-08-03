import { ReviewProps } from "@/interfaces/index";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center mb-3">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover"
                onError={(e) => {
                  // Fallback to a default avatar if image fails to load
                  e.currentTarget.src = '/assets/default-avatar.png';
                }}
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'fill-current' : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{review.rating} stars</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
      
      {reviews.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No reviews yet. Be the first to review this property!
        </p>
      )}
    </div>
  );
};

export default ReviewSection;
