import React from "react";

const Cook = () => {
    return (
        <div className="w-full lg:w-1/3 ">
            <div className="border rounded-xl pb-5 lg:sticky lg:top-20">
                <div>
                    <div className="max-w-[350px] mx-auto py-4 border-b">
                        <h3 className="text-3xl font-bold  text-center">
                            Want to cook :
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
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>Vegetable Curry</td>
                                    <td>45 min</td>
                                    <td>280 calories</td>
                                    <td className="">
                                        <button className="text-md outline-none font-medium py-2 px-4 rounded-full outline-non bg-[#0BE58A]">
                                            Preparing
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <div className="max-w-[350px] mx-auto py-4 border-b">
                        <h3 className="text-3xl font-bold  text-center">
                            Currently cooking:
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
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>Vegetable Curry</td>
                                    <td>45 min</td>
                                    <td>280 calories</td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="text-sm font-bold">
                                        Total Time = 0 minutes
                                    </td>
                                    <td className="text-sm font-bold">
                                        Total Calories = 0minutes
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

export default Cook;
