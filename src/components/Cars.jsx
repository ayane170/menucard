import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

const COLORS_CAR_CSS = [
    {nameInCar: "blauw", backGroundColorInCss: "blue", colorInCss: "white"},
    {nameInCar: "geel", backGroundColorInCss: "yellow"},
    {nameInCar: "zwart", backGroundColorInCss: "black", colorInCss: "white"},
    {nameInCar: "wit", backGroundColorInCss: "white"},
    {nameInCar: "rood", backGroundColorInCss: "red", colorInCss: "white"},
    {nameInCar: "grijs", backGroundColorInCss: "grey", colorInCss: "white"},
    {nameInCar: "groen", backGroundColorInCss: "green", colorInCss: "white"},
];

//merk op: dit is een gewone functie, geen React-Component
function styleColor(color) {
    const colorCarCss = COLORS_CAR_CSS.find(c => c.nameInCar === color);
    if (!colorCarCss) return;
    return {
        backgroundColor: colorCarCss.backGroundColorInCss,
        color: colorCarCss.colorInCss,
        margin: "0.5em"
    };
}

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={styleColor(color)}>
        kleur: {color} &nbsp;
    </div>;
}

function Car(props) {
    const {car} = props;
    return (
        <Col key={car.id}
             xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
             className={"d-flex align-items-stretch text-center "}>
            <Card className="m-2 p-2 shadow-sm">
                <h5>{car.name}</h5>
                {car.brand && <div>merk: {car.brand}</div>}
                {car.type && <div>type: {car.type}</div>}
                <CarColor color={car.color}/>
            </Card>
        </Col>
    );
}

export function Cars(props) {
    const {cars, title} = props
    return (
        <div className="mt-3 rounded shadow-sm " style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container fluid className="mt-3" >
                <Row className="g-3">
                    {cars.map(c => <Car key={c.id} car={c}/>)}
                </Row>
            </Container>
        </div>
    );
}

Cars.propTypes = {
    cars: PropTypes.array,
    title: PropTypes.string
};