import {MenuProduct} from "./MenuProduct.jsx";
// import {PRODUCTS_DATA} from "../data/data.js";

export function MenuCard(props){
    const {products} = props;
    return (
        <div>
            {products.map(p => <MenuProduct key={p.name} product={p}/>)}
        </div>);
}