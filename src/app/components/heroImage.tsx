export default function HeroImage() {
  return (
    <div
      className="relative my-[1rem] mx-[2rem] rounded-4xl min-h-[70vh] flex items-center px-12 bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/vape-3571739.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative flex flex-col items-start text-white p-6 rounded-lg">
        <h1 className="text-6xl font-extrabold mb-4">VapEmpire</h1>
        <p className="text-xl max-w-md text-gray-200">
          Elevate your vaping experience with premium flavors and sleek designs.
        </p>
      </div>
    </div>
  );
}
