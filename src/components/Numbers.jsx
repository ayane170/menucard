import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export function Numbers(props) {
    const {numbers, title} = props;

    return (
        <div>
            <h3>{title}</h3>
            {numbers.map((number, index) => (
                <div key={index}>{number}</div>))}
        </div>
    );
}


