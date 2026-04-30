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
    //      <div className="border rounded-xl">
    //         <div className="relative w-full aspect-square">
    //         <Image
    //             src={photo.imageUrl}
    //             fill
    //             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //             alt={photo.title}
    //             className="object-cover rounded-xl"
    //             />

    //             {/* <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip> */}
    //         </div>

    //         <div>
    //             <h2 className="font-medium">{photo.title}</h2>
    //         </div>

    //        <div className="flex gap-5">
    //          <div className="flex items-center gap-2">
    //             <p><FaHeart /></p>
    //             <p>{photo.likes}</p>
    //         </div>

    //         <RiSeparator orientation="vertical"/>


    //            <div className="flex items-center gap-2">
    //             <p><BiDownload /></p>
    //             <p>{photo.downloads}</p>
    //         </div>
    //        </div>

    //  <Link href={`/all-photos/${photo.id}`}>      <button variant="outline" className={'w-full'}>View</button></Link>
            
    //     </div>
    <>
     
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl duration-300 group">

      {/* Product Image */}
      <div className="overflow-hidden bg-[#FFF7ED]">

        <Image
          src={image}
          alt={name}
          className="w-full h-[300px] object-cover group-hover:scale-110 duration-500"
          width={300}
          height={300}
        />

      </div>

      {/* Product Info */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-orange-500 font-medium mb-2">
          {category}
        </p>

        {/* Product Name */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>

        {/* Brand */}
        <p className="text-gray-500 mb-4">
          Brand: {brand}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mb-5">

          <h3 className="text-2xl font-bold text-orange-500">
            ${price}
          </h3>

          <p className="text-yellow-500 font-medium">
            ⭐ {rating}
          </p>

        </div>

        {/* Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium duration-300">
          Add To Cart
        </button>

      </div>

    </div>

    </>
    );
};

export default ProductCard;