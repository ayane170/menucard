import Card from "react-bootstrap/Card";
import {Numbers} from "../components/Numbers.jsx";
import {useState} from "react";

// function   favorite (){
//     const [isFavorite]=useState(false);
//     return(
//
//     );
// }

export function FavoriteNumberPage(props){
    const {numbers} = props;
    const [favorite,setFavorite]=useState(undefined);

    const onSelectNumber = (number) => {
        setFavorite(number);
    };
return(
    <Card style={{padding: '20px', margin: '20px', border: '1px solid #ddd'}}>
            <Card.Body>
                <Numbers
                    numbers={numbers}
                    onSelectNumber={onSelectNumber}
                    favorite={favorite}
                    title={"Alle getallen"}/>
            </Card.Body>

        <div>
            Favoriete nummer: {favorite === undefined ? "(nog niet gekozen)" : favorite}
        </div>
    </Card>
);
}