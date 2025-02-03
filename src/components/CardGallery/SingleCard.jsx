import React from "react";
import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

const SingleCard = ({ product }) => {
    const {
        calories,
        ingredients,
        preparing_time,
        recipe_id,
        recipe_image,
        recipe_name,
        short_description,
    } = product;

    return (
        <div className="border-2 p-6 rounded-xl">
            <img src={recipe_image} className="rounded-xl w-full" alt="" />
            <h3 className="font-bold text-3xl my-3">{recipe_name}</h3>
            <p className="my-3">
                Classic Italian pasta dish with savory meat sauce.
            </p>
            <hr />
            <div className="mb-3">
                <h5 className="font-bold text-xl my-3">Ingredients: 6</h5>
                <>
                    <li>500g ground beef</li>
                    <li>1 onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                </>
            </div>
            <hr />

            <div className="flex gap-5 my-3">
                <p className="flex items-center gap-1">
                    <FaRegClock />
                    <span>30 minutes</span>
                </p>
                <p className="flex items-center gap-1">
                    <AiOutlineFire />
                    <span>600 calories</span>
                </p>
            </div>
            <button className="text-md outline-none font-medium py-3 px-6 rounded-full outline-non bg-[#0BE58A]">
                Want to Cook
            </button>
        </div>
    );
};

SingleCard.propTypes = {};

export default SingleCard;
