import Image from "next/image";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  price: string | number;
  description?: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  imageSrc,
  altText,
  title,
  price,
  description,
}: ProductCardProps) {
  return (
    <div className="flex flex-col border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-sm">
      <div className="relative w-full h-64">
        <Image
          src="/vape-3571739.jpg"
          alt={altText}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="p-4 flex flex-col gap-2 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 font-bold text-md">${price}</p>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>
    </div>
  );
}
