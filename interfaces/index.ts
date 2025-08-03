// Interface for Card component props
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  onClick?: () => void;
}

// Interface for Button component props
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

// Interface for property listing
export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  location: {
    city: string;
    country: string;
    address: string;
  };
  amenities: string[];
  rating: number;
  reviews: number;
  host: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
  availability: {
    startDate: string;
    endDate: string;
  };
}

// Interface for PropertyProps used in components
export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews?: ReviewProps[];
}

// Interface for Review
export interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

