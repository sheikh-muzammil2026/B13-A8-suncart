import React from 'react';
import ProductCard from './ProductCard';
import { ProductsDataPromises } from './data';


const Populars =  async() => {
    const products = await ProductsDataPromises();
    console.log(products);
    return (
        <>
        {
            products.map((product, index)=> (<ProductCard key={index} product={product}/>))
        }
        </>
    );
};

export default Populars;