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

