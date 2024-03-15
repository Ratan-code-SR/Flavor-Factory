import React, { useEffect, useState } from 'react';
import Card from './Card';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipe-data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    return (
        <section>
            <div className='text-center my-20 md:w-[850px] w-full mx-auto'>
                <h1 className='text-2xl font-bold'>Our Recipe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam autem incidunt nostrum quos delectus minus ex, culpa eius, eaque dicta! Tempora illo vero exercitationem, ipsam libero saepe laudantium quasi.</p>
            </div>
            <div className='grid grid-cols-2 gap-3 items-center justify-between  w-2/3'>
              {
                products.map((product,index)=> <Card key={index} product={product}/>)
              }
            </div>
        </section>
    );
};

export default Product;