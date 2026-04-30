import Hero from "@/components/Hero/Hero";
import SummerCare from "@/components/Home/SummerCare";
import TopBrand from "@/components/Home/TopBrand";
import Populars from "@/components/Products/Populars";


export default function Home() {
  return (
   <>
   <Hero/>
    <Populars/>
    <SummerCare/>
    <TopBrand/>
 
   </>
  );
}

//  <div className="flex flex-col h-full card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl duration-300 group">
      
//       {/* Product Image */}
//       <div className="overflow-hidden bg-[#FFF7ED]">
//         <Image
//           src={image}
//           alt={name}
//           className="w-full h-auto object-cover group-hover:scale-110 duration-500"
//           width={150}
//           height={150}
//         />
//       </div>


     
//       <div className="p-5 flex flex-col grow card-body">

//         <p className="text-sm text-orange-500 font-medium mb-2">
//           {category}
//         </p>

//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           {name}
//         </h2>

//         <p className="text-gray-500 mb-4">
//           Brand: {brand}
//         </p>

      
//         <div className="mt-auto"> 
//           <div className="flex items-center justify-between mb-5">
//             <h3 className="text-2xl font-bold text-orange-500">
//               ${price}
//             </h3>
//             <p className="text-yellow-500 font-medium">
//               ⭐ {rating}
//             </p>
//           </div>

//           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium duration-300">
//             View Details
//           </button>
//         </div>

//       </div>
//     </div>