import PropTypes from "prop-types";
import SingleCard from "./SingleCard";

const CardGallery = ({ products, handleAddToCook }) => {
    return (
        <div className="w-full lg:w-2/3 ">
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                {products.map((product) => (
                    <SingleCard
                        handleAddToCook={handleAddToCook}
                        key={product.recipe_id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

CardGallery.propTypes = {
    products: PropTypes.array.isRequired,
    handleAddToCook: PropTypes.func.isRequired,
};

export default CardGallery;
