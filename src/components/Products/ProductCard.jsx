import Image from 'next/image';
import React from 'react';



const ProductCard = ({product}) => {
  console.log(product);
     const {
    name,
    brand,
    price,
    rating,
    image,
    category,
  } = product;
    return (

    <>
     
  
   


{/* daisy card  */}
      {/* <div className="card bg-base-100 shadow-sm p-2">
  <figure>
    <Image
      src={image}
      alt={name} 
      width={200}
      height={200}
      />
  </figure>
  <div className="divider"></div>
  <div className="">
    
     <p className="text-sm text-orange-500 font-medium mb-2">
          {category}
        </p>

       <h2 className="card-title">{name}</h2>

        <p className="text-gray-500">
          Brand: {brand}
        </p>
         <div className="flex items-center justify-between px-2 mb-3">
            <h3 className="text-2xl font-bold text-orange-500">
              ${price}
            </h3>
            <p className="text-yellow-500 font-medium">
              ⭐ {rating}
            </p>
          </div>

    <div className="card-actions ">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div> */}
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-xl overflow-hidden">
      
      {/* Image Section */}
      <figure className="p-4 bg-base-100">
        <Image
          src={image}
          alt={name}
          width={220}
          height={220}
          className="object-contain h-40 w-full hover:scale-105 transition-transform duration-300"
        />
      </figure>
          {/* <div className="divider"></div> */}
      <div className="card-body p-4">
        
        {/* Category Badge */}
        <div className="badge badge-warning badge-outline text-xs w-fit">
          {category}
        </div>

        {/* Product Name */}
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {name}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand: <span className="font-medium">{brand}</span>
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-xl font-bold text-orange-500">
            ${price}
          </h3>
          <p className="text-yellow-500 font-medium text-sm">
            ⭐ {rating}
          </p>
        </div>

        {/* Button */}
        <div className="card-actions mt-3">
          <button className="btn btn-warning btn-sm w-full text-white hover:scale-[1.02] transition">
            View Details
          </button>
        </div>

      </div>
    </div>

    </>
    );
};

export default ProductCard;