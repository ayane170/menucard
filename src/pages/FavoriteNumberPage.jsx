import {Numbers} from "../components/Numbers.jsx";
import {useState} from "react";


export function FavoriteNumberPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState();
    return (
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]}
                     title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumbers={[favorite]}
                     onSelectNumber={n =>setFavorite(n)}/>
            <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
        </div>
    );
}
