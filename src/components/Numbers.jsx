import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Section} from "./Section.jsx";

export function Numbers(props) {

    const {numbers, title} = props;

    return (
        <Section title={title}>
            {numbers.map((n, i) =>
                <Col key={i}
                     xs={4} sm={3} md={2} xxl={1}
                     className={"text-center "}>
                    <Card className="m-2 p-2 shadow-sm">{n}</Card>
                </Col>)
            }
        </Section>
    );
}


