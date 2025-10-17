import React from "react";
import ProductCard from "./item";

export default function ProductsGrid() {
  const products = [
    {
      imageSrc: "/images/vape1.jpg",
      altText: "Vape Model 1",
      title: "VapEmpire Nova 3000",
      price: 39.99,
      description: "Sleek design, long battery life, and rich flavor.",
    },
    {
      imageSrc: "/images/vape2.jpg",
      altText: "Vape Model 2",
      title: "VapEmpire CloudX",
      price: 49.99,
      description: "Compact yet powerful — built for smooth clouds.",
    },
    {
      imageSrc: "/images/vape3.jpg",
      altText: "Vape Model 3",
      title: "VapEmpire Aero",
      price: 59.99,
      description: "Precision airflow control and premium finish.",
    },
    {
      imageSrc: "/images/vape4.jpg",
      altText: "Vape Model 4",
      title: "VapEmpire Pulse",
      price: 44.99,
      description: "Stylish and reliable with adjustable intensity.",
    },
    {
      imageSrc: "/images/vape5.jpg",
      altText: "Vape Model 5",
      title: "VapEmpire Storm",
      price: 54.99,
      description: "High-capacity pod for extended sessions.",
    },
    {
      imageSrc: "/images/vape6.jpg",
      altText: "Vape Model 6",
      title: "VapEmpire Zen",
      price: 34.99,
      description: "Lightweight and minimal, perfect for beginners.",
    },
    {
      imageSrc: "/images/vape7.jpg",
      altText: "Vape Model 7",
      title: "VapEmpire Volt",
      price: 69.99,
      description: "Performance meets elegance — premium experience.",
    },
    {
      imageSrc: "/images/vape8.jpg",
      altText: "Vape Model 8",
      title: "VapEmpire Blaze",
      price: 64.99,
      description: "Fast charge, bold flavors, pure satisfaction.",
    },
  ];

  return (
    <section className="mx-[2rem] py-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Our Top Picks
      </h2>
      <div className="w-[75vw] flex gap-8 flex-wrap justify-center mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onAddToCart={() =>
              alert(`${product.title} added to your cart!`)
            }
          />
        ))}
      </div>
    </section>
  );
}
