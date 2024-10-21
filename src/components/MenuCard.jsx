import {MenuProduct} from "./MenuProduct.jsx";
import {Container, Row, Col,Button,Modal} from "react-bootstrap";
import {useState} from "react";

function ShoppingCartRow(props) {
    const {orderLine} = props;
    return (
        <Row className="align-items-center mb-1">
            <Col>{orderLine.name}</Col>
            <Col className="text-end">{orderLine.price} &euro;</Col>
            <Col className="text-end">{orderLine.amount}</Col>
        </Row>
    );
}
function ShoppingCartBody(props) {
    const {cart} = props;
    if (cart.length === 0) return "nog niets besteld.";
    const totalPrice = cart.reduce((tempResult, o) => tempResult + o.price * o.amount, 0);
    return (
        <>
            {cart.map(o => <ShoppingCartRow key={o.name} orderLine={o}/>)}
            <hr/>
            <Row>
                <Col>Total</Col>
                <Col className="text-end">{totalPrice} &euro;</Col>
                <Col className="text-end"></Col>
            </Row>
        </>
    );
}


function ShoppingCart(props){
    const {cart}=props;
    const [show, setShow] = useState(false);
    const amountOfOrderedProducts = cart.reduce((tempResult, o) => tempResult + o.amount, 0);
    return(
        <>
            <Button className="fs-4"
                    onClick={() => setShow(true)}
            >
                {amountOfOrderedProducts}
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Winkelwagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingCartBody cart={cart}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Bestel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export function MenuCard(props) {
    const {products} = props;
    const [cart, setCart] = useState([]);
    function addProductInCart(product) {
        if (cart.find(o => o.name === product.name))
            setCart(cart.map(o => o.name === product.name ? {...o, amount: o.amount + 1} : o));
        else
            setCart([...cart, {name: product.name, price: product.price, amount: 1}]);
    }
    return (
        <div>
            <Row>
                <Col><h1>Menu</h1></Col>
                <Col className="text-end">
                    <ShoppingCart cart={cart}/>
                </Col>
            </Row>
            <Container className="p-0">
                {products.map(p => <MenuProduct key={p.name}
                                                product={p}
                                                onSelect={p => addProductInCart(p)}/>)}
            </Container>
        </div>
    );
}