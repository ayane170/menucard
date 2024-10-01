// import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";

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
        <SectionCard key={car.id}>
            <h5>{car.name}</h5>
            {car.brand && <div>merk: {car.brand}</div>}
            {car.type && <div>type: {car.type}</div>}
            {car.note && <div>opm: {car.note}</div>}
            <CarColor color={car.color}/>
        </SectionCard>
    );
}

export function Cars(props) {
    const {cars, title} = props
    return (
        <Section title={title}>
            {cars.map(c => <Car car={c} key={c.id}/>)}
        </Section>
    );
}

Cars.propTypes = {
    cars: PropTypes.array,
    title: PropTypes.string
};