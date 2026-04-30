import React from 'react';
import ProductCard from './ProductCard';
import { ProductsDataPromises } from './data';


const Populars =  async() => {
    const products = await ProductsDataPromises();
    console.log(products);
    return (
       <>
       <div className="container mx-auto mt-20">
           <div className="text-center mb-10">
  <h2 className="text-3xl font-bold text-gray-800">☀️ Summer Essentials</h2>
  <p className="text-gray-500 mt-2">Explore our most loved products for this sunny season.</p>
</div>
         <div className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 mt-20'>
        {
            products.map((product, index)=> (<ProductCard key={index} product={product}/>))
        }
        </div>
       </div>
       </>
    );
};

export default Populars;