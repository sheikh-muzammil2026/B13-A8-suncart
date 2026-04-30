export const ProductsDataPromises = async() =>{
        const res = await fetch('https://b13-a8-suncart.vercel.app/data.json')
        const product = await res.json();
        return product;
}

export const products = await ProductsDataPromises();