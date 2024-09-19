export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name  )return ;
    return (
        <div style={{margin: "2vw", fontSize: "larger", display: "flex"}}>
            <div style={{flex: 1}}>
            {product.name}
                <div style={{color:"blue" ,     display:"inline"}}>
            {product.size ? ` (${product.size} cl)` : ''}
                </div>
            </div>
            <div style={{flex: 1}}>
                {product.price} &euro;
            </div>
            </div>
            );
            }