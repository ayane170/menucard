import {Numbers} from "../components/Numbers.jsx";
import {useState} from "react";


// export function FavoriteNumberPage(props){
//     const {numbers} = props;
//     const [favorite,setFavorite]=useState(undefined);
//
//     const onSelectNumber = (number) => {
//         setFavorite(number);
//     };
// return(
//     <Card style={{padding: '20px', margin: '20px', border: '1px solid #ddd'}}>
//             <Card.Body>
//                 <Numbers
//                     numbers={numbers}
//                     onSelectNumber={onSelectNumber}
//                     favorite={favorite}
//                     title={"Alle getallen"}/>
//             </Card.Body>
//
//         <div>
//             Favoriete nummer: {favorite === undefined ? "(nog niet gekozen)" : favorite}
//         </div>
//     </Card>
// );
// }

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState();
    return (
        <div className="mx-3">
            <Numbers numbers={numbers} title="alle getallen" isInitiallyOpen={true} onSelectNumber={n =>setFavorite(n)}/>
            <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
        </div>
    );
}
