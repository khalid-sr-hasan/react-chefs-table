import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Header />
            <div className="px-4 pb-10 lg:p-0 lg:pb-10">
                <Recipes />
            </div>
            <ToastContainer />
        </>
    );
}

export default App;
