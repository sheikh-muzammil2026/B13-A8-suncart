"use client"
import RegistredDataLoading from '@/app/(auth)/register/loading';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

import Link from 'next/link';
import React from 'react';




const ProductCard = ({product}) => {
     const { 
            data: session, 
            isPending, //loading state
            // error, //error object
            // refetch //refetch the session
        } = authClient.useSession() 

        if (isPending) return <RegistredDataLoading/>
    
        // console.log(session);
        const user = session?.user;
    

  // console.log(product);
     const {
      id,
    name,
    brand,
    price,
    rating,
    image,
    category,
  } = product;
    return (

    <>
     
  
  
        <div className="animate__animated animate__fadeInUp card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-xl overflow-hidden">
      
      {/* Image Section */}
      <figure className="p-4 bg-base-100">
        <Image
          src={image}
          alt={name}
          width={220}
          height={220}
          referrerPolicy='no-referrer'
          className="object-contain h-40 w-full hover:scale-105 transition-transform duration-300"
        />
      </figure>
          {/* <div className="divider"></div> */}
     


      <div className="card-body p-5 space-y-3">
  

  <div className="flex justify-between items-center">
    <span className="px-2 py-1 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider">
      {category}
    </span>
    <div className="flex items-center gap-1">
      <span className="text-yellow-500 text-sm">★</span>
      <span className="text-xs font-bold text-gray-600">{rating}</span>
    </div>
  </div>

  
  <div className="space-y-1">
    <h2 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
      {name}
    </h2>
    <p className="text-xs text-gray-400 font-medium">
      By <span className="text-gray-600">{brand}</span>
    </p>
  </div>

  {/* Price Section */}
  <div className="pt-2 border-t border-dashed border-gray-100">
    <div className="flex items-baseline gap-1">
      <span className="text-sm font-bold text-orange-500">$</span>
      <span className="text-2xl font-black text-gray-900">{price}</span>
    </div>
  </div>

  <div className="card-actions mt-2">
    <Link href={user ? `/products/${id}` : "/login"}  className="w-full">
      <button className="w-full py-2.5 bg-gray-900 hover:bg-orange-500 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-orange-200 transition-all duration-300 transform active:scale-95">
        View Details
      </button>
    </Link>
  </div>

</div>

    </div>

    </>
    );
};

export default ProductCard;