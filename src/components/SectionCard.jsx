import { Card, Col } from 'react-bootstrap';

export function SectionCard(props) {
    const { children, title,onSelect,isMarked } = props;
    const className = `m-2 p-2 shadow-sm text-center ${isMarked && "bg-warning" }`;

    return (
        <Col s={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <Card className={className} onClick={onSelect}>
                <h4> {title}</h4>
                {children}
            </Card>
        </Col>
    );
}