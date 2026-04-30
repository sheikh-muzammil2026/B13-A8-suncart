import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Contact Info */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>

      <p>Email: support@suncart.com</p>
      <p>Phone: +880 1712-345678</p>
      <p>Address: Kaliganj, Dhaka, Bangladesh</p>
      <p>Support: Sat - Thu | 9 AM - 8 PM</p>
    </div>

    {/* Social Links */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Social Links</h2>

      <ul className="space-y-2">
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-orange-400 duration-300"
          >
            Facebook
          </a>
        </li>

        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-orange-400 duration-300"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-orange-400 duration-300"
          >
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-orange-400 duration-300"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>

    {/* Privacy Policy */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

      <p className="text-sm leading-7 text-gray-300">
        At SunCart, we respect your privacy. Your personal
        information is securely stored and never shared with
        third parties without permission.
      </p>
    </div>

  </div>

  {/* Bottom Footer */}
  <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
    © 2026 SunCart. All rights reserved.
  </div>
</footer>
    );
};

export default Footer;