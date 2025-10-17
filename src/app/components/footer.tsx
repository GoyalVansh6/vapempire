import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">VapEmpire</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Elevate your vaping experience with premium devices and bold flavors.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Warranty</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VapEmpire. All rights reserved.
      </div>
    </footer>
  );
}
