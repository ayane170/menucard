export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name  )return ;
    return (
        <div style={{margin: "2vw", fontSize: "larger", display: "flex"}}>
            <div style={{flex: 1}}>
            {product.name}
                <span style={{color:"blue"}}>
            {product.size ? ` (${product.size} cl)` : ''}
                </span>
            </div>
            <div style={{flex: 1}}>
                {product.price} &euro;
            </div>
            </div>
            );
            }