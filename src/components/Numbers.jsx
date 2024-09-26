import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {number} from "prop-types";
import {NUMBER_DATA} from "../data/data.js";

export function Numbers(props) {

    const {numbers, title} = props;

    return (
        <div className="mt-3 rounded shadow-sm" style={{background: "lavender"}}>
            <h3 className="text-center">{title}</h3>
            <Container>
                <Row>
                    {numbers.map((number, index) => (
                        <Col xs={4} sm={3} md={2} xxl={1} className={"text-center"} key={index}>
                            <Card className="m-2 p-2 shadow-sm">
                                {number}
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>
    );
}


