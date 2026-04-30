"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  // Example login state
  const user = true;

  return (
    <nav className="bg-white shadow-md">
      
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-3xl font-bold text-orange-500"
          >
            SunCart
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 font-medium">

          <li>
            <Link
              href="/"
              className="hover:text-orange-500 duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="hover:text-orange-500 duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-orange-500 duration-300"
            >
              My Profile
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {
            user ? (
              <>
                {/* User Avatar */}
                <Image
                  src="https://i.ibb.co/4pDNDk1/avatar.png"
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
                  width={40}
                  height={40}
                />

                {/* Logout Button */}
                <button className="btn carsor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300">
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link href="/login">
                  <button className="btn cursor-pointer border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-lg duration-300">
                    Login
                  </button>
                </Link>

                {/* Register Button */}
                <Link href="/register">
                  <button className="btn cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg duration-300">
                    Register
                  </button>
                </Link>
              </>
            )
          }

        </div>

      </div>

    </nav>
  );
};

export default Navbar;