import BlogGrid from "./blogGrid";
import FeaturedBlog from "./FeaturedBlog";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">OUR BLOGS</h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          libero rerum id itaque quia quisquam iure magni facilis repellat
          nobis!
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-gray-800 pl-4">
          Featured
        </h2>
        <FeaturedBlog />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-gray-800 pl-4">
          Latest Posts
        </h2>
        <BlogGrid />
      </section>
    </div>
  );
}
