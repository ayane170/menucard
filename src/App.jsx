import "normalize.css"
import './App.css'
// import {MenuProduct} from "./components/MenuProduct.jsx";
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PRODUCTS_DATA} from "./data/data.js";
import {PicturesPage} from "./pages/PicturesPage.jsx";

function App() {
    return (
            <>

                {/*{PRODUCTS_DATA.map(p => <MenuProduct key={p.name} product = {p}/>)}*/}
                <MenuCardPage products = {PRODUCTS_DATA}/>
                <PicturesPage/>
            </>

    )
}

export default App
