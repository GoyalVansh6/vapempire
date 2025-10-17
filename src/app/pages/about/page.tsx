export default function About() {
  const values = [
    "Integrity in everything we do",
    "Customer-centric approach",
    "Sustainability and responsibility",
    "Innovation and quality"
  ];

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-6 py-12 text-gray-800">
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold mb-4">ABOUT US</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          possimus nemo totam ipsum sit suscipit minima at quisquam, cupiditate
          reprehenderit, modi veritatis, asperiores quidem odit velit
          consequatur? Aperiam, vel quia.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">OUR STORY</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at
          quo quidem aut harum eos repellendus odit quod assumenda expedita est
          soluta mollitia voluptate, provident quibusdam veritatis eius.
          Laudantium maiores maxime, nulla esse a eum quis obcaecati ratione,
          excepturi omnis distinctio voluptas. Rerum, eius! Vero dolores
          doloremque vel totam alias!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">OUR VALUES</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <li
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
            >
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-bold">50k+</h3>
          <p className="text-gray-600">happy customers</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-bold">50+</h3>
          <p className="text-gray-600">products</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-bold">24/7</h3>
          <p className="text-gray-600">availability</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-gray-600">authentic</p>
        </div>
      </section>
    </div>
  );
}
