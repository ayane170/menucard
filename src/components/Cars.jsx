import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// Composant Car pour afficher chaque voiture
function Car({ car }) {
    return (
        <Card className="m-2 p-2 shadow-sm">
            <Card.Body>
                <p><strong>Naam:</strong> {car.name}</p>    {/* Afficher la propriété 'name' */}
                <p><strong>Merk:</strong> {car.brand}</p>   {/* Afficher la propriété 'brand' */}
                <p><strong>Type:</strong> {car.type}</p>    {/* Afficher la propriété 'type' */}
                <p><strong>Kleur:</strong> {car.color}</p>  {/* Afficher la propriété 'color' */}
            </Card.Body>
        </Card>
    );
}

// Composant Cars pour afficher la liste des voitures
export function Cars(props) {
    const {cars, title} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{ background: "lavender" }}>
            <h2 className="text-center">{title}</h2>
            <Container>
                <Row>
                    {cars.map((car) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={car.id} className="text-center">
                            <Car car={car} /> {/* Utilisation de Car pour afficher chaque voiture */}
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}