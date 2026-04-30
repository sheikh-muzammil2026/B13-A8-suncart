import { products, ProductsDataPromises } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDetails = ({product}) => {
    console.log(product, "From details page")
     const {
      id,
    name,
    brand,
    price,
    rating,
    image,
    description,
    stock,
    category,
  } = product;
    return (
        <>
        <div className="flex flex-col md:flex-row gap-10 p-6 bg-white rounded-3xl shadow-xl">
  {/* Left: Image Section */}
  <div className="md:w-1/2 relative w-full h-100 md:h-125">
  <Image
  src={image}
  alt={name}
fill
    className="object-contain rounded-2xl" 
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
/>
  </div>

  {/* Right: Info Section */}
  <div className="md:w-1/2 flex flex-col justify-center">
    <span className="text-orange-500 font-bold uppercase">{category}</span>
    <h1 className="text-4xl font-bold text-gray-800 mt-2">{name}</h1>
    <p className="text-gray-500 mt-4 text-lg">{description}</p>
    
    <div className="flex items-center gap-4 mt-6">
      <span className="text-3xl font-bold text-orange-600">${price}</span>
      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">⭐ {rating}</span>
    </div>

    <div className="mt-8 space-y-3">
       <p className="text-gray-600"><strong>Brand:</strong> {brand}</p>
       <p className="text-gray-600"><strong>Availability:</strong> {stock} units left</p>
    </div>

    <button className="mt-10 w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition">
      Add to Shopping Bag
    </button>
  </div>
</div>
        </>
    );
};

export default ProductDetails;