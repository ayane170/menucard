export function MenuProduct(props) {
    const {product , isFavorite} = props;
    if (!product?.name || product.price === undefined  )return ;// de cet methode si le produit n'a pas de prix il ne va pas apparaitre

    const productStyle = {
        background:isFavorite? "Aqua":"",
    };
    return (
        <div style={{margin: "2vw", fontSize: "larger", display: "flex"}}>
            <div style={{flex: 1,}}>
             <span style={productStyle}>
                    {product.name}
                <div style={{color: "blue", display: "inline"}}>
                    {product.size ? ` (${product.size} cl)` : ''}
                </div>
                 </span>
                <div style={{color: "blue", fontSize: 14}}>
                    {product.note}
                </div>
            </div>
            <div style={{flex: 1}}>
                <span style={productStyle}>
                {product.price} &euro;
                </span>
            </div>
        </div>
);
}