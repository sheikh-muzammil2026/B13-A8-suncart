import React from 'react';

const TopBrand = () => {
    return (
        <div>
            {/* Top Brands Section */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      🏆 Our Top Brands
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Brand 1 */}
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
        <span className="text-2xl font-bold text-gray-400">SunShade</span>
      </div>

      {/* Brand 2 */}
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
        <span className="text-2xl font-bold text-gray-400">CoolWear</span>
      </div>

      {/* Brand 3 */}
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
        <span className="text-2xl font-bold text-gray-400">BreezeGo</span>
      </div>

      {/* Brand 4 */}
      <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
        <span className="text-2xl font-bold text-gray-400">HydroMax</span>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default TopBrand;