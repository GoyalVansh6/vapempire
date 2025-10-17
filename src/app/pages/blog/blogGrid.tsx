import React from "react";
import BlogComponent from "./blogComponent";

interface Blog {
  image: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
}

export default function BlogGrid() {
  const blogs: Blog[] = [
    {
      image: "https://via.placeholder.com/400x200",
      date: "Oct 18, 2025",
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      readMoreLink: "/blog/exciting-updates",
    },
    {
      image: "https://via.placeholder.com/400x200",
      date: "Oct 18, 2025",
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      readMoreLink: "/blog/innovating",
    },
    {
      image: "https://via.placeholder.com/400x200",
      date: "Oct 18, 2025",
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      readMoreLink: "/blog/sustainability",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogComponent
          key={index}
          image={blog.image}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          readMoreLink={blog.readMoreLink}
        />
      ))}
    </div>
  );
}
