import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

const SingleCard = ({ product, handleAddToCook }) => {
    const {
        calories,
        ingredients,
        preparing_time,
        recipe_image,
        recipe_name,
        short_description,
    } = product;

    return (
        <div className="border-2 p-6 rounded-xl">
            <img src={recipe_image} className="rounded-xl w-full" alt="" />
            <h3 className="font-bold text-3xl my-3">{recipe_name}</h3>
            <p className="my-3">{short_description}</p>
            <hr />
            <div className="mb-3">
                <h5 className="font-bold text-xl my-3">Ingredients: 6</h5>
                <>
                    {ingredients.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </>
            </div>
            <hr />

            <div className="flex gap-5 my-3">
                <p className="flex items-center gap-1">
                    <FaRegClock />
                    <span>{preparing_time} minutes</span>
                </p>
                <p className="flex items-center gap-1">
                    <AiOutlineFire />
                    <span>{calories} calories</span>
                </p>
            </div>
            <button
                onClick={() => handleAddToCook(product)}
                className="text-md outline-none font-medium py-3 px-6 rounded-full outline-non bg-[#0BE58A]"
            >
                Want to Cook
            </button>
        </div>
    );
};

SingleCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired,
};

export default SingleCard;
