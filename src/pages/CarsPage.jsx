import Card from "react-bootstrap/Card";
import {Cars} from "../components/Cars.jsx";

export function  CarsPage(props){
    const {cars} = props

    return(
        <Card style={{ padding: '20px', margin: '20px', border: '1px solid #ddd' }}>
            <Card.Body>
                <Cars cars={cars} title={"Auto's"} />
            </Card.Body>
        </Card>
    )
}

