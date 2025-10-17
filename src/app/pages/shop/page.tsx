import ProductsGrid from "@/app/components/productsGrid";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Featured Products
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
