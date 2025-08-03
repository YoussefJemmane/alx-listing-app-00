// Sample property listing for testing purposes
import { PropertyProps } from "../interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Beachfront Paradise",
    rating: 4.7,
    address: {
      city: "Miami",
      country: "USA",
    },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2hmcm9udCUyMGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80",
    description: "A beautiful beachfront property with stunning ocean views. Perfect for a relaxing getaway with modern amenities and direct beach access. This property offers an unforgettable experience with its pristine location and luxurious accommodations.",
    category: ["WiFi", "Free Parking", "Swimming Pool", "Beach Access", "Air Conditioning", "Kitchen"],
    price: 250,
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing place, had a great time! The beach access was incredible and the property was exactly as described. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&q=80",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Beautiful location but a bit pricey. The amenities were great and the host was very responsive. Would stay again!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&q=80",
      },
      {
        name: "Mike Johnson",
        rating: 5,
        comment: "Perfect for our family vacation. The kids loved the pool and we enjoyed the sunset views from the deck.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&q=80",
      },
    ],
  },
];

// API URLs and endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  PROPERTIES: '/properties',
  USERS: '/users',
  BOOKINGS: '/bookings',
  REVIEWS: '/reviews',
};

// Application constants
export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  APP_DESCRIPTION: 'Airbnb clone listing page',
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LANGUAGE: 'en',
  ITEMS_PER_PAGE: 12,
};

// UI Text constants
export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    LOAD_MORE: 'Load More',
    SEARCH: 'Search',
    FILTER: 'Filter',
  },
  LABELS: {
    PRICE_PER_NIGHT: 'per night',
    RATING: 'Rating',
    REVIEWS: 'Reviews',
    AMENITIES: 'Amenities',
    LOCATION: 'Location',
  },
  MESSAGES: {
    LOADING: 'Loading...',
    ERROR: 'Something went wrong. Please try again.',
    NO_RESULTS: 'No properties found.',
    SEARCH_PLACEHOLDER: 'Search properties...',
  },
};

// Theme colors
export const THEME = {
  COLORS: {
    PRIMARY: '#FF5A5F',
    SECONDARY: '#00A699',
    ACCENT: '#FC642D',
    TEXT: '#484848',
    BACKGROUND: '#FFFFFF',
    GRAY: {
      100: '#F7F7F7',
      200: '#EBEBEB',
      300: '#DDDDDD',
      400: '#CCCCCC',
      500: '#999999',
      600: '#767676',
      700: '#484848',
      800: '#222222',
    },
  },
};

// Default images
export const DEFAULT_IMAGES = {
  PLACEHOLDER: '/assets/placeholder-image.svg',
  AVATAR: '/assets/default-avatar.png',
  LOGO: '/assets/logo.png',
};

