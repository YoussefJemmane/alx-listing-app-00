import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  onClick 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = '/assets/placeholder-image.svg';
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {price}
          </span>
          <span className="text-sm text-gray-500">
            per night
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

