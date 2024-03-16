import React, { useEffect, useState } from 'react';
import Card from './Card';
import Table1 from '../TABLE/Table1'
import Table2 from '../TABLE/Table2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = () => {
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState([]);
    const [count, setCount] = useState(0);
    const [cookingCount, setCookingCount] = useState(0);
    const [prepare, setPrepare] = useState([]);
    const [test, setTest] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipe-data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleClickButton = (product) => {
        const isBook = details.find(item => item.recipe_id == product.recipe_id)
        if (!isBook) {
            setCount(count + 1)
            setDetails([...details, product])
        } else {
            toast.error(`Item is already booked`)
        }
    }

    const handleRemoveButtonClick = (detail) => {
        const { time, calories } = detail
        const isPreparing = prepare.filter((item) => item.recipe_id == detail.recipe_id)
        if (isPreparing) {
            setTest([time, calories])
            setCookingCount(cookingCount + 1)
            if (count > 0) {
                setCount(count - 1)
            }
            setPrepare([...prepare, detail])
        }
    }
    return (
        <section>
            <ToastContainer />
            <div className='text-center my-20 md:w-[850px] w-full mx-auto'>
                <h1 className='text-3xl font-bold mb-2'>Our Recipe</h1>
                <p className='text-md'>"Our Recipe" signifies more than just ingredients. It's a story of tradition and innovation. Discover the secret behind our culinary creations, carefully honed through generations. At our kitchen, each dish is a testament to our dedication to quality and flavor.</p>
            </div>

            <div className='flex  justify-between gap-3  '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 items-center justify-between  w-4/5'>
                    {
                        products.map((product, index) => <Card key={index} product={product} handleClickButton={handleClickButton} />)
                    }
                </div>

                <div className='flex flex-col w-2/5'>

                    <div className='border  rounded-lg'>
                        <h1 className="text-center text-2xl font-bold my-2">Want to cook: {count} </h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th> calories</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {

                            details.map((item, index) => <Table1 key={index} item={item} index={index} handleRemoveButtonClick={handleRemoveButtonClick} />)
                        }

                        <div className='mt-10'>
                            <h1 className="text-center text-2xl font-bold my-2">Currently cooking: {cookingCount} </h1>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th> calories</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        {prepare.map((detail, index) => <Table2 key={index} detail={detail} index={index} />)}
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total Time = <br />
                                            {test[0]} </td>
                                        <td>Total Calories = <br />
                                            {test[1]}</td>
                                    </tr>

                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;