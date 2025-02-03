import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div className="px-4 lg:p-0">
                <Recipes />
            </div>
        </>
    );
}

export default App;
