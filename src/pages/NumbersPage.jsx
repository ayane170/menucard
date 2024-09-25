import {Numbers} from '../components/Numbers';
import {NUMBER_DATA} from '../data/data.js';
import Card from 'react-bootstrap/Card';

export function NumbersPage(props){
    const {numbers}= props
    return(
         <Card style={{ padding: '20px', margin: '20px', border: '1px solid #ddd' }}>
            <Card.Body>
                <Numbers numbers={numbers} title={"Alle getallen"}/>
            </Card.Body>
         </Card>
    )
}


