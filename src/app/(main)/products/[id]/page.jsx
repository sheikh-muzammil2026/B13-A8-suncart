'use client';
import ProductDetails from '@/components/Products/ProductDetails';
import { products } from '@/lib/data';
import { useParams } from 'next/navigation';

const ProductDetailsPage =  () => {
    const {id} = useParams();
    const data = products;
    // console.log(data, "from product details page router");
    const product = data.find((p)=> p.id == id );
    // console.log(expactedProduct);
    return (
        <div>
            <ProductDetails product={product}/>
        </div>
    );
};

export default ProductDetailsPage;


/**
 * 1. data.json ke call korbo. 
 * 2. er vitore ze id ache setar sathe params er id miliye find caliye expactedCard ber korbo 
 * 3. expacted card details show korbo.
 * 4. error fix= details page theke send kore dibo details card e . sathe params send korbo. sekhane giye products loaad kore product card ke call korbe.
 * */ 