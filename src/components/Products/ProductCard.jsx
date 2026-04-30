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
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={image}
      alt={name} 
      width={200}
      height={200}
      />
  </figure>
  <div className="card-body">
    
     <p className="text-sm text-orange-500 font-medium mb-2">
          {category}
        </p>

       <h2 className="card-title">{name}</h2>

        <p className="text-gray-500 mb-4">
          Brand: {brand}
        </p>
         <div className="flex items-center justify-between mb-5">
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
</div>
    </>
    );
};

export default ProductCard;