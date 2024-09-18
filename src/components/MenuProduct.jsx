export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name || !product?.price )return null;
    return (
        <div className="product-item">
            {product.name}
            {product.size ? ` (${product.size} cl)` : '--' }
            {product.price} &euro;
        </div>
    );
}