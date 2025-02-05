import { useEffect } from "react";
import { useState } from "react";
import Cook from "../Cook/Cook";
import CardGallery from "../CardGallery/CardGallery";
import { toast } from "react-toastify";

const Recipes = () => {
    const [products, setProducts] = useState([]);
    const [cookItem, setCookItem] = useState([]);

    useEffect(() => {
        fetch("./food.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    console.log(products);

    const handleAddToCook = (item) => {
        const existItem = cookItem.find(
            (cookI) => cookI.recipe_id === item.recipe_id
        );

        if (existItem) {
            return toast.error("Item Already Added");
        } else {
            toast.success("Item Add");
            setCookItem([...cookItem, item]);
        }
    };

    console.log(cookItem);
    return (
        <div className="container mx-auto  mt-24">
            <div className="lg:w-3/6 mb-10 text-center mx-auto">
                <h1 className="text-5xl font-bold mb-5">Our Recipes</h1>
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                senectus vulputate netus pharetra rhoncus. Eget urna volutpat
                curabitur elementum mauris aenean neque.
            </div>

            {/*  */}
            <div className="flex flex-col lg:flex-row gap-4 ">
                <CardGallery
                    handleAddToCook={handleAddToCook}
                    products={products}
                />

                <Cook setCookItem={setCookItem} cookItem={cookItem} />
            </div>
        </div>
    );
};

export default Recipes;
