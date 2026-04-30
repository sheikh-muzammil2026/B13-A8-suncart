import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
            {/* বড় করে ৪০৪ টেক্সট */}
            <h1 className="text-9xl font-black text-gray-200 relative">
                404
                <span className="absolute inset-0 flex items-center justify-center text-4xl text-orange-500 mt-8">
                    Oops!
                </span>
            </h1>

            {/* মেসেজ */}
            <h2 className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</h2>
            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* হোম পেজে ফিরে যাওয়ার বাটন */}
            <div className="mt-10">
                <Link href="/">
                    <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform active:scale-95">
                        Back to Home
                    </button>
                </Link>
            </div>

            {/* ডেকোরেশন (ঐচ্ছিক) */}
            <div className="mt-12 flex gap-4 text-gray-300 text-6xl opacity-20">
                <span>🏖️</span>
                <span>☀️</span>
                <span>🕶️</span>
            </div>
        </div>
    );
};

export default NotFound;