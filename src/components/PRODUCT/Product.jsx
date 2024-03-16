import React, { useEffect, useState } from 'react';
import Card from './Card';
import Table1 from '../../TABLE/Table1';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipe-data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleClickButton = (product) => {
        setDetails([...details,product])
       
    }
console.log(details);
    return (
        <section>
            <div className='text-center my-20 md:w-[850px] w-full mx-auto'>
                <h1 className='text-3xl font-bold mb-2'>Our Recipe</h1>
                <p className='text-md'>"Our Recipe" signifies more than just ingredients. It's a story of tradition and innovation. Discover the secret behind our culinary creations, carefully honed through generations. At our kitchen, each dish is a testament to our dedication to quality and flavor.</p>
            </div>

            <div className='flex justify-between gap-3'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 items-center justify-between  w-2/3'>
                    {
                        products.map((product, index) => <Card key={index} product={product} handleClickButton={handleClickButton} />)
                    }
                </div>

                <Table1 />
            </div>
        </section>
    );
};

export default Product;