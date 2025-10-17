export default function Contact() {
  return (
    <div className="mx-[2rem] py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4">Get in Contact</h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl max-w-2xl mx-auto shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Phone No.</label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Tell us about your inquiry"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-neutral-800 text-white font-semibold py-3 px-6 rounded hover:bg-pink-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
