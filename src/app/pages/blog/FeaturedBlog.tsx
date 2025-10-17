import React from "react";

export default function FeaturedBlogExample() {
  // Hardcoded featured blog data
  const featuredBlogs = [
    {
      image: "../../vape-3571739/jpg",
      date: "Oct 18, 2025",
      title: "Our Biggest Product Launch Yet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "/blog/biggest-launch",
    },
    {
      image: "../../vape-3571739/jpg",
      date: "Oct 18, 2025",
      title: "Innovating for a Sustainable Future",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readMoreLink: "/blog/sustainable-innovation",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto px-6 py-12">
      {featuredBlogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
          />

          <div className="p-6 flex flex-col justify-center lg:w-1/2">
            <p className="text-sm text-neutral-500 mb-2">{blog.date}</p>
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            <p className="text-neutral-600 mb-6">{blog.description}</p>
            <a
              href={blog.readMoreLink}
              className="inline-block px-6 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
