import React from 'react';
import { ProductsDataPromises } from '../../lib/data';
import ProductCard from './ProductCard';
import Link from 'next/link';

const AllProducts = async() => {
    const products = await ProductsDataPromises();

    return (
         <div className="container mx-auto mt-20">
           <div className="text-center mb-10">
  <h2 className="text-3xl font-bold text-gray-800">☀️ Our Summer Collection</h2>
  <p className="text-gray-500 mt-2">Gear up for the heat with our top-rated summer must-haves—from hydration to sun protection.</p>
</div>
         <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 mt-20'>
        {
            products.map((product, index)=> (<ProductCard key={index} product={product}/>))
        }
        </div>
       
       </div>
    );
};

export default AllProducts;

/**
 * 1. main layout er moddhe ami rakhbo home page, product page, profile page.
 * 2. globarl layout er moddhe rekhechi navbar, footer
 * 3. home page  er moddhe ami home page er sokol components rakhbo
 * 4. products page er moddhe er all data show korabo.
 * */ 