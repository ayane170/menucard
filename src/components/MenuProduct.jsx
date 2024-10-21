import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    const {product} = props;
    if (!product.size) return;

    return (
        <span className="fs-6 text-primary">
            &nbsp;({product.size}cl)
        </span>
    );
}

function ProductNote(props) {
    const {product} = props;
    if (!product.note) return;

    return (
        <Row className="fs-6 text-primary">
            <Col>
                {product.note}
            </Col>
        </Row>
    );
}
export function MenuProduct(props) {
    const {product, isFavorite, onSelect} = props;
    if (!product?.name || !product?.price) return;

    return (
        <>
                <Row className={`fs-3 ${isFavorite ? 'bg-info-subtle' : ''}`}
                     style={{cursor: "pointer"}}
                     onClick={() => onSelect(product)}>
                    <Col>
                        {product.name}
                        <ProductSize product={product}/>
                    </Col>
                    <Col>
                        {product.price} &euro;
                    </Col>
                </Row>
                <ProductNote product={product}/>
            </>
            );
            }