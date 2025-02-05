import PropTypes from "prop-types";
import { useState } from "react";

const Cook = ({ cookItem, setCookItem }) => {
    const [currentCook, setCurrentCook] = useState([]);

    const handlePreparing = (item) => {
        // const exist = currentCook.find((cd) => cd.recipe_id === item.recipe_id);
        // if (exist) {
        //     return alert("item added");
        // } else {
        //     setCurrentCook([...currentCook, item]);
        // }

        const i = cookItem.filter((iC) => iC.recipe_id !== item.recipe_id);

        setCurrentCook([...currentCook, item]);
        setCookItem(i);
    };

    let totalTime = 0;
    let totalCalories = 0;
    for (let item of currentCook) {
        totalTime += item.preparing_time;
        totalCalories += item.calories;
    }

    const handleClear = () => {
        setCurrentCook([]);
    };

    return (
        <div className="w-full lg:w-1/3 ">
            <div className="border rounded-xl pb-5 lg:sticky lg:top-20">
                <div>
                    <div className="max-w-[350px] mx-auto py-4 border-b">
                        <h3 className="text-3xl font-bold  text-center">
                            Want to cook : {cookItem.length}
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookItem.map((cooked, idx) => (
                                    <tr key={idx} className="bg-base-200">
                                        <th>{idx + 1}</th>
                                        <td>{cooked.recipe_name}</td>
                                        <td>{cooked.preparing_time} min</td>
                                        <td>{cooked.calories} calories</td>
                                        <td className="">
                                            <button
                                                onClick={() =>
                                                    handlePreparing(cooked)
                                                }
                                                className="text-md outline-none font-medium py-2 px-4 rounded-full outline-non bg-[#0BE58A]"
                                            >
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div className="mt-8 max-w-[350px] mx-auto pb-4 border-b">
                        <h3 className="text-3xl font-bold  text-center">
                            Currently cooking: {currentCook.length}
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCook.map((i, idx) => (
                                    <tr key={idx} className="bg-base-200">
                                        <th>{idx + 1}</th>
                                        <td>{i.recipe_name}</td>
                                        <td>{i.preparing_time} min</td>
                                        <td>{i.calories} calories</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td>
                                        <button
                                            onClick={handleClear}
                                            className="btn"
                                        >
                                            Clear
                                        </button>
                                    </td>
                                    <td></td>
                                    <td className="text-sm font-bold">
                                        Total Time = {totalTime} minutes
                                    </td>
                                    <td className="text-sm font-bold">
                                        Total Calories = {totalCalories}{" "}
                                        Calories
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cook.propTypes = {
    cookItem: PropTypes.array.isRequired,
    setCookItem: PropTypes.func.isRequired,
};

export default Cook;
