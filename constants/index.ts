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

