import React from 'react';

const TopBrand = () => {
    return (
//         <div>
//             {/* Top Brands Section */}
// <section className="py-12 bg-white">
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//       🏆 Our Top Brands
//     </h2>
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//       {/* Brand 1 */}
//       <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
//         <span className="text-2xl font-bold text-gray-400">SunShade</span>
//       </div>

//       {/* Brand 2 */}
//       <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
//         <span className="text-2xl font-bold text-gray-400">CoolWear</span>
//       </div>

//       {/* Brand 3 */}
//       <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
//         <span className="text-2xl font-bold text-gray-400">BreezeGo</span>
//       </div>

//       {/* Brand 4 */}
//       <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-xl grayscale hover:grayscale-0 hover:border-orange-200 transition-all cursor-pointer">
//         <span className="text-2xl font-bold text-gray-400">HydroMax</span>
//       </div>
//     </div>
//   </div>
// </section>

//         </div>
<section className="py-20 bg-slate-50 relative overflow-hidden">
  {/* হালকা ব্যাকগ্রাউন্ড ব্লব (Decoration) */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">
          Trusted by Global Brands
        </h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {["SunShade", "CoolWear", "BreezeGo", "HydroMax"].map((brand) => (
        <div key={brand} className="group flex items-center justify-center h-32 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
          <span className="text-2xl font-black text-gray-500 group-hover:text-orange-500 transition-colors">
            {brand}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
    );
};

export default TopBrand;