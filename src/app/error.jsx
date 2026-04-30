'use client'; 

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
   
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* এনিমেটেড আইকন */}
      <div className="relative mb-6">
        <div className="text-8xl animate-bounce">⚠️</div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-100 rounded-full blur-sm"></div>
      </div>

      {/* এরর মেসেজ */}
      <h2 className="text-3xl font-extrabold text-gray-800">
        Something went wrong!
      </h2>
      <p className="text-gray-500 mt-3 max-w-md mx-auto">
        We encountered an unexpected error while loading this page. Dont worry, our team is already on it.
      </p>

      {/* অ্যাকশন বাটনস */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => reset()} // reset() ফাংশনটি পেজটিকে আবার রেন্ডার করার চেষ্টা করে
          className="px-8 py-3 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 shadow-lg shadow-orange-100 transition-all active:scale-95"
        >
          Try Again
        </button>
        
        <button 
          onClick={() => window.location.href = '/'}
          className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all active:scale-95"
        >
          Go to Home
        </button>
      </div>

      {/* টেকনিক্যাল এরর ডিটেইলস (ডেভেলপমেন্টের জন্য ভালো) */}
      <div className="mt-12 p-4 bg-red-50 rounded-xl border border-red-100">
        <p className="text-xs text-red-400 font-mono italic">
          Error Message: {error.message || "Unknown technical error occurred."}
        </p>
      </div>
    </div>
  );
}