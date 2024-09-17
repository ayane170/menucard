import './App.css'
import {MenuProduct} from "./components/MenuProduct.jsx";
import {PRODUCTS_DATA} from "./data/data.js";

function App() {
    return (
            <div>
                <h1>Menu</h1>
                <MenuProduct product={PRODUCTS_DATA[0]}/>
                <MenuProduct product={PRODUCTS_DATA[1]}/>
                <MenuProduct product={PRODUCTS_DATA[2]}/>
                <MenuProduct product={PRODUCTS_DATA[3]}/>
                <MenuProduct product={PRODUCTS_DATA[4]}/>
            </div>
    )
}

export default App
