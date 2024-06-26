import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const Card = ({ product, handleClickButton}) => {
    const { recipe_image, name, description, time, calories, ingredients } = product;

    return (
        <>
            <div className="card card-compact bg-base-100 border shadow-xl rounded-lg p-2">
                <figure><img className="md:h-[250px] w-full" src={recipe_image} alt="Spicy Bamboo Recipe" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <h1 className="font-bold text-lg">Ingredients:</h1>
                    <ul className='list-disc ml-5'>
                        {ingredients.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <hr />
                    <div className="flex justify-center items-center">
                        <p className="flex items-center gap-2"><IoMdTime />{time}</p>
                        <p className="flex items-center gap-2"><FaFire />{calories}</p>

                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleClickButton(product)} 
                        className="btn btn-success rounded-full p-1 px-4 text-sm">Want to Cook</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;