import {MenuProduct} from "./MenuProduct.jsx";
import {Container,Row,Col} from "react-bootstrap";// Importer les composants de react-bootstrap

// import {PRODUCTS_DATA} from "../data/data.js";

export function MenuCard(props){
    const {products} = props;
    return (
        <Container>
            <Row>
                {products.map(p =>(<Col key={p.name} xs={12} sm={6} md={4} lg={3} className="mb-4">)
                    <MenuProduct key={p.name} product={p}/></Col>
                ))}
            </Row>
        </Container>);
}