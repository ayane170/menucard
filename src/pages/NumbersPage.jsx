import {Numbers} from '../components/Numbers';
import {NUMBER_DATA} from '../data/data.js';
import Card from 'react-bootstrap/Card';

export function NumbersPage(props){
    const {numbers}= props
    const filteredNumbers = NUMBER_DATA.filter(number => number > 6);
    const doubleNumbers = NUMBER_DATA.map(numbers => numbers * 2);

    return(
         <Card style={{ padding: '20px', margin: '20px', border: '1px solid #ddd' }}>
            <Card.Body>
                <Numbers numbers={numbers} title={"Alle getallen"} isInitiallyOpen={true}/>
                <Numbers numbers={filteredNumbers} title={"getallen > 6"} />
                <Numbers numbers={doubleNumbers} title ={ "getallen * 2"}/>
            </Card.Body>
         </Card>
    )
}


