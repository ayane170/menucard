import "normalize.css"
import './App.css'
import {MenuProduct} from "./components/MenuProduct.jsx";
import {PRODUCTS_DATA} from "./data/data.js";

function App() {
    return (
            <div>
                <h1>Menu</h1>
                {PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product = {p}/>)}
            </div>
    )
}

export default App
